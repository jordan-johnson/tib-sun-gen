import { Layout } from "../layout/Layout"
import { MapData } from "./MapData";

const InputFrequency = { 'Low': 25, 'Normal': 50, 'High': 75, 'Very High': 90 };
const InputSize = { 'Small': 25, 'Normal': 50, 'Large': 75, 'Very Large': 90 };
const InputTheater = { 'Temperate': 1, 'Taiga': 2, 'Desert': 3, 'Tundra': 4 };
const InputTimeOfDay = { 'Afternoon': 1, 'Dusk': 2, 'Morning': 3, 'Night': 4 };

export class IndexLayout extends Layout {
    prepare(data: MapData): void {
        let basic = data.Basic;
        let map = data.RandomMap;
        
        this.category('Basic Information')
            .row()
                .field('Map Name', 'text', 'Name', basic.Name)
            .row()
                .field('Map Width', 'range', 'Width', map.Width, { min: 0, max: 3 })
                .field('Map Height', 'range', 'Height', map.Height, { min: 0, max: 3 })
            .row()
                .field('Player Count', 'range', 'NumPlayers', map.NumPlayers, { min: 2, max: 8 });
        
        this.category('Theme / Environment')
            .row()
                .field('Theater', 'select', 'Biome', map.Biome, InputTheater)
                .field('Time of Day', 'select', 'Time', map.Time, InputTimeOfDay)
            .row()
                .field('Plateau Size', 'select', 'RegionSize', map.RegionSize, InputSize)
                .field('Hill Frequency', 'select', 'Ruggedness', map.Ruggedness, InputFrequency)
            .row()
                .field('Water Frequency', 'select', 'WaterAmount', map.WaterAmount, InputFrequency)
                .field('Urban Frequency', 'select', 'UrbanPresence', map.UrbanPresence, InputFrequency)
                .field('Vegetation Frequency', 'select', 'Vegetation', map.Vegetation, InputFrequency)
            .row()
                .field('Day/Night Cycle', 'checkbox', 'UseTransitions', map.UseTransitions)
                .field('Ion Storms', 'checkbox', 'UseIonStorms', map.UseIonStorms);
            
        this.category('Tiberium')
            .row()
                .field('Field Size', 'select', 'Tiberium', map.Tiberium, InputSize)
                .field('Field Frequency', 'select', 'TiberiumLayout', map.TiberiumLayout, InputFrequency)
            .row()
                .field('Allow Blue Tiberium', 'checkbox', 'UseBlueTiberium', map.UseBlueTiberium);
    }
}