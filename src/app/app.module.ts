import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



//notify
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { EmployeesComponent } from './comoponents/employees/employees.component';
import { EmployeeComponent } from './comoponents/employees/employee/employee.component';
import { EmployeeListComponent } from './comoponents/employees/employee-list/employee-list.component';



//service
import { EmployeeService } from './services/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
