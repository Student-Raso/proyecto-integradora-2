const pool = require('../db')

const getAllLocales = async (req, res) => {
  try {
    const allLocales = await pool.query('SELECT * FROM locales');
    res.json(allLocales.rows)    
  } catch (error) {
    next(error)
  }
}

const getLocal = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM locales WHERE id = $1', [id]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'No se encontró registro',
      });
    res.json(result.rows[0]);
  } catch (error) {
    next(error)
  }
}
//Crear Local
const createLocal = async (req, res, next) => {
  const {
    nombre_local,
    direccion_local,
    horario
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO locales (nombre_local, direccion_local, horario) VALUES ($1, $2, $3) RETURNING *",
      [
        nombre_local,
        direccion_local,
        horario
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}
//Eliminar Local
const deleteLocal = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM local WHERE id = $1'[id])
    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Local no existe",
      });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

const updateCita = async (req, res, next) => {
  try {
      const { id } = req.params;
      const {
        nombre_local,
        direccion_local,
        horario
       } = req.body;

      const result = await pool.query(
          "UPDATE citas SET nombre_local = $1, direccion_local =$2, horario = $3 WHERE id = $4 RETURNING *",
          [nombre_local, direccion_local, horario, id]
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

module.exports = {
  getAllLocales,
  getLocal,
  createLocal,
  deleteLocal,
  updateCita
}