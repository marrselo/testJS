const fs = require('fs');

class Container {
    
    constructor(file){
        this.dataFile = this.fsRead(file);
        this.rutaFile = `data/${file}`;        
    }
    //Guardar archivo
    async save(objectProduct){

        const data =await this.dataFile;
        const products = data;
        console.log(products);
        const id = products.length + 1;
        objectProduct.id = id;
        products.push(objectProduct);
        const productsString = JSON.stringify(products);
        await this.fsWrite(productsString);
        //await fs.promises.writeFile(this.rutaFile,productsString);
        return products;

    }


    //Traer objeto con id
    async getById(id){
        const dataProduct  = await this.dataFile;
        const product = dataProduct.find((product) => product.id === id);
        if (product) {
            return product;
          } else {
            return `El producto con id ${id} no existe`;
          }

    }

    //devuelve arrya con objetos del archivo
    async getAll(){
        try {
            const dataProduct = await this.dataFile;
            if(Object.entries(dataProduct).length===0){
                return "No hay datos"
            }else{
                return dataProduct;
            }
            
        }catch(error){
            return error;
        }
    }

    //Elimina un objeto segun el id
    async deleteById(id){
        const idExist = await this.getById(id);
        if(idExist==`El producto con id ${id} no existe`){
            return `No se puede eliminar el  producto con id ${id}, no existe`;
        }else{
            const dataProduct = await this.dataFile;
            const dataFilter = dataProduct.filter((item) => item.id !== id);
            let productsString = JSON.stringify(dataFilter);
            await this.deleteAll();
            await this.fsWrite(productsString);
            return `Se elimino con exito el elemento con id ${id}`;
        }
    }

    //elimina todos los objetos del archivo
    async deleteAll(){
        const dataDelete = [];
        await this.fsWrite(JSON.stringify(dataDelete));
        return "se elimino toda la data";
    }

    async fsRead(file) {
        try {
            const dataFile = await fs.promises.readFile(
            `data/${file}`,
            "utf-8"
            );
        const dataParse = JSON.parse(dataFile);
            return dataParse;
        } catch (error) {
            console.log(error);
        }
    }

    async fsWrite(productsString){
        try{
            await fs.promises.writeFile(this.rutaFile,productsString);
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = {Container};
//  const db = new Container("productos.txt");
// let obProduct = {title: 'Calculadora', 
//     price: 234.56,
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
//     };
//db.save(obProduct);
// db.getAll().then((value)=>console.log(value));
// db.getById(1).then((value) => console.log(value));
// db.deleteById(3).then((value)=>console.log(value));
//db.deleteAll().then((value)=>console.log(value));