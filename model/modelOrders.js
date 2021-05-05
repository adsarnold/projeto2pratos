const Sequelize = require ("sequelize");
const config = require ("../config/database");
const db = new Sequelize(config);

async function getOrders() {
    const result = await db.query(`SELECT orders.id,clients.name AS clients_name, dishes.name AS dishes_name FROM orders
    left JOIN clients ON clients.id=orders.clients_id
    left JOIN dishes ON dishes.id=orders.dishes_id;`, { type: Sequelize.QueryTypes.SELECT });
    return result;
  }
  async function getOrdersById(id) {
    const result = await db.query("select * from orders where id = :ordersId", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        ordersId: id
      }
    });
  
    return result[0];
  }
  
  async function insertOrders(orders) {
    await db.query("insert into orders (clients_id, dishes_id) values (:clients_id, :dishes_id)", {
      replacements: {
        
        clients_id: orders.clients_id,
        dishes_id: orders.dishes_id,
        
      }
    })
  }
  
  
  async function updateOrders(orders) {
    await db.query("update orders set clients = :clients, dishes = :dishes, where id = :id", {
      replacements: {
        id: orders.id,
        clients: orders.clients,
        dishes: orders.dishes,
        
      }
    })
  }
  
  async function removeOrders(ordersID) {
    await db.query("delete from orders where id = :id", {
      replacements: {
        id: ordersID
      }
    })
  }
  
  module.exports = {
    getOrders: getOrders,
    insertOrders: insertOrders,
    updateOrders: updateOrders,
    removeOrders: removeOrders,
    getOrdersById: getOrdersById,
  };