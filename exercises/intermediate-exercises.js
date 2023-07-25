//@ts-check
module.exports={
    palindromo:palindromo
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