
console.log('Formulario de Productos');

let productoss = [];

//imprimo la info dela fun
function cargarProducto() {
    console.log('Tus productos se cargaron a la database');   

let nombreProducto = document.getElementById("idproducto").value;
let nombrePrecio = document.getElementById ("idprecio").value;


let productoos ={
    nombre : nombreProducto,
    precio : nombrePrecio
}
console.log (productoss);
productoss.push(productoos)

prodElegidos();
}


const prodElegidos =()=>{

    let tabla = document.getElementById ("tablaProductos")

    tabla.innerText = "";

    for (let i = 0; i < productoss.length; i++) {
        let fila = document.createElement("tr");
        
        let celdaProd = document.createElement("td");
        let celdaPrecio = document.createElement("td");
         
        celdaProd.textContent = productoss[i].nombre;
        celdaPrecio.textContent = productoss[i].precio;
        
        fila.appendChild(celdaProd);
        fila.appendChild(celdaPrecio); 

        tabla.appendChild(fila) 


        console.log(productoss[i]);
        
    }

}





