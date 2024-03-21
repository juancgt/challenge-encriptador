const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const informacionMensaje = document.querySelector('.informacion-mensaje');
const btnCopiar = document.querySelector('.btn-copiar');

function copiar(){
    let mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand('copy');
    mensaje.setSelectionRange(0, 0);
    

    btnCopiar.style.display = "none";
    mensaje.value = "";
    mensaje.style.backgroundImage = "";
    informacionMensaje.style.display = "block";
    textArea.focus();
    
}
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;

    textArea.value = "";

    mensaje.style.backgroundImage = "none";
    informacionMensaje.style.display = "none";
    btnCopiar.style.display = "block";
    
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;

    textArea.value = "";

    mensaje.style.backgroundImage = "none";
    informacionMensaje.style.display = "none";
    btnCopiar.style.display = "block";
    
}
function encriptar(texto){
    let matrizcodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]    
    texto =texto.toLowerCase();
    for(let i=0;i<matrizcodigo.length;i++){
        if(texto.includes(matrizcodigo[i][0]))
            texto = texto.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
    }
    return texto;
}
function desencriptar(texto){
    let matrizcodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]    
    texto =texto.toLowerCase();
    for(let i=0;i<matrizcodigo.length;i++){
        if(texto.includes(matrizcodigo[i][1]))
            texto = texto.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
    }
    return texto;
}


//console.log(matrizCodigo);
