import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Employee } from '../models/employee.model';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private employee: Employee;
  private _id: number ;
  constructor(private _activatedRoute: ActivatedRoute,
    private _EmployeeService: EmployeeService,
     private  _router:Router

  ) {

  }
  NextEmployee() {
   
    if (this._id < 3) {
      this._id= this._id + 1; 
         
     }
    else { 
      this._id=1;
      
    }

    this._router.navigate(['employeeDetails/', this._id], 
   { queryParamsHandling:"preserve" }
    );

  }
  EmployeeList()
  {
    this._router.navigate(['/List', { id:this._id}])

  }


  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      param=>
      {
        console.log('1');
        this._id= +param.get('id');
        this.employee = this._EmployeeService.getEmployeesListById( this._id);

      }

    );
  //  this._id=+this._activatedRoute.snapshot.params['id'];    
   // const id = +this._activatedRoute.snapshot.params['id'];
    // const id =+this._activatedRoute.snapshot.paramMap.get('id');
    
    //this.employee = this._EmployeeService.getEmployeesListById( this._id);
  }
}
