import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeesList:any[];
  constructor( private employeesService:EmployeeService,private toastr:ToastrService ) { }

  ngOnInit() {

    this.employeesList = this.employeesService.getEmployees();
   
    
  }


  onEdit(employee:Employee,i){
    this.employeesService.selectedEmployee = Object.assign({},employee);
    console.log(employee);
    this.employeesService.updateEmployee(i);
    console.log(i);
    
  }
  onDelete(id:number){
    console.log(id);
    let asnwer = confirm("Do you want to delete the data?")
    if (asnwer) {
      
      this.employeesService.deleteEmployee(id);
      this.toastr.success("Successfull Operation","Product Deleted")
          
    } 
       
    
  }

}
