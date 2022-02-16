# proyecto-integradora-2
Proyecto para la clase de integradora 2

PROYECTO INTEGRADORA
//Modulos Backend
modulos son llamados en archivo index.js

Express -> Framework de Nodejs

Modulo Morgan -> opcion app.use(morga('dev'))->sirve para escuchar peticiones

nodemon -> se pueden visualizar las peticiones desde consola

pg - > modulo pg se requiere conexion a postgres

// PARA VARIABLES DE ENTORNO INSTALAR Modulo

npm i dotenv

//Estructura Proyecto - Backend

> node_modules
> database
> src
	> controllers
	 * task.controllers.js -> controlador de rutas para conectar a la bd
	 
	> routes
	 * tasks.routes.js -> endpoints  para CRUD
	* config.js
	
	* db.js -> se instancia objeto de conexion que nos permite hacer consultas
	
	* index.js
	
{}package.json -> script para iniciar el servidor "node" con npm start

//EXTENCIOENS UTILIZADAS

Thunder Client -> Cliente rest para realizar peticiones HTTP