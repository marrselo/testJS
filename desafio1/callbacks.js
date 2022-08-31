
// let pensaEnCallback = setTimeout(()=>{
//    console.log('Hola gente linda') 
// },3000);

const { callbackify } = require("util");

// una funcion normal de flecha con un timeout
const getUserById = (id) => {
   const user = {
      id,
      nombre: 'Marrselo'
   }
   setTimeout(()=>{
      console.log(user)
   },2000)
}

getUserById(3);

//Ahora le agregamos un callback a esta función
const getUserByIdCallback = (id, callback)=>{
   const usuario = {
      id,
      nombre: 'Marrselito'
   }
   setTimeout(()=>{
      callback(usuario)
   },2000)
}

getUserByIdCallback(10,(cualquierNOmbre)=>{
   console.log(cualquierNOmbre)
})