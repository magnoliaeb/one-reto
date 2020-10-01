import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    database: 'grocery',
    host: 'localhost',
    password: 'password',
})