import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  
  selector: 'app-pass-data-child',
  template: `
    <div class="counter">
      <div class="counter__container">
        <button (click)="decrement();" class="counter__button">
          -
        </button>
        <input type="text" class="counter__input" [value]="counterValue" readonly>
        <button (click)="increment();" class="counter__button">
          +
        </button>
      </div>
    </div>
  `,
  styles: [`
    .counter {
      position: relative;
    }
    .counter__input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
    }
    .counter__button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      width: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `]
})
export class PassDataChildComponent  {

 @Input() counterValue: number = 0 ;
 @Output() counterChange = new EventEmitter();
 
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}

