import conn from '../../lib/db.js';

export default async function handler(req, res) {
  const query = `SELECT * FROM listings`
  const data = await conn.query(query);
  res.status(200).send(data);
}