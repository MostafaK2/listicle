// File to perform CRUD operations for cars table

import { pool } from "../config/database.js";

const getCars = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getCars,
};
