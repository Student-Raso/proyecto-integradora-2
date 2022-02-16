const pool = require('../db')
// Funcion async para que el cliente espere respuesta de la peticion
// controloador para obtener todas las tareas
const getAllCitas = async (req, res, next) => {
    try {
        const allTasks = await pool.query('SELECT * FROM citas')
        res.json(allTasks.rows)
    } catch (error) {
        next(error)
    }
}
// Metodo para seleccionar una cita por ID
const getCita = async (req, res, next) => {
    try {
        //se deconstruye del objeto req.params propiedad id
        const { id } = req.params
        //se guarda query de un consulta por id en const result
        const result = await pool.query('SELECT * FROM citas WHERE id = $1', [id])
        //si lenght es 0, no hay registros
        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'No se encontró registro',
            });
        //devuelve objeto con respuesta
        res.json(result.rows[0]);
    }
    catch (error) {
        next(error)
    }
};

//Metodo para crear una cita
const createCita = async (req, res, next) => {
    const { nombre, apellido, telefono, local, fecha_de_cita } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO citas (nombre, apellido, telefono, local, fecha_de_cita) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [
            nombre,
            apellido,
            telefono,
            local,
            fecha_de_cita
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}
//Metodo para eliminar
const deleteCita = async (req, res, next) => {

    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM citas WHERE id = $1', [id])

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Cita no existe",
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }


}
//Metodo Update
const updateCita = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, telefono, local, fecha_de_cita } = req.body;

        const result = await pool.query(
            "UPDATE citas SET nombre = $1, apellido = $2, telefono =$3, local =$4, fecha_de_cita = $5 WHERE id = $6 RETURNING *",
            [nombre, apellido, telefono, local, fecha_de_cita, id]
        );

        if (result.rows.lenght === 0)
            return res.status(404).json({
                message: "Cita no encontrada",

            });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }


}

//esportando metodos en objeto
module.exports = {
    getAllCitas,
    getCita,
    createCita,
    deleteCita,
    updateCita
}