const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ownerSchema = Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name:{
    type: String,
    required: true,
  },
  cin:{
    type: String,
    required: true,
    unique:true,
  },
  email:{
    type: String,
    required: true,
    unique:true,
  },
  rib:{
    type: Number,
    required: true,
    unique:true,
  },
  password:{
    type:String,
    required:true
},
  phone:{
    type: Number,
    required: true,
    unique:true,
  },

});

module.exports = model('owner', ownerSchema);
