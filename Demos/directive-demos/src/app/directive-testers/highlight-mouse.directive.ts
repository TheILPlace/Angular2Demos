import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight-mouse]'
})
export class HighlightMouseDirective {

private whatColorYouWant =  'white';

//the event of the host element to listen to
@HostListener('mouseenter') mouseenter(){
    this.whatColorYouWant='green';
}

//the event of the host element to listen to
@HostListener('mouseleave') mouseleave(){
    this.whatColorYouWant='white';
}

 numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
        this.numberOfClicks++;
        console.log("object", btn, "number of clicks:", this.numberOfClicks);
    
  }



//the propety of the host element to bind to
// getter function - typescript
@HostBinding('style.backgroundColor') get getColor()
{
    return this.whatColorYouWant;

}


constructor(){
     
   }
  

}
