import { Validator, NG_VALIDATORS,AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
@Directive({
selector:'[appPasswordComareValidation]',
providers:[{
provide: NG_VALIDATORS,
useExisting:PasswordMatchValidationDirective,
multi:true
}]


})

export class PasswordMatchValidationDirective implements Validator
{
   // @Input('appPasswordComareValidation') 
   // passwordGroup: string;
   
    validate (control: AbstractControl): {[key:string]:any} | null
{
   /// implement on NgGroup lavel 
  
    const passwordval=control.get('password');
    console.log(passwordval);
    const confirmPasswordval=control.get('confirmpassword');
    console.log(confirmPasswordval);
    if(passwordval && confirmPasswordval && passwordval.value===confirmPasswordval.value )
    {

        return {'matchedPassword':true};
    }
    // return passwordval===confirmPasswordval?{'matchedPassword':true}:null;
        return null;

    // implementing the validation on cotrol label
    //const passwordControl=control.parent.get(this.password).value;
      //  return passwordControl==control.value?{'matchedPassword':true}:null;
      // implement on NgGroup lavel


}


}