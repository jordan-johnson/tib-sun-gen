import { MapData } from "./models/MapData";
import { Layout } from "./layout/Layout";
import { FileOperations } from "./FileOperations";

export class MapGenerator {
    file: FileOperations;
    layout: Layout;
    data: MapData;

    constructor(file: FileOperations, layout: Layout, defaultVars: MapData) {
        this.file = file;
        this.layout = layout;
        this.data = defaultVars;

        this.prepare();
    }

    view(scope: any): void {
        let mapgen = this;

        scope.categories = this.layout.Categories;
        scope.codeData = this.data;
        scope.mapCode = '';
        scope.download = () => this.downloadMap();
        scope.updateMapVariable = (binding: string, newValue: string) => this.updateMapVariable(binding, newValue);

        scope.$watch('codeData', function(newValue: MapData) {
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

    private prepare(): void {
        this.layout.prepare(this.data);
    }

    private downloadMap(): void {
        // remove spaces and append map extension
        let mapName = this.data.Basic.Name.replace(/\s/g, '') + '.map';
        let mapContent = this.parseMapCode(this.data);

        this.file.SaveFile(mapName, mapContent);
    }

    private updateMapVariable(binding: string, newValue: string): void {
        for(var flag in this.data) {
            if(binding in this.data[flag]) {
                this.data[flag][binding] = newValue;
            }
        }
    }
}