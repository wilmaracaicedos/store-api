const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = `SELECT * FROM tasks`;
    const response = await this.pool.query(query);
    return response.rows;
  }
}

module.exports = UserService;
