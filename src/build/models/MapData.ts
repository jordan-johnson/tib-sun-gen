/**
 * NOTE:
 * 
 * The Tiberian Sun developers used Yes/No for some
 * map variables and true/false for others.
 */

/**
 * Basic map properties
 */
interface BasicMapData {
    Name: string,
    RandomMap: "Yes" | "No",
    FreeRadar: "Yes" | "No"
}

/**
 * Data to dictate outcomes for random map
 */
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