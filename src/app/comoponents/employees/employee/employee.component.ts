import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { calcBindingFlags } from '@angular/core/src/view/util';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeesService:EmployeeService) { }

  ngOnInit() {
    this.employeesService.getEmployees();//trae los datos del servicio
    this.resetForm();
  }

  onSubmit( employeeForm:NgForm ){

    if( employeeForm.value.name != null){
        this.employeesService.insertEmployee(employeeForm.value);
    }
    else{
    this.employeesService.updateEmployee( employeeForm.value);  //ingresar producto 
      
    }

    this.resetForm( employeeForm );
  }


  resetForm( employeeForm?:NgForm){
    if (employeeForm != null) {
      employeeForm.reset();//resetear formulario
      this.employeesService.selectedEmployee = new Employee();//dejar el selectedproduct vacio
    }
  }

}
