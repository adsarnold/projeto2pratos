const modelProducts = require("../model/modelProducts");

 async function get (req,res){
   const dish = await modelProducts.getProducts();
   res.render("products",{dishes:dish});
}

async function getEdit(req,res){
   const productId = req.params.id;
   const product = await modelProducts.getProductById(productId);
   res.render("products/edit",{product:product});
}

async function post(req,res){
    const product = req.body;
    await modelProducts.insertProducts(product);
    res.redirect("/products");

}

async function put(req,res){
    const product = req.body;
    await modelProducts.updateProduct(product);
    res.redirect("/products");

}

async function remove(req,res){
    const product = req.body;
    await modelProducts.removeProduct(product.id);
    res.redirect("/products");

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