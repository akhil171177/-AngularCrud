import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Injectable } from "@angular/core";

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>
{
    canDeactivate(component: CreateEmployeeComponent): boolean 
    {
       
            return component.CreateEmployeeForm.dirty ? confirm('Are you sure you want to discard your changes?'): true;       
      
     
    }
}
