const mongoose = require('mongoose');

// Schema
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

// Connect
mongoose.connect("mongodb://localhost:27017/e-comm");

const saveInDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({ name: "s24", price: "1500" });
    let result = await data.save();
    console.log(result);
}
// saveInDB();

const updateInDB = async () => {
    const product = mongoose.model('products', productSchema);
    const data = await product.updateOne(
        { name: "alpha" },
        {
            $set: { name: "alpha air", price: 5500 }
        }
    )
    console.log(data);
}
// updateInDB();

const deleteInDB = async () => {
    const product = mongoose.model('products', productSchema);
    const data = await product.deleteOne({
        name:"alpha air"
    })
    console.log(data);
}
// deleteInDB();

const findInDB = async ()=>{
    const product = mongoose.model('products', productSchema);
    const data = await product.find();
    console.log(data);
}
findInDB();