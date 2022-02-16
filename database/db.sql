CREATE DATABASE esteticadb;

CREATE TABLE citas(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
	apellido VARCHAR(255) NOT NULL,
	telefono VARCHAR(255) NOT NULL,
	local VARCHAR(255) NOT NULL,
	fecha_generada TIMESTAMP DEFAULT Now(),
	fecha_de_cita TIMESTAMP
);