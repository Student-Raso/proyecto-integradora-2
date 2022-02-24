CREATE DATABASE esteticadb;

CREATE TABLE citas(
	id SERIAL PRIMARY KEY,
	cliente VARCHAR(255) NOT NULL,
	tipo_corte VARCHAR(255) NOT NULL,
	precio_corte NUMERIC NOT NULL,
	local_selec VARCHAR(255) NOT NULL,
	fecha_generada TIMESTAMP DEFAULT Now(),
	fecha_cita TIMESTAMP,
	fecha_cancelada TIMESTAMP DEFAULT NULL
);

CREATE TABLE locales(
	id SERIAL PRIMARY KEY,
	nombre_local VARCHAR(255) NOT NULL,
	direccion_local VARCHAR(255) NOT NULL,
	horario VARCHAR(255) NOT NULL
);

CREATE TABLE clientes(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(255) NOT NULL,
	celular VARCHAR(255) NOT NULL,
	num_cliente INT NOT NULL
);

CREATE TABLE cortes(
	id SERIAL PRIMARY KEY,
	tipo_corte VARCHAR(255) NOT NULL,
	precio NUMERIC NOT NULL
);