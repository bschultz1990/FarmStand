const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://bschultz1990:krfofrgrmfrt0-60-@wdbc.rrnu9ou.mongodb.net/farmStand';
const Product = require('./models/product');

mongoose.set('strictQuery', false);
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection open!")
  })
  .catch(error => {
    console.log(error)
  })

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database")
})


// p.save().then(p => {
//   console.log(p)
// })
//   .catch(error => {
//     console.log(error)
//   })


const seedProducts = [
  {
    name: 'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable',
  },
  {
    name: "Organic Strawberries",
    price: 4.99,
    category: 'fruit',
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: 'fruit',
  },
  {
    name: "Chocolate Whole Milk",
    price: 4.20,
    category: 'dairy'
  }
]
Product.insertMany(seedProducts)
  .then (res => {
console.log(res)
  })
  .catch(error => {
    console.log(error)
  })
