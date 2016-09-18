import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    .field-invalid {
      border: 1px solid red;
    }

  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'MyUserName',
    email: 'yolo@walla.com',
    password: 'MyPassword',
    gender: 'male'
  };

  genders = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
