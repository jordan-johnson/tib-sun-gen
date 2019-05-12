import { DefaultMapValues } from "./models/MapData";
import { FileOperations } from "./FileOperations";
import { MapGenerator } from "./MapGenerator";
import { IndexLayout } from "./models/IndexLayout";

declare var angular: any;

let file = new FileOperations();
let layout = new IndexLayout();
let mapgen = new MapGenerator(file, layout, DefaultMapValues);
let app = angular.module('tib', []);

app.controller('IndexController', ['$scope', ($scope: any) => mapgen.view($scope)]);