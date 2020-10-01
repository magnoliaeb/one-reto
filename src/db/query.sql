CREATE DATABASE IF NOT EXISTS grocery;

CREATE TABLE IF NOT EXISTS employees (
    employee_id SERIAL PRIMARY KEY,
    dni VARCHAR(10) NOT NULL,
    name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80),
    email VARCHAR(80),
    address TEXT,
    salary NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payments VARCHAR(20) NOT NULL DEFAULT 'MENSUAL',
    CONSTRAINT employees_dni_UQ UNIQUE(dni),
    CONSTRAINT employees_email_UQ UNIQUE(email),
    CONSTRAINT employess_payments_CK CHECK(payments IN ('SEMANAL', 'QUINCENAL', 'MENSUAL'))
)

INSERT INTO employees (dni, name, last_name, email, address, salary, payments)
    VALUES
    ('22634672', 'Katlynn', 'Dibbert', 'katlynn_23@gmail.com', 'Breitenberg Ford', 555.00, 'MENSUAL'),
    ('10098562', 'Carli', 'Welch', NULL, 'Gerald Camp', 981.00, 'SEMANAL'),
    ('22525341', 'Meaghan', 'Dare', 'meaghan02@gmail.com', 'Emie Skyway', 616.00, 'MENSUAL');