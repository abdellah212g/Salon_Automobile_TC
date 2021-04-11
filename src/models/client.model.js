const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const clientSchema = Schema({
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
  phone:{
    type: Number,
    required: true,
    unique:true,
  },
  password:{
      type:String,
      required:true
  },
  global_tries:{
    type: Number,
    required: true,
    default:0
  },

});

module.exports = model('client', clientSchema);