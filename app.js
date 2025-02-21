require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const Cargo=require('./models/Cargo.js');
const Cliente=require('./models/Cliente');

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado con MongoDB'))
.catch((err) => console.error('error en la coneccion MongoDB:', err));

//rutas cargo
app.get('/cargos',async (req,res)=>{
  try{
  const cargos=await Cargo.find({});
  
  res.json(cargos);
  res.status(200);
  }
  catch(err){
    res.status(500).json({error:err.message});
  }
})

app.post('/cargos',async (req,res)=>{
    try{
      const cargo=new Cargo(req.body);
      await cargo.save();
      res.json(cargo);
      res.status(201);
    }
    catch(err){
      res.status(500).json({error:err.message});

    }

})

app.put('/cargos/:id',async (req,res)=>{
try{
const {id}=req.params;
const cargo=await Cargo.findByIdAndUpdate(id,
  req.body,{new:true});
  res.json(cargo);
  res.status(200);

}
catch(err){
  res.status(500).json({error:err.message});

}
});

app.delete('/cargos/:id',async(req,res)=>{
try{
  const {id}=re.params;
  await Cargo.findByIdAndDelete(id);
  re.json({message:'Cargo Eliminado'});

} catch (err) {
  res.status(500).json({ error: err.message });
}
})

//Rutas Clientes 
app.get('/clientes',async (req,res)=>{ 
  try{ 
    const clientes=await Cliente.find({}); 
    res.json(clientes); 
    res.status(200); 
  } 
    
    catch(err){ 
      res.status(500).json({error:err.message}); 
    } 
  }) 
  app.post('/clientes',async (req,res)=>{ 
    try{ 
      const cliente=new Cliente(req.body); 
      await cliente.save(); res.json(cliente); 
      res.status(201); } catch(err)
      { 
        res.status(500).json({error:err.message}); 
      } 
    }); 
    
    app.put('/cliente/:id',async (req,res)=>{ 
      try{ const {id}=req.params; 
      const cliente=await Cliente.findByIdAndUpdate(id, req.body,{new:true}); 
      res.json(cliente); 
      res.status(200); 
    } 
    catch(err){ res.status(500).json({error:err.message}); 
  } 
}); 
app.delete('/clientes/:id',async(req,res)=>{ 
  try{ 
    const {id}=req.params; 
    await Cliente.findByIdAndDelete(id); 
    res.json({message:'Cliente eliminado'}); 
    res.status(200); 
  } 
  catch(err){ res.status(500).json({error:err.message}); 
} 
}); 






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Escuchando en el puerto ${PORT}`);
});