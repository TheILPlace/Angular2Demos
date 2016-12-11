import {Component, ViewContainerRef, ViewChild, AfterViewInit} from '@angular/core';

import {AgEditorComponent} from 'ag-grid-ng2/main';

import * as moment from 'moment';

@Component({
    selector: 'editor-cell',
    template: `
      
        <div style="display:inline-block; min-height:290px;">
            <datepicker (selectionDone)="clickedme($event)" [(ngModel)]="dt"  [showWeeks]="true"></datepicker>
        </div>


    `,
    styles: [`
        .mood {
            border-radius: 15px;
            border: 1px solid grey;
            background: #e6e6e6;
            padding: 15px;
            text-align:center;
            display:inline-block;
            outline:none
        }

        .default {
            padding-left:10px;
            padding-right:10px;
            border: 1px solid transparent;
            padding: 4px;
        }

        .selected {
            padding-left:10px;
            padding-right:10px;
            border: 1px solid lightgreen;
            padding: 4px;
        }
    `]
})
export class DateEditorComponent implements AgEditorComponent, AfterViewInit {
    private params: any;
    public dt:Date ;



    @ViewChild('container', {read: ViewContainerRef}) public container;
    public happy: boolean = false;

    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        //this.container.element.nativeElement.focus();
    }

    agInit(params: any): void {
        this.params = params;
        this.dt = params.value;
        //this.setHappy(params.value === "Happy");
    }

    getValue(): any {
        return this.dt;
    }

    isPopup(): boolean {
        return true;
    }

    // setHappy(happy: boolean): void {
    //     this.happy = happy;
    // }

    // toggleMood(): void {
    //     this.setHappy(!this.happy);
    // }

    onKeyDown(event): void {
        let key = event.which || event.keyCode;
        if (key == 37 ||  // left
            key == 39) {  // right
            //this.toggleMood();
            event.stopPropagation();
        }
    }


    clickedme($event) :void {
        this.dt = $event;
        this.params.stopEditing();

    }
}