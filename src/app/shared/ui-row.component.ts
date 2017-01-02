import {Component, Input} from '@angular/core';

@Component({
    selector:'ui-row',
    template:`
        <div class="row">
            <div class="col-{{size}}-{{widthOfLabel}}">
                {{label}}
            </div>
            <div class="col-{{size}}-{{widthOfLabel}}">
                {{value}}
            </div>
        </div>
    `
})

export class UIRowComponent{
    widthOfLabel: number = 3;
    widthOfValue: number = 9;

    @Input() label:string;
    @Input() value: string;
    @Input() size:string = 'xs';

    @Input('labelWidth') 
    set rowLabelWidth(value:number){
        this.widthOfLabel = value;
        this.widthOfValue = 12 -value;
    }
}