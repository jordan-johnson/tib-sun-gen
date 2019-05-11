import { MapData } from "./models/MapData";
import { MapGenerator } from "./MapGenerator";
import { Layout } from "./models/Layout";

declare var angular: any;

const mapData: MapData = {
    Basic: {
        Name: 'Untitled Random Map',
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
        UseIonStorms: false,
        UseBlueTiberium: true,
        UseTransitions: false
    }
}

const layout: Layout = {
    InputGroups: [
        {
            Name: 'Basic Information',
            Fields: [
                [
                    {
                        Name: 'Map Name',
                        Id: 'mapName',
                        InputType: 'text',
                        MapVariableBinding: 'Name',
                        Value: mapData.Basic.Name
                    }
                ],
                [
                    {
                        Name: 'Map Width',
                        Id: 'mapWidth',
                        InputType: 'range',
                        MapVariableBinding: 'Width',
                        Value: mapData.RandomMap.Width,
                        Options: {
                            min: 0,
                            max: 3
                        }
                    },
                    {
                        Name: 'Map Height',
                        Id: 'mapHeight',
                        InputType: 'range',
                        MapVariableBinding: 'Height',
                        Value: mapData.RandomMap.Height,                        
                        Options: {
                            min: 0,
                            max: 3
                        }
                    }
                ],
                [
                    {
                        Name: 'Player Count',
                        Id: 'mapPlayers',
                        InputType: 'range',
                        MapVariableBinding: 'NumPlayers',
                        Value: mapData.RandomMap.NumPlayers,
                        Options: {
                            min: 2,
                            max: 8
                        }
                    }
                ]
            ]
        },
        {
            Name: 'Theme / Environment',
            Fields: [
                [
                    {
                        Name: 'Theater',
                        Id: 'mapBiome',
                        InputType: 'select',
                        MapVariableBinding: 'Biome',
                        Value: mapData.RandomMap.Biome,
                        Options: {
                            'Temperate': 1,
                            'Taiga': 2,
                            'Desert': 3,
                            'Tundra': 4
                        }
                    },
                    {
                        Name: 'Time of Day',
                        Id: 'mapTOD',
                        InputType: 'select',
                        MapVariableBinding: 'Time',
                        Value: mapData.RandomMap.Time,
                        Options: {
                            'Afternoon': 1,
                            'Dusk': 2,
                            'Morning': 3,
                            'Night': 4
                        }
                    }
                ],
                [
                    {
                        Name: 'Plateau Size',
                        Id: 'mapPlateau',
                        InputType: 'select',
                        MapVariableBinding: 'RegionSize',
                        Value: mapData.RandomMap.RegionSize,
                        Options: {
                            'Small': 25,
                            'Normal': 50,
                            'Large': 75,
                            'Very Large': 90
                        }
                    },
                    {
                        Name: 'Hill Frequency',
                        Id: 'mapRuggedness',
                        InputType: 'select',
                        MapVariableBinding: 'Ruggedness',
                        Value: mapData.RandomMap.Ruggedness,
                        Options: {
                            'Low': 25,
                            'Normal': 50,
                            'High': 75,
                            'Very High': 90
                        }
                    }
                ],
                [
                    {
                        Name: 'Water Frequency',
                        Id: 'mapWater',
                        InputType: 'select',
                        MapVariableBinding: 'WaterAmount',
                        Value: mapData.RandomMap.WaterAmount,
                        Options: {
                            'Small': 25,
                            'Normal': 50,
                            'Large': 75,
                            'Very Large': 90
                        }
                    },
                    {
                        Name: 'Urban Frequency',
                        Id: 'mapUrban',
                        InputType: 'select',
                        MapVariableBinding: 'UrbanPresence',
                        Value: mapData.RandomMap.UrbanPresence,
                        Options: {
                            'Small': 25,
                            'Normal': 50,
                            'Large': 75,
                            'Very Large': 90
                        }
                    },
                    {
                        Name: 'Vegetation Frequency',
                        Id: 'mapVegetation',
                        InputType: 'select',
                        MapVariableBinding: 'Vegetation',
                        Value: mapData.RandomMap.Vegetation,
                        Options: {
                            'Small': 25,
                            'Normal': 50,
                            'Large': 75,
                            'Very Large': 90
                        }
                    }
                ],
                [
                    {
                        Name: 'Day/Night Cycle',
                        Id: 'mapCycle',
                        InputType: 'checkbox',
                        MapVariableBinding: 'UseTransitions',
                        Value: mapData.RandomMap.UseTransitions
                    }
                ],
                [
                    {
                        Name: 'Ion Storms',
                        Id: 'mapIonStorms',
                        InputType: 'checkbox',
                        MapVariableBinding: 'UseIonStorms',
                        Value: mapData.RandomMap.UseIonStorms
                    }
                ]
            ]
        },
        {
            Name: 'Tiberium',
            Fields: [
                [
                    {
                        Name: 'Field Size',
                        Id: 'mapTibSize',
                        InputType: 'select',
                        MapVariableBinding: 'Tiberium',
                        Value: mapData.RandomMap.Tiberium,
                        Options: {
                            'Small': 25,
                            'Normal': 50,
                            'Large': 75,
                            'Very Large': 90
                        }
                    },
                    {
                        Name: 'Field Frequency',
                        Id: 'mapTibFreq',
                        InputType: 'select',
                        MapVariableBinding: 'TiberiumLayout',
                        Value: mapData.RandomMap.TiberiumLayout,
                        Options: {
                            'Low': 25,
                            'Normal': 50,
                            'High': 75,
                            'Very High': 90
                        }
                    }
                ],
                [
                    {
                        Name: 'Allow Blue Tiberium',
                        Id: 'mapBlueTiberium',
                        InputType: 'checkbox',
                        MapVariableBinding: 'UseBlueTiberium',
                        Value: mapData.RandomMap.UseBlueTiberium
                    }
                ]
            ]
        },
        {
            Name: 'Miscellaneous',
            Fields: [
                [
                    {
                        Name: 'Free Radar',
                        Id: 'mapRadar',
                        InputType: 'checkbox',
                        MapVariableBinding: 'FreeRadar',
                        Value: mapData.Basic.FreeRadar,
                        Options: {
                            'true': 'Yes',
                            'false': 'No'
                        }
                    }
                ]
            ]
        }
    ],
    MapCode: ''
}

let mapgen = new MapGenerator(layout, mapData);
let app = angular.module('tib', []);

app.filter('mapCodeFilter', () => function(input: MapData) { return mapgen.parseMapCode(input) });
app.controller('IndexController', ['$scope', ($scope: any) => mapgen.view($scope)]);