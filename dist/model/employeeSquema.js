"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const employeeSquema = new mongoose_1.Schema({
    name: { type: String, required: true, maxlength: 20 },
    lastname: { type: String, required: true, maxlength: 20 },
    email: { type: Text, uppercase: true },
    address: { type: Text },
    dni: { type: String, required: true, maxlength: 10, unique: true },
    createdAt: { type: Date, default: Date.now() },
    salary: { type: Number, default: 0.00, required: true },
    payments: { type: String, default: 'mensual' }
});
const employee = mongoose_1.default.model('employee', employeeSquema);
exports.default = employee;
