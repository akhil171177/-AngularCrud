import { Resolve , ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Employee } from '../models/employee.model'
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ResolveGuardService implements Resolve<Employee[]>
{
    constructor(private _employeeService:EmployeeService)
    {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> 
    {
      debugger;
      return this._employeeService.getEmployeesList();
        
    }


}