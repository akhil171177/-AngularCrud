
import { Validator , AbstractControl, NG_VALIDATORS} from "@angular/forms";
import { Directive, Input } from "@angular/core";
@Directive({
 selector : '[appSelectRequiredValidator]',
 providers:[{
 provide:NG_VALIDATORS,
 useExisting:SelectRequiredValidatorDirective,
 multi:true
 }]

})



export class SelectRequiredValidatorDirective implements Validator
{

    @Input('appSelectRequiredValidator') 
    defaultValue:string
  //  @Input()appSelectRequiredValidator:string;
    validate(control: AbstractControl): {[key:string]:any} | null
    {
       
         // return control.value==="-1" ?{'DefaultValue': true} :null;       

          //return control.value===this.appSelectRequiredValidator ?{'DefaultValue': true} :null;
          return control.value===this.defaultValue ?{'DefaultValue': true}:null;

    }

}