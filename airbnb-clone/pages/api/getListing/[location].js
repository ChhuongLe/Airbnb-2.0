import conn from '../../../lib/db.js';

export default async function getLocationByCity(req, res) {
  const data = await conn.query(`SELECT * FROM listings WHERE city = '${req.query.location}'`);
  res.status(200).send(data);
}