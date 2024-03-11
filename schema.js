const mongoose = require('mongoose')


// Define schema for Product_Category
const productCategorySchema = new mongoose.Schema({
  name: String,
  desc: String,
  deleted_at: Date
},
{ timestamps: true });

// Define schema for Product_Inventory
const productInventorySchema = new mongoose.Schema({
  quantity: Number,
  deleted_at: Date
},
{ timestamps: true });

// Define schema for Discount
const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  desc : String ,
  discount_percent: Number,
  active: Boolean,
  deleted_at: Date
},
{ timestamps: true });

// Define schema for Product
const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  SKU:{
    type: String ,
    required : true
  } ,
  category_id :{type: mongoose.Schema.Types.ObjectId, ref: 'Product_Category' },
  inventory_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Product_Inventory' },
  price: Number,
  discount_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
  deleted_at: Date
});

// Create models based on the schemas
const Product_Category = mongoose.model('Product_Category', productCategorySchema);
const Product_Inventory = mongoose.model('Product_Inventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);
const Product = mongoose.model('Product', productSchema);

// Export models
module.exports = { Product_Category, Product_Inventory, Discount, Product };
