using UnityEngine;
using System;

using BattleTech.Designed;

namespace MissionControl.EncounterFactories {
  public class ChunkFactory {
    public static DestroyWholeLanceChunk CreateDestroyWholeLanceChunk() {
      GameObject encounterLayerGameObject = MissionControl.Instance.EncounterLayerGameObject;
      GameObject destroyWholeLanceChunkGo = new GameObject("Chunk_DestroyWholeLance");
      destroyWholeLanceChunkGo.transform.parent = encounterLayerGameObject.transform;
      destroyWholeLanceChunkGo.transform.localPosition = Vector3.zero;

      return destroyWholeLanceChunkGo.AddComponent<DestroyWholeLanceChunk>();
    }

    public static EmptyCustomChunkGameLogic CreateEmptyCustomChunk(string name) {
      GameObject encounterLayerGameObject = MissionControl.Instance.EncounterLayerGameObject;
      GameObject emptyCustomChunk = new GameObject(name);
      emptyCustomChunk.transform.parent = encounterLayerGameObject.transform;
      emptyCustomChunk.transform.localPosition = Vector3.zero;

      return emptyCustomChunk.AddComponent<EmptyCustomChunkGameLogic>();
    } 

    public static DialogueChunkGameLogic CreateDialogueChunk(string name) {
      GameObject encounterLayerGameObject = MissionControl.Instance.EncounterLayerGameObject;
      GameObject dialogChunk = new GameObject(name);
      dialogChunk.transform.parent = encounterLayerGameObject.transform;
      dialogChunk.transform.localPosition = Vector3.zero;

      DialogueChunkGameLogic dialogueChunkGameLogic = dialogChunk.AddComponent<DialogueChunkGameLogic>();
      dialogueChunkGameLogic.encounterObjectName = name;
      return dialogueChunkGameLogic;  
    }
  }
}