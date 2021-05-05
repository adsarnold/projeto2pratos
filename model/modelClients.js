const Sequelize = require ("sequelize");
const config = require ("../config/database");
const db = new Sequelize(config);

async function getClients() {
    const result = await db.query("select * from clients;", { type: Sequelize.QueryTypes.SELECT });
    return result;
  }
  async function getClientsById(id) {
    const result = await db.query("select * from clients where id = :clientsId", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        clientsId: id
      }
    });
  
    return result[0];
  }
  
  async function insertClients(clients) {
    await db.query("insert into clients ( name, adress, phone, date) values (:name, :adress, :phone, :date)", {
      replacements: {
        
        name: clients.name,
        adress: clients.adress,
        phone: clients.phone,
        date: clients.date
      }
    })
  }
  
  
  async function updateClients(clients) {
    await db.query("update clients set name = :name, ingredients = :ingredients, weight = :weight, price =:price where id = :id", {
      replacements: {
        id: clients.id,
        name: clients.name,
        adress: clients.adress,
        phone: clients.phone,
        date: clients.date
      }
    })
  }
  
  async function removeClients(clientsID) {
    await db.query("delete from clients where id = :id", {
      replacements: {
        id: clientsID
      }
    })
  }
  
  module.exports = {
    getClients: getClients,
    insertClients: insertClients,
    updateClients: updateClients,
    removeClients: removeClients,
    getClientsById: getClientsById,
  };