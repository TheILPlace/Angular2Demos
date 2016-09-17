import { Component } from '@angular/core';


@Component({
  
  selector: 'app-directive-samples',
  templateUrl: 'directive-samples.component.html',
  styleUrls: ['directive-samples.component.css']
})
export class DirectiveSamplesComponent   {


    //for demo 5
    private nowYouSeeMe = true;
    private totalClicks=0;
    onShowMeClick(){
        this.nowYouSeeMe = !this.nowYouSeeMe;
        this.totalClicks++;
    }


    //for demo 6

    private ngForItems = [10, 20,30, 40, 50];

    //for demo 7
    private myColorCode = '1';



}
