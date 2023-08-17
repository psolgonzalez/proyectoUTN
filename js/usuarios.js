


const loginAdmin = () =>{
     
    let usuario = "usuario1@gmail.com";
    let pasword = "Usuario.1"

    let userAdmin = document.getElementById("email").value;
    let paswordAdmin = document.getElementById ("pass").value;

    if (usuario==userAdmin && pasword==paswordAdmin) {
        alert("Acceso a Cliente Vip");
        window.location.href = "./ofertas.html";
    }else{
        alert("Datos Incorrectos");
        window.location.href = "./error.html";
    }

}
console.log(usuario, pasword);