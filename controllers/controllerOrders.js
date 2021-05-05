const modelOrders = require("../model/modelOrders");
const modelProducts = require("../model/modelProducts");
const modelClients = require("../model/modelClients");

 async function get (req,res){
   const orders = await modelOrders.getOrders();
   const dishes = await modelProducts.getProducts()
   const clients = await modelClients.getClients();
   res.render("orders",{orders:orders, dishes:dishes, clients:clients});
}

async function getEdit(req,res){
   const orderId = req.params.id;
   const orders = await modelOrders.getOrdersById(orderId);
   res.render("orders/edit",{orders:orders});
}

async function post(req,res){
    const order = req.body;
    await modelOrders.insertOrders(order);
    res.redirect("/orders");

}

async function put(req,res){
    const order = req.body;
    await modelOrders.updateOrder(order);
    res.redirect("/orders");

}

async function remove(req,res){
    const order = req.body;
    await modelOrders.removeOrder(order.id);
    res.redirect("/orders");

}

function index (req,res){
    res.render("index", { title: "Express" });
    
}

function users (req,res){
       res.render("users", {title: "Express"});
    
}


module.exports = {
    get:get,
    getEdit:getEdit,
    post:post,
    put:put,
    remove:remove,
    index:index,
    users:users
}