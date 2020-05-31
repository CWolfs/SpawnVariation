(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{207:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n),r=o.a.createContext({}),l=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=l(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=l(a),b=n,p=u[i+"."+b]||u[b]||c[b]||r;return a?o.a.createElement(p,Object.assign({},{ref:t},s,{components:a})):o.a.createElement(p,Object.assign({},{ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),o=a(6),r=(a(0),a(207)),l={id:"release-1.0.4",title:"Release v1.0.4",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.0.4"]},i=[{value:"Minor Features",id:"minor-features",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Custom Contract Type Builder",id:"custom-contract-type-builder",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],c={permalink:"/blog/release-1.0.4",source:"@site/blog\\2020-05-31-release-1.0.4.md",description:"This release fixes lots of very important bugs and adds some enhancements to Mission Control. One very important late addition to the patch is that the ally lance Follow AI has been fixed. If you've previously disabled them or not used them because how useless they were - it's time to try them again!",date:"2020-05-31T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.0.4",permalink:"/blog/tags/v-1-0-4"}],title:"Release v1.0.4",nextItem:{title:"Release v1.0.3",permalink:"/blog/release-1.0.3"}},s={rightToc:i,metadata:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This release fixes lots of very important bugs and adds some enhancements to Mission Control. One very important late addition to the patch is that the ally lance Follow AI has been fixed. If you've previously disabled them or not used them because how useless they were - it's time to try them again!"),Object(r.b)("p",null,"Please take the time to read through the changelog as there's some very good fixes in this patch! Enjoy!"),Object(r.b)("p",null,"For upgrade instructions, see below the changelog."),Object(r.b)("p",null,"Tracked by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/24?closed=1"}),"Milestone - v1.0.4")),Object(r.b)("h2",{id:"minor-features"},"Minor Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Additional Lances: AL lances are now taken into account before the contract autocompletes.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you want to exclude a contract from this behaviour you can specify it in the ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json")," under ",Object(r.b)("inlineCode",{parentName:"li"},"ExcludeFromAutocomplete")))),Object(r.b)("li",{parentName:"ul"},"Bigger Drops: Support for ",Object(r.b)("inlineCode",{parentName:"li"},"maxNumberOfPlayerUnits")," higher than 4 added",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Allow Bigger Drops to restrict a contract to, for example, 5 or 6 units")))),Object(r.b)("h2",{id:"changes"},"Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dynamic Withdraw: Reduced the maximum distance the extraction zone can appear from the player lance from ~17 hexes (400 meters) to 12 hexes (288 meters)."),Object(r.b)("li",{parentName:"ul"},"Blackout: Decreased event phase 2 turret event trigger wait from 3 rounds to 2 rounds"),Object(r.b)("li",{parentName:"ul"},"Blackout: Story Map 7 - Changed event phase 1 ambush camera position from medium to high to better see the droppods arrive"),Object(r.b)("li",{parentName:"ul"},"Blackout: Changed the trigger condition for event phase 1 from the whole lance to requiring only 2 lance members"),Object(r.b)("li",{parentName:"ul"},"Blackout: Changed contract balance"),Object(r.b)("li",{parentName:"ul"},"Assassinate: Assassination target's extraction zone will now always spawn at least 20 hexes (480 meters) away from the target's spawn position")),Object(r.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"AI: Follow AI - Fixed broken pathfinding to player",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"No more useless allies! Woooo!"))),Object(r.b)("li",{parentName:"ul"},"Contracts: Fixed a broken vanilla contract generation method causing infinite contract screen loads"),Object(r.b)("li",{parentName:"ul"},"Contracts: Fixed a broken vanilla contract generation method causing custom contract type contract spam"),Object(r.b)("li",{parentName:"ul"},"Loading: Fixed MDD SQL error caused by encounter loading which resulted in a frequent black screen on load to main menu for players on HDD drives instead of SSDs."),Object(r.b)("li",{parentName:"ul"},"Blackout: Blackout specific ally lance dialogue didn't play"),Object(r.b)("li",{parentName:"ul"},"Blackout: Fixed issue where contracts wouldn't end correctly if the player destroyed the ambush lance before the friendly turrets activated"),Object(r.b)("li",{parentName:"ul"},"Blackout: Fixed event phase 2 invading lance not having a random spawn rule set up correctly"),Object(r.b)("li",{parentName:"ul"},"Blackout: Story Map 7 - Fixed orientation of event phase 1 invading lance"),Object(r.b)("li",{parentName:"ul"},"Blackout: Story Map 7 - Fixed orientation of event phase 2 ambush lance"),Object(r.b)("li",{parentName:"ul"},"Additional Lances: Contracts will now not autocomplete when AL lances are still active (except for those specified in the config.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"By default ",Object(r.b)("inlineCode",{parentName:"li"},"DefendBase")," and ",Object(r.b)("inlineCode",{parentName:"li"},"FireMission")))),Object(r.b)("li",{parentName:"ul"},"Additional Lances: Finally fixed comma based locales causing the AL reward to be 100 times expected amount"),Object(r.b)("li",{parentName:"ul"},"Logs: RecomputePathing exceptions will no longer appear after a contract has loaded"),Object(r.b)("li",{parentName:"ul"},"Solo / Duo Duel: Various spelling mistakes and dialogue tweaks (thanks @CargoVroom)")),Object(r.b)("h2",{id:"custom-contract-type-builder"},"Custom Contract Type Builder"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"New Result: ",Object(r.b)("inlineCode",{parentName:"li"},"TriggerResultAtRandom")," allows you to specify multiple children results and one will be selected at random when this ",Object(r.b)("inlineCode",{parentName:"li"},"TriggerResultAtRandom")," result is triggered"),Object(r.b)("li",{parentName:"ul"},"New Result: ",Object(r.b)("inlineCode",{parentName:"li"},"IgnoreChunks")," allows you to specify multiple chunk guids. When this result is triggered it will iterate over all chunks specified and set the Chunk to ",Object(r.b)("inlineCode",{parentName:"li"},"Completed")," and any objectives as ",Object(r.b)("inlineCode",{parentName:"li"},"Ignored"))),Object(r.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(r.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Copy into your ",Object(r.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mod.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout")," folder"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dialogue")," folder"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout")," folder"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/soloduel/SoloDuel/SoloDuel_AllEyesOn.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/soloduel/SoloDuel/SoloDuel_ChallengeAccepted.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/soloduel/SoloDuel/SoloDuel_CorneredRevenge.json"))))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Replace the ",Object(r.b)("inlineCode",{parentName:"strong"},"settings.json")," section ",Object(r.b)("inlineCode",{parentName:"strong"},"IsPrimaryObjectiveIn"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"IsPrimaryObjectiveIn": ["SimpleBattle", "CaptureBase"],\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Add to the ",Object(r.b)("inlineCode",{parentName:"strong"},"settings.json")," section ",Object(r.b)("inlineCode",{parentName:"strong"},"AdditionalLances"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"ExcludeFromAutocomplete": ["DefendBase", "FireMission"],\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Modify the ",Object(r.b)("inlineCode",{parentName:"strong"},"settings.json")," value for ",Object(r.b)("inlineCode",{parentName:"strong"},"MaxDistanceForZone"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"MaxDistanceForZone": 288,\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Add to the ",Object(r.b)("inlineCode",{parentName:"strong"},"settings.json section"),"FollowPlayer",Object(r.b)("inlineCode",{parentName:"strong"},"under"),"AI`")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"TimeToWaitForPathfinding": 60,\n"TicksToWaitForPathfinding": 20\n')))}u.isMDXComponent=!0}}]);