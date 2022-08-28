const {Container} = require('./container');

/*Ejecutar 3 veces luego quitar los comentarios de deleteById y luego del deleteAll*/
const db = new Container("productos.txt");
let obProduct = {title: 'Calculadora', 
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
    };
db.save(obProduct);
db.getAll().then((value)=>console.log(value));
db.getById(1).then((value) => console.log(value));
 
//db.deleteById(3).then((value)=>console.log(value));
//db.deleteAll().then((value)=>console.log(value));
