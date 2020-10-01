"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../db/database");
class EmployeeController {
    // constructor (arguments) {
    // }
    getEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM employees ORDER BY employee_id DESC');
                const employees = response.rows;
                res.status(200).json(employees);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    getEmployeeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = parseInt(req.params._id);
                const response = yield database_1.pool.query('SELECT * FROM employees WHERE employee_id = $1', [_id]);
                const employee = response.rows[0];
                if (!employee) {
                    res.status(404).json({ message: 'Employee not found' });
                }
                res.status(200).json(employee);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    createEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { dni, name, last_name, email, address, salary, payments } = req.body;
                const response = yield database_1.pool.query('INSERT INTO employees (dni, name, last_name, email, address, salary, payments) VALUES ($1, $2, $3, $4, $5, $6, $7)', [dni, name, last_name, email, address, salary, payments]);
                res.status(201).json({ message: 'Employee created', countInserEmployee: response.rowCount });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    updateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = parseInt(req.params._id);
                const { name, last_name, email, address, salary, payments } = req.body;
                yield database_1.pool.query('UPDATE employees SET name= $1, last_name = $2, address = $3, salary = $4, payments = $5 WHERE employee_id = $6', [name, last_name, address, salary, payments, _id]);
                const response = yield database_1.pool.query('SELECT * FROM  employees WHERE employee_id = $1', [_id]);
                const employee = response.rows[0];
                res.status(200).json(employee);
                // console.log(response)
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = parseInt(req.params._id);
                const response = yield database_1.pool.query('DELETE FROM employees WHERE employee_id = $1', [_id]);
                if (response.rowCount == 0) {
                    res.status(404).json({ message: 'Employee not found' });
                }
                res.status(200).json({ message: 'Employee deleted', countDeleteEmployee: response.rowCount });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
