(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),i=(a(0),a(223)),r={id:"release-1.1.0",title:"Release v1.1.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.1.0"]},l=[{value:"Major Features",id:"major-features",children:[]},{value:"Minor Features",id:"minor-features",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],s={permalink:"/blog/release-1.1.0",source:"@site/blog\\2020-07-27-release-1.1.0.md",description:"This release focuses on better Flashpoint support, better configurability of MC and various features and bug fixes.",date:"2020-07-27T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.1.0",permalink:"/blog/tags/v-1-1-0"}],title:"Release v1.1.0",prevItem:{title:"Release v1.1.1",permalink:"/blog/release-1.1.1"},nextItem:{title:"Release v1.0.5",permalink:"/blog/release-1.0.5"}},c={rightToc:l,metadata:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release focuses on better Flashpoint support, better configurability of MC and various features and bug fixes."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This upgrade has some breaking configuration changes"),". For upgrade instructions, see below the changelog."),Object(i.b)("p",null,"Tracked by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/18?closed=1"}),"Milestone - v1.1.0")),Object(i.b)("h2",{id:"major-features"},"Major Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Flashpoints: Custom contract type support",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This allows modders to make use of any custom contract type such as ",Object(i.b)("em",{parentName:"li"},"Blackout"),", ",Object(i.b)("em",{parentName:"li"},"Solo Duel")," and ",Object(i.b)("em",{parentName:"li"},"Duo Duel")," in flashpoints."))),Object(i.b)("li",{parentName:"ul"},"Flashpoints & Normal Contracts: Per contract MC feature overrides",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This allows modders to specify specific settings (e.g. 2 enemy and 1 ally Additional Lances) per specific contract"),Object(i.b)("li",{parentName:"ul"},"Supports both ",Object(i.b)("inlineCode",{parentName:"li"},"MissionControl/config/Contracts")," and ",Object(i.b)("inlineCode",{parentName:"li"},"MissionControl/config/Flashpoints")," folders for file management for big modpacks. By default only ",Object(i.b)("inlineCode",{parentName:"li"},"Contracts")," is used for both."))),Object(i.b)("li",{parentName:"ul"},"User & Modpack Settings Overrides",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Modpacks can create a ",Object(i.b)("inlineCode",{parentName:"li"},"settings.modpack.json")," and players can create a ",Object(i.b)("inlineCode",{parentName:"li"},"settings.user.json")," settings file to ease upgrading MC versions."),Object(i.b)("li",{parentName:"ul"},"Load order is ",Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," then ",Object(i.b)("inlineCode",{parentName:"li"},"settings.modpack.json")," then ",Object(i.b)("inlineCode",{parentName:"li"},"settings.user.json"),". With the last values overriding earlier.")))),Object(i.b)("h2",{id:"minor-features"},"Minor Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Limited Save Support: Added limited save recovery for loading combat saves that would get stuck loading due to MC issues",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Loading a combat save is not supported. This is to help players on ironman mode who saved, loaded and now are stuck with a broken save. DO NOT DO IT.")),Object(i.b)("li",{parentName:"ul"},"Fixed an issue where Additional Lances spawned in the map wouldn't load."),Object(i.b)("li",{parentName:"ul"},"MC will load the contract but all MC features are disabled. Try to finish the contract, or withdraw."))),Object(i.b)("li",{parentName:"ul"},"Flashpoints: Bigger Drop Support: Allow turning on additional player mechs for flashpoints without the other MC features")),Object(i.b)("h2",{id:"changes"},"Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow AI: Changed default follow behaviour to ",Object(i.b)("inlineCode",{parentName:"li"},"LanceOrder")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"HeaviestMech"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This means the AI will follow your player slot #1 mech. If that dies it follows slot #2, and so on."))),Object(i.b)("li",{parentName:"ul"},"Escort Convoy: ",Object(i.b)("inlineCode",{parentName:"li"},"Hunter")," lance is now limited to spawn to be within 13 and 20 hexes of the extraction zone.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Previously it spawned anywhere beyond around 8 hexes so could spawn the other end of the map or a bit too close."))),Object(i.b)("li",{parentName:"ul"},"Blackout: Phase 2 invading lance spawned too close to the buildings they were trying to destroy",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Lance now spawns between 13 and 20 hexes away instead of between 8 and 16"))),Object(i.b)("li",{parentName:"ul"},"Settings: Renamed some settings to be clearer. See the upgrade instructions for more details.")),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reward Screen Softlock: Fixed a situation where if the player restarted a mission, and the previous attempt had an enemy Additional Lance, when the contract was completed the reward screen would soft lock due to dirty contract data for objectives"),Object(i.b)("li",{parentName:"ul"},"Contracts Screen Infinite Load: Fixed another bad vanilla method situation where, in rare situations, the contracts screen would get stuck on the loading screen due to limited selection of biomes/factions/contract types/contracts."),Object(i.b)("li",{parentName:"ul"},"Dynamic Withdraw: Feature was running in situations it shouldn't.")),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(i.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Copy into your ",Object(i.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MissionControl.pdb")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mod.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config/Contracts")," folder"),Object(i.b)("li",{parentName:"ul"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," with the following:")))))),Object(i.b)("h4",{id:"change-disableifflashpointcontract-property-to-enableflashpointoverrides-and-set-to-false"},"Change ",Object(i.b)("inlineCode",{parentName:"h4"},"DisableIfFlashpointContract")," property to ",Object(i.b)("inlineCode",{parentName:"h4"},"EnableFlashpointOverrides")," and set to 'false'"),Object(i.b)("p",null,"Readability change and, if enabled, looks at the ",Object(i.b)("inlineCode",{parentName:"p"},"EnableForFlashpoints")," value in each feature section of the settings."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"EnableFlashpointOverrides": false,\n')),Object(i.b)("h4",{id:"add-enableadditionalplayermechsforflashpoints-property"},"Add ",Object(i.b)("inlineCode",{parentName:"h4"},"EnableAdditionalPlayerMechsForFlashpoints")," property"),Object(i.b)("p",null,"Allows for enabling the additional player mechs (e.g. Bigger Drop support) in Flashpoints without enabling all the other MC features."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"EnableAdditionalPlayerMechsForFlashpoints": false,\n')),Object(i.b)("h4",{id:"change-hotdrop-section-to-hotdropprotection"},"Change ",Object(i.b)("inlineCode",{parentName:"h4"},"HotDrop")," section to ",Object(i.b)("inlineCode",{parentName:"h4"},"HotDropProtection")),Object(i.b)("p",null,"Readability change to prevent people thinking this section controls 'hot drops' when it only controls the protection when a hot drop occurs."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),' "HotDropProtection": {\n')),Object(i.b)("h4",{id:"add-enableforflashpoints-for-each-major-feature-section"},"Add ",Object(i.b)("inlineCode",{parentName:"h4"},"EnableForFlashpoints")," for each major feature section"),Object(i.b)("p",null,"This is ",Object(i.b)("em",{parentName:"p"},"only")," taken into account if ",Object(i.b)("inlineCode",{parentName:"p"},"EnableFlashpointOverrides")," is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("p",null,"Add to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RandomSpawns"),Object(i.b)("li",{parentName:"ul"},"HotDropProtection"),Object(i.b)("li",{parentName:"ul"},"AdditionalLances"),Object(i.b)("li",{parentName:"ul"},"ExtendedLances"),Object(i.b)("li",{parentName:"ul"},"ExtendedBoundaries"),Object(i.b)("li",{parentName:"ul"},"DynamicWithdraw")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"EnableForFlashpoints": true,\n')),Object(i.b)("h4",{id:"remove-disableifflashpointcontract-from-additionallances-section"},"Remove ",Object(i.b)("inlineCode",{parentName:"h4"},"DisableIfFlashpointContract")," from ",Object(i.b)("inlineCode",{parentName:"h4"},"AdditionalLances")," section"),Object(i.b)("p",null,"Delete it."),Object(i.b)("h4",{id:"reverse-the-positivenegative-sign-for-the-two-below-skull-dropweightinfluence-settings"},"Reverse the positive/negative sign for the two below skull ",Object(i.b)("inlineCode",{parentName:"h4"},"DropWeightInfluence")," settings"),Object(i.b)("p",null,"This is a readability change to fix the non-intuitive set up from previous versions."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"EnemySpawnInfluencePerHalfSkullBelow": -0.1,\n"AllySpawnInfluencePerHalfSkullBelow": 0.1\n')),Object(i.b)("h4",{id:"change-target-under-followplayer-section-to-lanceorder"},"Change ",Object(i.b)("inlineCode",{parentName:"h4"},"Target")," under ",Object(i.b)("inlineCode",{parentName:"h4"},"FollowPlayer")," section to ",Object(i.b)("inlineCode",{parentName:"h4"},"LanceOrder")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"AI": {\n  "FollowPlayer": {\n    "Pathfinding": "Alternative",\n    "Target": "LanceOrder",\n')))}b.isMDXComponent=!0},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),b=r(a),p=n,d=b[l+"."+p]||b[p]||s[p]||i;return a?o.a.createElement(d,Object.assign({},{ref:t},c,{components:a})):o.a.createElement(d,Object.assign({},{ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var b=2;b<i;b++)r[b]=a[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);