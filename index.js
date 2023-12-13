const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const productRouter = require('./routes/products');

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb', extended: true}));

app.use('/api/products', productRouter)

app.listen(process.env.APP_PORT || port, () => console.log(`App running on port ${process.env.APP_PORT}`));