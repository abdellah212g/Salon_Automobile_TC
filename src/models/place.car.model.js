const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const place_carSchema = Schema({
  place_car:{
      type:Number,
      required:true
  },
  is_free:{
    type: Boolean,
    default :false,
  }
});

module.exports = model('placecar', place_carSchema);
