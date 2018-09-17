import { Injectable } from '@angular/core';

//model
import { Employee } from '../models/employee';
//notify
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private toastr:ToastrService) { }

  employeesList:Employee[] = [
    {  name: 'luis Miguel', position: 'Developer' ,email:'luis@hotmail.com' }
  ];

  selectedEmployee:Employee = { name:'',position:'',email:''}

  getEmployees(){
   return this.employeesList;
  }

  insertEmployee( employee:Employee ){

    
     
      
      this.employeesList.push({
        
        name: employee.name,
        position:employee.position,
        email:employee.email
      });

      this.toastr.success("Successfull Operation","Product Added");
    
     console.log(this.employeesList);

  }

  updateEmployee(id){
 
    for (let index = 0; index < this.employeesList.length; index++) {
      if (this.employeesList[index] == id) {
        console.log(index);
        
      }
      
    }
      
  }

  deleteEmployee( id:number ){
    this.employeesList.splice(id,1);
    
  }
}
