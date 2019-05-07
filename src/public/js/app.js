!function(e){var a={};function n(i){if(a[i])return a[i].exports;var t=a[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,a,i){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)n.d(i,t,function(a){return e[a]}.bind(null,t));return i},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="",n(n.s=0)}([function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=new(n(1).MapGenerator)({InputGroups:[{Name:"Basic Information",Fields:[[{Name:"Map Name",Id:"mapName",InputType:"text",MapVariableBinding:"Name",Value:"Untitled Random Map"}],[{Name:"Map Width",Id:"mapWidth",InputType:"range",MapVariableBinding:"Width",Options:{min:0,max:3}},{Name:"Map Height",Id:"mapHeight",InputType:"range",MapVariableBinding:"Height",Options:{min:0,max:3}}],[{Name:"Player Count",Id:"mapPlayers",InputType:"range",MapVariableBinding:"numPlayers",Value:2,Options:{min:2,max:8}}]]},{Name:"Theme / Environment",Fields:[[{Name:"Theater",Id:"mapBiome",InputType:"select",MapVariableBinding:"Biome",Value:1,Options:{Temperate:1,Taiga:2,Desert:3,Tundra:4}},{Name:"Time of Day",Id:"mapTOD",InputType:"select",MapVariableBinding:"Time",Value:1,Options:{Afternoon:1,Dusk:2,Morning:3,Night:4}}],[{Name:"Plateau Size",Id:"mapPlateau",InputType:"select",MapVariableBinding:"RegionSize",Value:50,Options:{Small:25,Normal:50,Large:75,"Very Large":90}},{Name:"Hill Frequency",Id:"mapRuggedness",InputType:"select",MapVariableBinding:"Ruggedness",Value:50,Options:{Low:25,Normal:50,High:75,"Very High":90}}],[{Name:"Water Frequency",Id:"mapWater",InputType:"select",MapVariableBinding:"WaterAmount",Value:50,Options:{Small:25,Normal:50,Large:75,"Very Large":90}},{Name:"Urban Frequency",Id:"mapUrban",InputType:"select",MapVariableBinding:"UrbanPresence",Value:50,Options:{Small:25,Normal:50,Large:75,"Very Large":90}},{Name:"Vegetation Frequency",Id:"mapVegetation",InputType:"select",MapVariableBinding:"Vegetation",Value:50,Options:{Small:25,Normal:50,Large:75,"Very Large":90}}],[{Name:"Day/Night Cycle",Id:"mapCycle",InputType:"checkbox",MapVariableBinding:"UseTransitions",Value:!1}],[{Name:"Ion Storms",Id:"mapIonStorms",InputType:"checkbox",MapVariableBinding:"UseIonStorms",Value:!1}]]},{Name:"Tiberium",Fields:[[{Name:"Field Size",Id:"mapTibSize",InputType:"select",MapVariableBinding:"Tiberium",Value:50,Options:{Small:25,Normal:50,Large:75,"Very Large":90}},{Name:"Field Frequency",Id:"mapTibFreq",InputType:"select",MapVariableBinding:"TiberiumLayout",Value:50,Options:{Low:25,Normal:50,High:75,"Very High":90}}],[{Name:"Allow Blue Tiberium",Id:"mapBlueTiberium",InputType:"checkbox",MapVariableBinding:"UseBlueTiberium",Value:!0}]]},{Name:"Miscellaneous",Fields:[[{Name:"Free Radar",Id:"mapRadar",InputType:"checkbox",MapVariableBinding:"FreeRadar",Value:!1,Options:{true:"Yes",false:"No"}}]]}],MapCode:""},{Basic:{Name:"Untitled Map",RandomMap:"Yes",FreeRadar:"No"},RandomMap:{Width:2,Height:2,NumPlayers:2,Seed:1e4,Biome:1,Time:1,RegionSize:50,Ruggedness:50,Accessbility:100,WaterAmount:50,Tiberium:50,TiberiumLayout:50,Vegetation:50,UrbanPresence:50,VeinholeMonsters:1,TiberiumWildlife:0,UseIonStorms:!0,UseBlueTiberium:!0,UseTransitions:!0}});angular.module("tib",[]).controller("IndexController",["$scope",function(e){return i.view(e)}])},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){this.layout=e,this.data=a}return e.prototype.view=function(e){e.categories=this.layout.InputGroups},e}();a.MapGenerator=i}]);