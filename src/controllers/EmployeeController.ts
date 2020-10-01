import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from '../db/database'

class EmployeeController {
    // constructor (arguments) {
        
    // }
    async getEmployees(req: Request, res: Response) {
        try {
            const response: QueryResult = await pool.query('SELECT * FROM employees ORDER BY employee_id DESC');
            const employees = response.rows
            res.status(200).json(employees)
            
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal server error'})
        }
    }
    async getEmployeeById(req: Request, res: Response) {
        try {
            const _id  = parseInt(req.params._id)
            const response: QueryResult = await pool.query('SELECT * FROM employees WHERE employee_id = $1', [_id]);
            const employee = response.rows[0]
            if (!employee) {
                res.status(404).json({ message: 'Employee not found'})
            }
            res.status(200).json(employee)
            
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal server error'})
        }
    }
    async createEmployee(req: Request, res: Response) {
        try {
            const { dni, name, last_name, email, address, salary, payments} = req.body
            const response: QueryResult = await pool.query('INSERT INTO employees (dni, name, last_name, email, address, salary, payments) VALUES ($1, $2, $3, $4, $5, $6, $7)', [dni, name, last_name, email, address, salary, payments]);
            
            res.status(201).json({ message: 'Employee created',  countInserEmployee: response.rowCount});
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal server error'})
        }
    }
    async updateEmployee(req: Request, res: Response) {
        try {
            const _id  = parseInt(req.params._id)
            const {, name, last_name, email, address, salary, payments} = req.body
            await pool.query('UPDATE employees SET name= $1, last_name = $2, address = $3, salary = $4, payments = $5 WHERE employee_id = $6', [name, last_name, address, salary, payments, _id])
            const response : QueryResult = await pool.query('SELECT * FROM  employees WHERE employee_id = $1', [_id])
            const employee = response.rows[0]
            res.status(200).json(employee)
            // console.log(response)
            
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal server error'})
        }
    }
    async deleteEmployee(req: Request, res: Response) {
        try {
            const _id = parseInt(req.params._id)
            const response : QueryResult = await pool.query('DELETE FROM employees WHERE employee_id = $1', [_id])
            if (response.rowCount == 0) {
                res.status(404).json({ message: 'Employee not found'});
            }
            res.status(200).json({ message: 'Employee deleted',  countDeleteEmployee: response.rowCount});

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal server error'})
        }
    }
}

const employeeController = new EmployeeController();
export default employeeController