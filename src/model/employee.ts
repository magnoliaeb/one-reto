import mongoose, { Schema} from 'mongoose'

const employeeSquema = new Schema({
    name: { type: String, required: true, maxlength: 20 },
    lastname: { type: String, maxlength: 20 },
    email: { type: String, lowercase: true },
    address: { type: String },
    dni: { type: String, required: true, maxlength: 10, unique: true },
    createdAt: { type: Date, default: Date.now() },
    salary: { type: Number, default: 0.00, required: true },
    payments: { type: String, default: 'mensual'}
})

const employee = mongoose.model('employee', employeeSquema)

export default employee