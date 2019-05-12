!function(e){var t={};function i(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(1),a=i(2),o=i(3),n=i(4);let s=new a.FileOperations,l=new n.IndexLayout,u=new o.MapGenerator(s,l,r.DefaultMapValues);angular.module("tib",[]).controller("IndexController",["$scope",e=>u.view(e)])},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultMapValues={Basic:{Name:"Untitled Random Map",RandomMap:"Yes",FreeRadar:"No"},RandomMap:{Width:2,Height:2,NumPlayers:2,Seed:1e4,Biome:1,Time:1,RegionSize:50,Ruggedness:50,Accessbility:100,WaterAmount:50,Tiberium:50,TiberiumLayout:50,Vegetation:50,UrbanPresence:50,VeinholeMonsters:1,TiberiumWildlife:0,UseIonStorms:!1,UseBlueTiberium:!0,UseTransitions:!1}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FileOperations=class{SaveFile(e,t){if(""==e||!t)return;let i=new Blob([t],{type:"text/plain"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download=e,document.body.appendChild(a),a.click(),setTimeout(function(){document.body.removeChild(a),window.URL.revokeObjectURL(r)})}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MapGenerator=class{constructor(e,t,i){this.file=e,this.layout=t,this.data=i,this.prepare()}view(e){let t=this;e.categories=this.layout.Categories,e.codeData=this.data,e.mapCode="",e.download=(()=>this.downloadMap()),e.updateMapVariable=((e,t)=>this.updateMapVariable(e,t)),e.$watch("codeData",function(i){e.mapCode=t.parseMapCode(i)},!0)}parseMapCode(e){let t="";for(let i in e){t+=`[${i}]\n`;for(let r in e[i])t+=`${r}=${e[i][r]}\n`;t+="\n"}return t}prepare(){this.layout.prepare(this.data)}downloadMap(){let e=this.data.Basic.Name.replace(/\s/g,"")+".map",t=this.parseMapCode(this.data);this.file.SaveFile(e,t)}updateMapVariable(e,t){for(var i in this.data)e in this.data[i]&&(this.data[i][e]=t)}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(5),a={Low:25,Normal:50,High:75,"Very High":90},o={Small:25,Normal:50,Large:75,"Very Large":90},n={Temperate:1,Taiga:2,Desert:3,Tundra:4},s={Afternoon:1,Dusk:2,Morning:3,Night:4};t.IndexLayout=class extends r.Layout{prepare(e){let t=e.Basic,i=e.RandomMap;this.category("Basic Information").row().field("Map Name","text","Name",t.Name).row().field("Map Width","range","Width",i.Width,{min:0,max:3}).field("Map Height","range","Height",i.Height,{min:0,max:3}).row().field("Player Count","range","NumPlayers",i.NumPlayers,{min:2,max:8}),this.category("Theme / Environment").row().field("Theater","select","Biome",i.Biome,n).field("Time of Day","select","Time",i.Time,s).row().field("Plateau Size","select","RegionSize",i.RegionSize,o).field("Hill Frequency","select","Ruggedness",i.Ruggedness,a).row().field("Water Frequency","select","WaterAmount",i.WaterAmount,a).field("Urban Frequency","select","UrbanPresence",i.UrbanPresence,a).field("Vegetation Frequency","select","Vegetation",i.Vegetation,a).row().field("Day/Night Cycle","checkbox","UseTransitions",i.UseTransitions).field("Ion Storms","checkbox","UseIonStorms",i.UseIonStorms),this.category("Tiberium").row().field("Field Size","select","Tiberium",i.Tiberium,o).field("Field Frequency","select","TiberiumLayout",i.TiberiumLayout,a).row().field("Allow Blue Tiberium","checkbox","UseBlueTiberium",i.UseBlueTiberium)}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Layout=class{constructor(){this.categories=[],this.mapcode=""}get Categories(){return this.categories}get MapCode(){return this.mapcode}category(e){let t={Name:e,Fields:[]};return this.categories.push(t),this}row(){return this.getLastCategory().Fields.push(new Array),this}field(e,t,i,r,a){let o={Name:e,Id:this.makeIdentifier(e),Type:t,MapVariableBinding:i,Value:r,Options:a};return this.getLastRow().push(o),this}getLastCategory(){return this.categories[this.categories.length-1]}getLastRow(){let e=this.getLastCategory();return e.Fields[e.Fields.length-1]}makeIdentifier(e){return e.replace(/\s/g,"")}}}]);