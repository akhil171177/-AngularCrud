import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient  } from "@angular/common/http";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable() 
export class EmployeeService {
  constructor(private httpClient:HttpClient)
  {


  }
  private _employee:Employee;
    private employeeList:Employee[] =[{
        id:1,
        name:'Mark',
        gender:'Male',   
        contractPrefrence:'Email',
        dateOfBirth : new Date('11/12/1980'),
        department:'NCS',
        email:'Mark@gmail.com',
        phoneNumber:'111131',
        isActive:true,
        photoPath:"assets/images/Mark.jpg",
        password:'12',
        confirmpassword:'12'        
      },
      {
        id:2,
        name:'John',
        gender:'Male',   
        contractPrefrence:'Phone',
        phoneNumber: '8324701234',
        dateOfBirth : new Date('11/12/1980'),
        department:'1',
        email:'John@gmail.com',        
        isActive:true,
        photoPath:'assets/images/John.jpg',
        password:'123',
        confirmpassword:'123'
      },
      {
        id:3,
        name:'Mary',
        gender:'Female',   
        contractPrefrence:'Phone',
        phoneNumber: '8324701236',
        dateOfBirth : new Date('11/12/1982'),
        department:'2',
        email:'Mary@gmail.com',       
        isActive:true,
        photoPath:'assets/images/Mary.jpg',
        password:'1234',
        confirmpassword:'1234'
      }
    
    ];
    // public getEmployeesList():Employee[]
    // {
    //     return this.employeeList;
    // }
    //Create observable from array 
    // public getEmployeesList():Observable<Employee[]>
    // {
      
    //     return Observable.of( this.employeeList).delay(2000);
    // }
    // getting employee list through json json 
    public getEmployeesList():Observable<Employee[]>
    {
      
        return  this.httpClient.get<Employee[]>("http://localhost:3000/employeeList");
        
        
    }
    public Save(employee:Employee)
    {
        this.employeeList.push(employee);

    }
    public getEmployeesListById(empId:number):Employee
    {
    //  this.employeeList=this.httpClient.get<Employee[]>("http://localhost:3000/employeeList");
 
   return this._employee= this.employeeList.find(e=>e.id==empId);
    }
    public DeletEmployeesById(empId:number)
    {
 
   const indexId = this.employeeList.findIndex(e=> e.id== +empId);
   if(indexId!=-1)
   {
    this.employeeList.splice(indexId, 1);

   }
    }


}