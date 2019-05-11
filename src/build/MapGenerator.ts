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
        let mapgen = this;

        scope.categories = this.layout.InputGroups;
        scope.codeData = this.data;
        scope.mapCode = '';
        scope.updateMapVariable = (binding: string, newValue: string) => this.updateMapVariable(binding, newValue);

        scope.$watch('codeData', function(newValue: MapData, oldValue: MapData) {
            scope.mapCode = mapgen.parseMapCode(newValue);
        }, true);
    }

    parseMapCode(code: MapData): string {
        let output = '';

        for(let flag in code) {
            output += `[${flag}]\n`;

            for(let mapVar in code[flag]) {
                output += `${mapVar}=${code[flag][mapVar]}\n`;
            }

            output += '\n';
        }

        return output;
    }

    private updateMapVariable(binding: string, newValue: string) {
        for(var flag in this.data) {
            if(binding in this.data[flag]) {
                this.data[flag][binding] = newValue;
            }
        }
    }
}