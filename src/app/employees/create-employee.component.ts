import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import { fromStringWithSourceMap } from 'source-list-map';
import { Employee} from '../models/employee.model';
import {SelectRequiredValidatorDirective} from '../Shared/select-required-validator-directive';
import {  EmployeeService} from "../employees/employee.service";
import { Routes, Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm')
  public CreateEmployeeForm:NgForm;
  private newemployee:Employee;
 
  
  gender="FeMale";
  prePhoto=false;
  photoPath="";
 contractPrefrence="email";
 department="select";
 isActive=true;
 employee:Employee=
{
  id:null,
  name:null,
  gender:null,
  email:null,
  phoneNumber:null,
  contractPrefrence:null,
  dateOfBirth:null,
  department:"select",
  isActive:null,
  photoPath:null,
  password:null,
  confirmpassword:null
};


  departments :Department[] =[
  // {Id:"null" , Name:'--Select One--'},
  {Id:1 , Name:'IT'},
  {Id:2 , Name:'HR'},
  {Id:3 , Name:'    '},
  {Id:4 , Name:'Account Department'},
];
 
  constructor(private _EmployeeService:EmployeeService, 
            private _Router:Router, 
            private _ActivatedRoute: ActivatedRoute) { 
  
  }

  ngOnInit() {
    debugger;
    if(this._ActivatedRoute.snapshot.paramMap.has('id'))
    {
   this.employee= this._EmployeeService.getEmployeesListById(+this._ActivatedRoute.snapshot.paramMap.get('id'));
    }
    
  }
  ShowPreview()
  {
    
      this.prePhoto=!this.prePhoto;
    


  }
  // FormSubmit( employee:NgForm):void
  FormSubmit( employee:Employee):void
  {
    
   this.newemployee = Object.assign({},this.employee );
    this._EmployeeService.Save(this.newemployee );   
    this.CreateEmployeeForm.reset();
    this._Router.navigate(['List'])    
  //  console.log(  employee.value );
   console.log(  employee );
  }
}
