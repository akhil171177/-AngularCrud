import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectRequiredValidatorDirective } from "./Shared/select-required-validator-directive";
import { PasswordMatchValidationDirective } from "./Shared/password-match-validation-directive";
import { EmployeeService } from "./employees/employee.service";
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard-service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import {EmployeeSearchFilterPipe  } from "./employees/employee-search-Filter-pipe";
import { PageNotFoundComponent } from './page-not-found.component';
import { CanActivateGuardService } from "./employees/canactivate-guard-service";
import {  ResolveGuardService} from "./employees/resolve-guard-service";
import { AccodionComponentComponent } from './shared/accodion-component.component';
import {HttpClientModule}  from "@angular/common/http";



const appRoutes: Routes = [
  { path: 'List', component: ListEmployeesComponent, resolve:{EmployeeList:ResolveGuardService} },
  { path: 'Create', component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardService] },
  { path: 'Create/:id', component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardService] },
  { path: '', redirectTo: '/List', pathMatch: 'full' },
  { path: 'employeeDetails/:id', component: EmployeeDetailsComponent , canActivate:[CanActivateGuardService]},
  { path: 'pageNotFound', component: PageNotFoundComponent },  
  { path: '*', component: ListEmployeesComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    PasswordMatchValidationDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeSearchFilterPipe,
    PageNotFoundComponent,
    AccodionComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),

  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService,CanActivateGuardService, ResolveGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule {




}
