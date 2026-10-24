const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const resultado = document.getElementById("resultado");


function mostrarMensaje(lineas, clase) {
  resultado.innerHTML = "";
  lineas.forEach(function (texto) {
    const p = document.createElement("p");
    p.textContent = texto;
    if (clase) p.className = clase;
    resultado.appendChild(p);
  });
}

function guardarDatos() {
  const usuario = inputUsuario.value.trim();
  const password = inputPassword.value.trim();

  if (usuario === "" || password === "") {
    mostrarMensaje(["Completa el usuario y la contraseña antes de guardar."], "error");
    return;
  }

  localStorage.setItem("usuario", usuario);
  localStorage.setItem("password", password);

  inputUsuario.value = "";
  inputPassword.value = "";
  inputUsuario.focus();

  mostrarMensaje(["Los datos se guardaron correctamente."], "ok");
}


function mostrarDatos() {
  const usuario = localStorage.getItem("usuario");
  const password = localStorage.getItem("password");

  if (usuario === null || password === null) {
    mostrarMensaje(["No hay datos guardados."], "error");
    return;
  }

  mostrarMensaje([
    "Usuario: " + usuario,
    "Contraseña: " + password
  ]);
}

function borrarDatos() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("password");
  mostrarMensaje(["Los datos guardados fueron borrados."], "ok");
}

document.getElementById("btnGuardar").addEventListener("click", guardarDatos);
document.getElementById("btnMostrar").addEventListener("click", mostrarDatos);
document.getElementById("btnBorrar").addEventListener("click", borrarDatos);