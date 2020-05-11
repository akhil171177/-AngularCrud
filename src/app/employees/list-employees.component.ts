import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { markDirty } from '@angular/core/src/render3';
import { EmployeeService } from "../employees/employee.service";
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, Event } from "@angular/router";
import { EmptyOutletComponent } from '@angular/router/src/components/empty_outlet';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css',


  ]
})
export class ListEmployeesComponent implements OnInit {
  private employees: Employee[];
  private employeesFilter: Employee[];
  private displayLoadImage: boolean = true;

  private employeeToDisplay: Employee;
  private empIndex = 1;
  private displayEmpName: string;
  private _searchParam: string;
  private searchParam: string;
  //   get searchParam():string
  //   {
  //  return this._searchParam;
  //   }
  //   set searchParam(value:string)
  //   {
  //     this._searchParam=value;
  //    this.employeesFilter=this.employees.filter(emp => emp.name.toLowerCase().indexOf(value.toLowerCase())!=-1);   

  //   }


  /*
    employees : Employee[] =
    [{
      id:1,
      name:'Mark',
      gender:'Male',   
      contractPrefrence:'Email',
      dateOfBirth : new Date('11/12/1980'),
      department:'NCS',
      isActive:true,
      photoPath:"assets/images/Mark.jpg"
    },
    {
      id:2,
      name:'John',
      gender:'Male',   
      contractPrefrence:'Phone',
      phoneNumber: '8324701234',
      dateOfBirth : new Date('11/12/1980'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/John.jpg'
    },
    {
      id:3,
      name:'Mary',
      gender:'Female',   
      contractPrefrence:'Phone',
      phoneNumber: '8324701236',
      dateOfBirth : new Date('11/12/1982'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/Mary.jpg'
    }
  
  ];
  */



  constructor(private _EmployeeService: EmployeeService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    debugger;  
   this.employeesFilter= this._ActivatedRoute.snapshot.data["EmployeeList"];

 

  }
  employeesDetails(employeenumber: string) {
    this._Router.navigate(['employeeDetails', employeenumber],
      {
        queryParams: { 'SearchParam': this.searchParam, 'testParam': 'test' }

      }

    );
  }

  ngOnInit() {
    debugger;
    this._EmployeeService.getEmployeesList().subscribe(
      (observer) => {
        debugger;
        this.employeesFilter = observer;
        this.employees = observer;
        this.employeeToDisplay = this.employeesFilter[0];

        // if (this._ActivatedRoute.snapshot.paramMap.get["delete"]) {

        //   this.employeesFilter = observer.filter(empfileter =>
        //      empfileter.id != +this._ActivatedRoute.snapshot.paramMap.get["id"]);

        // }
      }
    );
    // this.employeesFilter = this.employees;
    // this.employeeToDisplay =  this.employeesFilter[0];

    // this.employeeToDisplay = this.employees[0];
   
  }
  NextEmployee(): void {
    if (this.empIndex <= 2) {
      this.employeeToDisplay = this.employees[this.empIndex];
      this.empIndex++;

    }
    else {
      this.employeeToDisplay = this.employees[this.empIndex - 1];

    }


  }
  EmployeeFilter() {
    debugger;
        this.employeesFilter = this.employees.filter(emp => emp.name.toLowerCase().indexOf(this.searchParam.toLowerCase()) != -1);

  }
  // session 36
  /*
    handleNotify(empname:string)
    {
      debugger;
   this.displayEmpName=empname;
  
    }
    */


}
