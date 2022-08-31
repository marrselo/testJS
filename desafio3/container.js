const fs = require('fs');

class Container {
    
    constructor(file){
        this.rutaFile = `data/${file}`;        
    }
    //Guardar archivo
    async save(objectProduct){

        try{
            const products = await this.getAll();
            const id = products.length + 1;
            objectProduct.id = id;
            products.push(objectProduct);
            const productsString = JSON.stringify(products);
            await fs.promises.writeFile(this.rutaFile,productsString);
            return products;
        }catch(error){
            return error
        }
    }


    //Traer objeto con id
    async getById(id){
        const dataProduct  = await this.getAll();
        const product = dataProduct.find((product) => product.id === id);
        if (product) {
            return product;
          } else {
            return `El producto con id ${id} no existe`;
          }

    }

    //devuelve arrya con objetos del archivo
    async getAll(){

        const dataFile = await fs.promises.readFile(this.rutaFile,"utf-8") || '[]';
        const dataParse = JSON.parse(dataFile);
        return dataParse;
        
    }

    async getRandom(){
        const products = await this.getAll();
        let randomId = Math.floor(Math.random() * 4 + 1);
        let data = await this.getById(randomId);
        return data;

    }

    //Elimina un objeto segun el id
    async deleteById(id){
        const idExist = await this.getById(id);
        if(idExist==`El producto con id ${id} no existe`){
            return `No se puede eliminar el  producto con id ${id}, no existe`;
        }else{
            const dataProduct = await this.getAll();
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



    async fsWrite(productsString){
        try{
            await fs.promises.writeFile(this.rutaFile,productsString);
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = {Container};
