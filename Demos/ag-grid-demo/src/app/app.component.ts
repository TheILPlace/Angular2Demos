import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';


import { CustomModal } 
  from './modal/custom-modal-sample.component';

import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';
import { overlayConfigFactory } from "angular2-modal";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }
  openCustom() {
    this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext))
    .then((data) => data.result)
    .then((r) =>  {
        console.log(r)
    });
    
  }

  title = 'app works!';
}
