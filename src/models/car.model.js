const { string } = require('joi');
const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const carSchema = Schema({
  registration_number:{
      type:String,
      unique:true,
      required:true
  },
  name: {
    type: String,
    required: true,
  },
  mark: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  fuel:{
    type: String,
    ennum:['Diesel','Fuel','Hybred'],
    required:true,
  },
  is_saled:{
    type: Boolean,
    required :false,
  }
});

module.exports = model('car', carSchema);
