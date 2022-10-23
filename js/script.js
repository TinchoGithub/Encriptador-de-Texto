const inputTexto = document.querySelector(".input-texto");
const resultado = document.querySelector(".resultado");

function encriptar(textoEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "ines"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i =0;i<matrizCodigo.length;i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    swal("Texto Encriptado", "presione OK para continuar!", "success");
    
    return  textoEncriptado;
   
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "ines"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i =0;i<matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    swal("Texto Desencriptado", "presione OK para continuar!", "success");
    return  stringDesencriptado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    resultado.value = textoEncriptado;
    resultado.style.backgroundImage= "none";
    inputTexto.value ='';
    
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    resultado.value = textoDesencriptado;
    resultado.style.backgroundImage = "none";
    inputTexto.value = '';
}

function copiar(){
    resultado.select()
    navigator.clipboard.writeText(resultado.value)
    resultado.value = ""
    
    swal("Mensaje Copiado", "presione OK para continuar!", "success");

}