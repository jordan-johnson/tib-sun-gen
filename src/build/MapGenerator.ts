import { MapData } from "./models/MapData";
import { Layout } from "./models/Layout";

export class MapGenerator {
    layout: Layout;
    data: MapData;

    constructor(layout: Layout, defaultVars: MapData) {
        this.layout = layout;
        this.data = defaultVars;
    }

    view(scope: any): void {
        scope.categories = this.layout.InputGroups;
    }
}