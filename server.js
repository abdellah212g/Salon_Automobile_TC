require('dotenv').config({ path: './src/config/.env' });
// packages
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bootstrap = require('../bootstrap-webagecy')
// const ownerRoute= require('./src/routes/owner.routes')
const clientRoute= require('./src/routes/client.routes')
const authRoute= require('./src/routes/auth.routes')
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
if (process.env.NODE_ENV === 'developpement') app.use(morgan('tiny'));
// Db Connexion
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
  })
  .then(() => console.log('Mongo Db Connected'))
  .catch((err) => console.log(`error connection to the DataBase : ${err}`));
// Routes
// http://localhost:5000/abdou
// app.use('/owner',ownerRoute) 
app.use('/client',clientRoute) 
app.use('/auth',authRoute) 
// // app express
app.listen(PORT, () => {
  console.log(`app listning : localhost:${PORT}`);
});
