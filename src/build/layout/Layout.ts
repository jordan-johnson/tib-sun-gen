import { TInputType, TInputValue, InputField, Option } from "./InputField";
import { InputCategory } from "./InputCategory";
import { MapData } from "../models/MapData";

export abstract class Layout {
    private categories: InputCategory[];
    private mapcode: string;

    constructor() {
        this.categories = [];
        this.mapcode = '';
    }

    get Categories() {
        return this.categories;
    }

    get MapCode() {
        return this.mapcode;
    }

    abstract prepare(data: MapData): void;

    protected category(name:string) {
        let category: InputCategory = {
            Name: name,
            Fields: []
        }

        this.categories.push(category);

        return this;
    }

    protected row() {
        let category = this.getLastCategory();
        category.Fields.push(new Array());

        return this;
    }

    protected field(name: string, type: TInputType, binding: string, value: TInputValue, options?: Option) {
        let field: InputField = {
            Name: name,
            Id: this.makeIdentifier(name),
            Type: type,
            MapVariableBinding: binding,
            Value: value,
            Options: options
        }

        let row = this.getLastRow();
        row.push(field);

        return this;
    }

    private getLastCategory(): InputCategory {
        return this.categories[this.categories.length - 1];
    }

    private getLastRow(): InputField[] {
        let category = this.getLastCategory();

        return category.Fields[category.Fields.length - 1];
    }

    private makeIdentifier(value: string): string {
        // remove spaces
        return value.replace(/\s/g, '');
    }
}