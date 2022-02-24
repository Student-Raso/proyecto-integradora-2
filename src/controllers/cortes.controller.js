const pool = require('../db')

const getAllCortes = async (req, res, next) => {
  try {
    const getAllCortes = await pool.query('SELECT * FROM cortes')
    res.json(getAllCortes.rows) 
  } catch (error) {
    next(error)
  }
}

const getCorte = async (req, res, next) => {
  try {
    const {id} = req.params
    const result = await pool.query('SELECT * FROM cortes WHERE id = $1',[id])
    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'No se encontró registro',
      });
    res.json(result.rows[0]);  
  } catch (error) {
    next(error)
  }
}

const createCorte = async (req, res, next) => {
  const {
    tipo_corte,
    precio
  } = req.body;
  try {
    const result = await pool.query('INSERT INTO cortes (tipo_corte, precio) VALUES ($1, $2) RETURNING *',
    [
      tipo_corte,
      precio
    ])
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCortes,
  getCorte,
  createCorte
}