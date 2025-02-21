const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({ 
  cargo: {
    type: String,
    required: true,
    trim: true
  }
});

const Cargo = mongoose.model('Cargo', cargoSchema);
module.exports = Cargo;
