const Sequelize = require ("sequelize");
const config = require ("../config/database");
const db = new Sequelize(config);

async function getProducts() {
    const result = await db.query("select * from dishes;", { type: Sequelize.QueryTypes.SELECT });
    return result;
  }
  async function getProductsById(id) {
    const result = await db.query("select * from dishes where id = :dishesId", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        dishesId: id
      }
    });
  
    return result[0];
  }
  
  async function insertProducts(dishes) {
    await db.query("insert into dishes (name, ingredients, weight, price) values (:name, :ingredients, :weight, :price)", {
      replacements: {
        name: dishes.name,
        ingredients: dishes.ingredients,
        weight: dishes.weight,
        price: dishes.price
      }
    })
  }
  
  
  async function updateProducts(dishes) {
    await db.query("update dishes set name = :name, ingredients = :ingredients, weight = :weight, price =:price where id = :id", {
      replacements: {
        name: dishes.name,
        ingredients: dishes.ingredients,
        weight: dishes.weight,
        price: dishes.price
      }
    })
  }
  
  async function removeProducts(dishesID) {
    await db.query("delete from dishes where id = :id", {
      replacements: {
        id: dishesID
      }
    })
  }
  
  module.exports = {
    getProducts: getProducts,
    insertProducts: insertProducts,
    updateProducts: updateProducts,
    removeProducts: removeProducts,
    getProductsById: getProductsById,
  };