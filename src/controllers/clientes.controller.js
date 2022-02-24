const pool = require('../db')

const getAllClientes = async(req, res, next) => {
  try {
    const getAllClientes = await pool.query('SELECT * FROM clientes')
    res.json(getAllClientes.rows)
  } catch (error) {
    next(error)
  }
}

const getCliente = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [id])
    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'No se encontró registro',
      });
    res.json(result.rows[0]);
  } catch (error) {
    next(error)
  }
}

const createCliente = async(req, res, next) =>{
  const {
    nombre,
    celular,
    num_cliente
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO clientes (nombre, celular, num_cliente) VALUES ($1, $2, $3) RETURNING *",
      [
        nombre,
        celular,
        num_cliente
      ]);
      res.json(result.rows[0]);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllClientes,
  getCliente,
  createCliente
}