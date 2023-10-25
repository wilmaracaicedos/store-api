const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'postgres',
    port: 5432,
    user: 'wilmar',
    password: 'admin123',
    database: 'my_store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
