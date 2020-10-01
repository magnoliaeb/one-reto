"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeController {
    // constructor (arguments) {
    // }
    createEmployee(req, res) {
        res.status(200).json();
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
