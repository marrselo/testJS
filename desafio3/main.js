const express = require('express');
const app = express();
const {Container} = require('./container');


const db = new Container('productos.json');



app.get('/',(req,res)=>{
    res.send({error : false})
})

app.get('/productos',async (req,res)=>{
    const data = await db.getAll();
    res.send(data);
})

app.get('/productoRandom',async (req,res)=>{
    const data = await db.getRandom();
    res.send(data);
})

app.listen(8585,()=>{
    console.log('Iniciado')
})