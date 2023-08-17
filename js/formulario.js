const formulario = document.getElementById ('registerform')

const datos = (evento) =>{
    evento.preventDefault()
    console.log(evento)
    console.log(formulario.usuario.value)
    console.log(formulario.pass.value)
    const usuarioNuevo = {
        email: formulario.usuario.value,
        contraseña: formulario.pass.value 
    }

const usuarios = JSON.parse(localStorage.getItem('usuarios'))
if(usuarios){
    usuarios.push(usuarioNuevo)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}else{
    localStorage.setItem('usuarios', JSON.stringify([usuarioNuevo]))
}
window.location.href = "./productos.html"
}

formulario.onsubmit = datos

