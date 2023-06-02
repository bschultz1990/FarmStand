// External dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

// Parse extended urls and convert into a JavaScript object
app.use(express.urlencoded({ extended: true }))

// Set view engine and path.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set paths
app.get('/', (req, res) => {
  res.send('TESTING');
})

app.get('/products/new', (req, res) => {
  res.render('products/new');
})

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  // console.log(products)
  res.render('products/index', { products })
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  // console.log(product);
  res.render('products/show', { product });
})

// Listen on port 3000
// Open using `noderun index.js`
// http://localhost:3000
app.listen(3000, () => {
  console.log("Listening on port 3000");
})


// Mongoose section
const connectionString = 'mongodb+srv://bschultz1990:krfofrgrmfrt0-60-@wdbc.rrnu9ou.mongodb.net/farmStand';
mongoose.set('strictQuery', false);
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection open!")
  })
  .catch(error => {
    console.log(error)
  });

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database")
});
