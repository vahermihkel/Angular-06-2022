import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  form: FormGroup;

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employeesFromBackend => 
      this.employees = employeesFromBackend.data );
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({ // TODO: Add validations
      id: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZöäüõÖÄÜÕ\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['', Validators.required],
    });
  }

  addEmployee(): void {
    // this.form.value.id;
    // TODO: Add an employee to the table
    const newEmployee: any = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      avatar: this.form.get('avatar').value
    };
    this.employees.push(newEmployee);
    this.initForm();
  }

  deleteEmployee(employee): void {
    // TODO: Delete an employee from the table
    const index = this.employees.indexOf(employee);
    this.employees.splice(index,1);
  }
}
