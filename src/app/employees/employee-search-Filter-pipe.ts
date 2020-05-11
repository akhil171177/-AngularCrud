import { PipeTransform, Injectable, Pipe } from "@angular/core";
import { PipeResolver, CommentStmt } from '@angular/compiler';
import { Employee } from "../models/employee.model";
import { EmployeeService } from "./employee.service";

@Pipe({
    name: 'EmployeeSearchPipe'
    
})


export class EmployeeSearchFilterPipe implements PipeTransform {
   

    constructor(private _EmployeeService: EmployeeService) {
      

    }

    transform(employee: Employee[], searchPraram: string):Employee[]
    {
 if(!employee || !searchPraram )
{
    return employee; 
}
else{    
return employee.filter(employees => employees.name.toLowerCase().indexOf( searchPraram.toLowerCase())!=-1);
}


}

}