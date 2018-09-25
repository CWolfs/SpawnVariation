using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using BattleTech;
using BattleTech.Framework;

using MissionControl.Logic;
using MissionControl.Rules;
using MissionControl.Utils;

namespace MissionControl {
  public class MissionControl {
    private static MissionControl instance;

    public Contract CurrentContract { get; private set; }
    public string ContractMapName { get; private set; }
    public ContractType CurrentContractType { get; private set; } = ContractType.INVALID_UNSET;
    public EncounterRule EncounterRule { get; private set; }
    public GameObject EncounterLayerParentGameObject { get; private set; }
    public EncounterLayerParent EncounterLayerParent { get; private set; }
    public GameObject EncounterLayerGameObject { get; private set; }
    public EncounterLayerData EncounterLayerData { get; private set; }
    public HexGrid HexGrid { get; private set; }

    public bool IsContractValid { get; private set; } = false;

    private Dictionary<string, List<EncounterRule>> AvailableEncounters = new Dictionary<string, List<EncounterRule>>();

    public static MissionControl GetInstance() { 
      if (instance == null) instance = new MissionControl();
      return instance;
    }

    private MissionControl() {
      LoadEncounterRules();
    }

    private void LoadEncounterRules() {
      AddEncounter("Rescue", new RescueEncounterRules());
      AddEncounter("DefendBase", new DestroyBaseEncounterRules());
      AddEncounter("DestroyBase", new DestroyBaseEncounterRules());
      AddEncounter("SimpleBattle", new SimpleBattleEncounterRules());
      AddEncounter("CaptureBase", new CaptureBaseEncounterRules());
    }

    public void AddEncounter(string contractType, EncounterRule encounter) {
      if (!AvailableEncounters.ContainsKey(contractType)) AvailableEncounters.Add(contractType, new List<EncounterRule>());
      AvailableEncounters[contractType].Add(encounter);  
    }

    public void InitSceneData() {
      CombatGameState combat = UnityGameInstance.BattleTechGame.Combat;

      if (!EncounterLayerParentGameObject) EncounterLayerParentGameObject = GameObject.Find("EncounterLayerParent");
      EncounterLayerParent = EncounterLayerParentGameObject.GetComponent<EncounterLayerParent>();

      EncounterLayerData = GetActiveEncounter();
      EncounterLayerGameObject = EncounterLayerData.gameObject;
      EncounterLayerData.CalculateEncounterBoundary();

      if (HexGrid == null) HexGrid = ReflectionHelper.GetPrivateStaticField(typeof(WorldPointGameLogic), "hexGrid") as HexGrid;
    }

    public void SetContract(Contract contract) {
      Main.Logger.Log($"[MissionControl] Setting contract '{contract.Name}'");
      CurrentContract = contract;
      Main.Logger.Log($"[MissionControl] Contract map is '{contract.mapName}'");
      ContractMapName = contract.mapName;
      SetContractType(CurrentContract.ContractType);
    }

    /*
      Future proofed method to allow for string custom contract type names
      instead of relying only on the enum values
    */
    public bool SetContractType(ContractType contractType) {
      CurrentContractType = contractType;
      List<EncounterRule> encounters = null;

      string type = Enum.GetName(typeof(ContractType), contractType);
      if (AvailableEncounters.ContainsKey(type)) {
        encounters = AvailableEncounters[type];
      } else {
        Main.Logger.LogError($"[MissionControl] Unknown contract / encounter type of '{type}'");
        return false;
      }

      int index = UnityEngine.Random.Range(0, encounters.Count - 1);
      EncounterRule selectedEncounter = encounters[index];
      Main.Logger.Log($"[MissionControl] Setting contract type to '{type}' and using Encounter Rule of '{selectedEncounter.GetType().Name}'");
      SetEncounterRule(selectedEncounter);

      IsContractValid = true;
      return true;
    }

    private void SetEncounterRule(EncounterRule encounterRule) {
      EncounterRule = encounterRule;
      EncounterRule.Build();
    }

    public void RunEncounterRules(LogicBlock.LogicType type, RunPayload payload = null) {
      switch (type) {
        case LogicBlock.LogicType.RESOURCE_REQUEST: {
          EncounterRule.Run(LogicBlock.LogicType.RESOURCE_REQUEST, payload);
          break;
        }
        case LogicBlock.LogicType.CONTRACT_OVERRIDE_MANIPULATION: {
          EncounterRule.Run(LogicBlock.LogicType.CONTRACT_OVERRIDE_MANIPULATION, payload);
          break;
        }
        case LogicBlock.LogicType.ENCOUNTER_MANIPULATION: {
          EncounterRule.Run(LogicBlock.LogicType.ENCOUNTER_MANIPULATION, payload);
          break; 
        }
        case LogicBlock.LogicType.SCENE_MANIPULATION: {
          EncounterRule.Run(LogicBlock.LogicType.SCENE_MANIPULATION, payload);
          break;
        }
        default: {
          Main.Logger.LogError($"[RunEncounterRules] Unknown type of '{type.ToString()}'");
          break;
        }
      }
    }

    private EncounterLayerData GetActiveEncounter() {
      if (EncounterLayerData) return EncounterLayerData;

      Contract activeContract = UnityGameInstance.BattleTechGame.Combat.ActiveContract;
      string encounterObjectGuid = activeContract.encounterObjectGuid;
      EncounterLayerData selectedEncounterLayerData = EncounterLayerParent.GetLayerByGuid(encounterObjectGuid);
      
      return selectedEncounterLayerData;
    }
  }
}