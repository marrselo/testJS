const empleados = [
    {
        id: 1,
        nombre: 'Marcelo'
    },
    {
        id: 2,
        nombre: 'Eric'
    },
    {
        id:3,
        nombre:'Ichu'
    }
]

const salarios = [
    {
        id:1,
        salario: '5000'
    },
    {
        id:2,
        salario: '5500'
    }
]
// funcion nomral de flecha
let getEmpleado = (id)=>{
    const empleado = empleados.find(e=>e.id===id)
    if(empleado){
        return empleado;
    }else{
        return `Empleado con id ${id} no existe`;
    }
}



// console.log(getEmpleado(1));
// console.log(getEmpleado(5));

// ahora le agrego un callback
getEmpleado = (id,callback)=>{
    const empleado = empleados.find(e=>e.id===id)
    if(empleado){
        callback(null,empleado)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id,callback)=>{
    const salario = salarios.find(x=>x.id===id)?.salario //el operador ? pregunta si existe todo lo anterior, y ejecutara el .operario (numm check operator)
    if(salario){
        callback(null,salario);
    }else{
        callback(`El salario con id ${id} no existe`);
    }
}

// getEmpleado(2,(err,empleado)=>{
//     if(err){
//         console.log('ERROR!!!')
//         return console.log(err)
//     }
//     console.log('Empleado existe')
//     console.log(empleado.nombre);
// })

// getSalario(5,(err,salario)=>{
//     if(err){
//         console.log('ERROR SALARIO!!!')
//         return console.log(err);
//     }
//     console.log(salario);

// })

// ahora callbackHell

const id = 4;

getEmpleado(id,(err,empleado)=>{
    if(err){
        console.log('ERROR!!!')
        return console.log(err)
    }
    getSalario(id,(err,salario)=>{
        if(err){
            console.log('ERROR SALARIO!!!')
            return console.log(err);
        }
        console.log('El empleado ',empleado.nombre, 'tiene un sueldo de: ',salario);
    
    })
})








