import { Request, Response, Router } from 'express'
import employeeController from '../controllers/EmployeeController'

const router = Router();

// router.get('/employee', (req: Request, res: Response) => {
//     res.json({ message: 'hola'})
// })

router.get('/employee', employeeController.getEmployees)
router.get('/employee/:_id', employeeController.getEmployeeById)
router.post('/employee', employeeController.createEmployee)
router.put('/employee/:_id', employeeController.updateEmployee)
router.delete('/employee/:_id', employeeController.deleteEmployee)

export default router