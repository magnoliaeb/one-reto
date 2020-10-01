"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeeController_1 = __importDefault(require("../controllers/EmployeeController"));
const router = express_1.Router();
router.post('/employee', EmployeeController_1.default.createEmployee);
router.get('/employee', EmployeeController_1.default.createEmployee);
router.put('/employee', EmployeeController_1.default.createEmployee);
router.delete('/employee', EmployeeController_1.default.createEmployee);
exports.default = router;
