//@ts-check
module.exports={
    palindromo:palindromo,
    duplicateElement: duplicateElement
}


/**
 * 
 * @param {string} string1 Se debe ingresar una cadena
 * @returns {string} Retorna una cadena diciendo si es o no palindromo
 */
function palindromo(string1) {
    let string2='';
    string1=string1.replace(/\s+/g, '');

    for (let index = string1.length-1; index >=0; index--) {
        string2=string2+string1[index];
    }
    if(string1===string2){
        return 'Es palíndromo';
    }else{
        return 'No es palíndromo'
    }

}

/**
 * Funcion que retorna un booleano true or false si el array tiene numeros duplicados
 * @param {Array<number>} array1 Se debe ingresar un array de numeros.
 * @returns {boolean} Retorna true or false si el array contiene numeros duplicados.
 * 
 */
function duplicateElement(array1) {
   
    for(let i=0;i<array1.length-1;i++) {
        for(let j=i+1; j<array1.length;j++){
            if(array1[i]===array1[j]){ //[1,2,3]
                return true;
            }
        }

    }
    return false;
}

