function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
const button = document.querySelector("#regBtn")
let n = document.getElementById("nombre");
let a = document.getElementById("apellido");
let e = document.getElementById("email");
let c = document.getElementById("password1");
let c2 = document.getElementById("password2");
let t = document.getElementById("terminos")

function validateForm() {
    if ( n.value != "" && a.value != "" && e.value != "" && t.checked === true && c.value === c2.value) {
        showAlertSuccess()
    } else {
        showAlertError();
    }
}

button.addEventListener("click",validateForm)

//integrantes del grupo: Leonardo Etchebarne, Milagros y Nahuel De Los Santos
