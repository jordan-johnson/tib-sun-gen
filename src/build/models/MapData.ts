/**
 * NOTE:
 * 
 * The Tiberian Sun developers used Yes/No for some
 * map variables and true/false for others.
 * 
 * At the moment, there are no layout options to change
 * the yes/no variables. It's too hacky to make exceptions
 * for two or so variables.
 */

interface BasicMapData {
    Name: string,
    RandomMap: "Yes" | "No",
    FreeRadar: "Yes" | "No"
}

interface RandomMapData {
    Width: number,
    Height: number,
    NumPlayers: number,
    Seed: number, // not used AFAIK
    Biome: number, // terrain type
    Time: number, // time of day
    RegionSize: number, // plateau size
    Ruggedness: number, // hills
    Accessbility: number, // cliff ramps?
    WaterAmount: number,
    Tiberium: number, // size of fields
    TiberiumLayout: number, // frequency of fields
    Vegetation: number, // frequency
    UrbanPresence: number, // frequency
    VeinholeMonsters: number, // total number
    TiberiumWildlife: number, // needs more testing
    UseIonStorms: boolean,
    UseBlueTiberium: boolean,
    UseTransitions: boolean // day/night cycles
}

export interface MapData {
    Basic: BasicMapData,
    RandomMap: RandomMapData

    // index signature for looping through the object
    [key: string]: any;
}

export const DefaultMapValues: MapData = {
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