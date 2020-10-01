import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'


import employeeRouter from './routes/employee'

const app = express();


app.use(morgan('dev'));
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api', (req, res) => {
    res.json({ message: 'welcome to my api rest'})
})

app.use('/api', employeeRouter)

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})