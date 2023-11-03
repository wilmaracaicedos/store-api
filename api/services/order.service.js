const { models } = require('../libs/sequelize');
const CustomerService = require('./customer.service');

const customerService = new CustomerService();

class OrderService {
  constructor() {}

  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
    return order;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId,
      },
      include: [
        {
          association: 'customer',
          include: ['user'],
        }
      ],
    });
    return orders;
  }

  async create(userId, body) {
    const customer = await customerService.findByUser(userId);
    const customerId = customer.dataValues.id;
    const data = {
      ...body,
      customerId,
    }
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.bulkCreate(data);
    return newItem;
  }
}

module.exports = OrderService;
