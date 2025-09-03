import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  getEmployeeData() {
    return 'Fetching the employee data';
  }
}
