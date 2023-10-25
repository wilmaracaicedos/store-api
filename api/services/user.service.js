const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const response = await models.User.findAll();
    return response;
  }
}

module.exports = UserService;
