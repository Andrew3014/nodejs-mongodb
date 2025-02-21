const mongoose = require('mongoose'); 
const clienteSchema = new mongoose.Schema
({ 
    nombre:{ type:String, 
    required:true, 
    trim:true }, 
    nit:{ type:String, 
    required:true, 
    trim:true }, 
    telefono:{ type:Number, 
        required:true, 
        trim:true }, 
        fecha_nac:{ type:Date, 
        required:true, 
        trim:true } }); 
        
const Cliente = mongoose.model('Cliente', clienteSchema); 
module.exports = Cliente;