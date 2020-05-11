import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "./employee.service";




@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})

export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input()
  employee:Employee;
  @Input()
  empId:number;
  
  private selectedEmpid:number;
  private isPanelHidden:true;

    // session 36
    /*
      @Output()
      notify: EventEmitter<string>= new EventEmitter< string>();
      */

    //Detect component input value get changed using property setter
    //private _employee: Employee;
    /* property setter by ste/get
    @Input()
    set employee(val: Employee) {
  
      // console.log('current value -->' + val.name)
      // console.log('previous value -->' + this._employee ? this._employee : '')
      this._employee = val
  
    }
    get employee(): Employee {
      return this._employee;
  
    }
    */


    constructor(private _ActivatedRoute:ActivatedRoute, 
      private _EmployeeService:EmployeeService, 
      private _router: Router) { 

      this.selectedEmpid=+this._ActivatedRoute.snapshot.params['id'];
      // this.empid=+this._ActivatedRoute.snapshot.paramMap.get('id');
    }


  ngOnInit() {
  }
  // Detect component input value get changed using OnChnages
  ngOnChanges(changes: SimpleChanges) {

    const currentvalue = <Employee>changes.employee.currentValue;
    const previousValue = <Employee>changes.employee.previousValue;
    console.log(currentvalue);
    console.log(previousValue ? previousValue : null);

  }
  
  DisplayEmployeeDetails():string
  {
    return this.employee.name + ' ' + this.employee.gender;

  }
  VeiwEmployeeDeatils()
  {
  //  this.employee= this._EmployeeService.getEmployeesListById(+ this._ActivatedRoute.snapshot.paramMap.get('id'));
  this._router.navigate(['employeeDetails/', this.employee.id]);

  }
  EditEmployeeDeatils()
  {
    // option parameter
   
    this._router.navigate(['Create', {id:this.employee.id}]);
    
  }
  DeleteEmployeeDeatils()
  {
    if (confirm("Do you want to delet the seected employee"))
    {
     this._EmployeeService.DeletEmployeesById(this.employee.id);
    }
    
  }
  // session 36
  /*
    NotifyEvent()
    {
     debugger;
    this.notify.emit(this.employee.name); 
    }
    */

}
