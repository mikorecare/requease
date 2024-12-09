import { Component, Input } from "@angular/core";


@Component({
    selector: "table-engine-app",
    templateUrl: "./table-engine.component.html"
})
export abstract class TableEngineComponent {
    @Input({required: true}) public data = [];


    public get headerKeys(): string[] {
        if (this.data.length > 0 && typeof this.data[0] === 'object') {
          return Object.keys(this.data[0]); // Get the keys of the first object in the array
        }
        return []; // Return an empty array if data is empty or does not contain objects
      }
      
    constructor(){}

    
}