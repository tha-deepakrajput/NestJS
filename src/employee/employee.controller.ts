import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeServices: EmployeeService) {}

  @Get()
  getProducts() {
    return this.employeeServices.getEmployeeData();
  }
}
