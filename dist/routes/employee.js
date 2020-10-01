"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeeController_1 = __importDefault(require("../controllers/EmployeeController"));
const router = express_1.Router();
// router.get('/employee', (req: Request, res: Response) => {
//     res.json({ message: 'hola'})
// })
router.get('/employee', EmployeeController_1.default.getEmployees);
router.get('/employee/:_id', EmployeeController_1.default.getEmployeeById);
router.post('/employee', EmployeeController_1.default.createEmployee);
router.put('/employee/:_id', EmployeeController_1.default.updateEmployee);
router.delete('/employee/:_id', EmployeeController_1.default.deleteEmployee);
exports.default = router;
