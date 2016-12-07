import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
function validateInputNameFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    if (c.value == null)
      return null;

    let isValid = c.value === 'Achi';
    
    if(isValid) {
      return null;
    } else {
      return {
        validateAchiName: {
          valid2: false
        }
      };
    }

  }
}


@Directive({
  selector: '[validateAchiName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: InputNameValidator, multi: true }
  ]
})
export class InputNameValidator implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateInputNameFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}