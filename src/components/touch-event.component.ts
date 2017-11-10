import { Component } from "@angular/core";

@Component({
    selector: 'app-touch-event',
    template: `
        <div class="gestures"
            (click)="onElementClicked()"
            padding>
         Click me
        </div>
        
        <div class="gestures"
            (tap)="onElementTaped()"
            padding>
         Tap me
        </div>
        
        <div class="gestures"
             (press)="onElementPressed()"
             (click)="onElementClicked()"
             padding>
         Long press me
        </div>`
})
export class TouchEventComponent{

    onClick(){
        console.log("clicked");
    }

    onElementClicked(){
        console.log("I was clicked or touched");
    }
    
    onElementTaped(){
        console.log("I was Taped");
    }
    
    onElementPressed(){
        console.log("I was Pressed");
    }
}