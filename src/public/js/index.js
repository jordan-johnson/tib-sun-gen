"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapGenerator_1 = require("./MapGenerator");
var defaultMapVars = {
    Basic: {
        Name: 'Untitled Map',
        RandomMap: 'Yes',
        FreeRadar: 'No'
    },
    RandomMap: {
        Width: 2,
        Height: 2,
        NumPlayers: 2,
        Seed: 10000,
        Biome: 1,
        Time: 1,
        RegionSize: 50,
        Ruggedness: 50,
        Accessbility: 100,
        WaterAmount: 50,
        Tiberium: 50,
        TiberiumLayout: 50,
        Vegetation: 50,
        UrbanPresence: 50,
        VeinholeMonsters: 1,
        TiberiumWildlife: 0,
        UseIonStorms: true,
        UseBlueTiberium: true,
        UseTransitions: true
    }
};
var layout = {
    Name: "hello world",
    Fields: [
        {
            Name: 'Map Name',
            Id: 'mapName',
            InputType: 'text',
            MapVariableBinding: 'Name'
        }
    ]
};
/*
const layout: InputCategory[] = [
    {
        Name: 'Basic Information',
        Fields: [
            {
                Name: 'Map Name',
                Id: 'mapName',
                InputType: 'text',
                MapVariableBinding: 'Name'
            }
        ]
    }
]*/
var mapgen = new MapGenerator_1.MapGenerator(defaultMapVars);
var appVartest = angular.module('tib', []);
appVartest.controller('myCtrl', function ($scope) {
    $scope.testing = 'hi';
});
