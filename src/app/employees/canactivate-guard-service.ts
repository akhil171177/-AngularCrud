import { ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from "./employee.service";
import { PageNotFoundComponent } from '../page-not-found.component';

@Injectable()
export class CanActivateGuardService implements CanActivate {
    private _empid: number
    constructor(private _EmployeeService: EmployeeService, 
        private _ActivatedRoute: ActivatedRoute, 
        private _router:Router) {


    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if (route.paramMap.get('id')) {  
            const employeeExists=!!this._EmployeeService.getEmployeesListById(+route.paramMap.get('id'));     
            if (employeeExists) {
                return true;

            }
          else{
            this._router.navigate(["pageNotFound"]);
            return false;
          }

        }

    }

}