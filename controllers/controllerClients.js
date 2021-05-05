const modelClients = require("../model/modelClients");

 async function get (req,res){
   const clients = await modelClients.getClients();
   res.render("clients",{clients:clients});
}

async function getEdit(req,res){
   const clientId = req.params.id;
   const client = await modelClients.getClientById(clientId);
   res.render("clients/edit",{client:client});
}

async function post(req,res){
    const client = req.body;
    await modelClients.insertClients(client);
    res.redirect("/clients");

}

async function put(req,res){
    const client = req.body;
    await modelClients.updateClient(client);
    res.redirect("/clients");

}

async function remove(req,res){
    const client = req.body;
    await modelClients.removeClient(client.id);
    res.redirect("/clients");

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