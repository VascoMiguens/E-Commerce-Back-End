// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  //When we delete a Category, make sure to also delete the associated Product
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //Associate Tag with Product through ProductTag
  //Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  //Alias for when data is retrieved
  as: "Product_Tag",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //Associate Product with Tag through ProductTag
  //Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  //Alias for when data is retrieved
  as: "Tag_Product",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
