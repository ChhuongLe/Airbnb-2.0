import conn from '../../lib/db.js';

export default async function handler(req, res, location) {
  const query = `SELECT * FROM cities INNER JOIN listings on cities.id=listings.city_id WHERE cities.city = ${location}`
  const data = await conn.query(query);
  res.status(200).send(data);
}