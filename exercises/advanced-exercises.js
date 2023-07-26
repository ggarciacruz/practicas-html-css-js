//@ts-check
module.exports={
    sumEquals:sumEquals
}

/**
 * 
 * @param {Array} array1 Se debe ingresar el primer array de números
 * @param {*} array2 Se debe ingresar el segundo array de números
 * @returns {number} Retornara la suma de los elementos que se repiten en ambos array
 */
function sumEquals(array1, array2) {
    let sum=0;
    let array3=[];
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array1[i]===array2[j] && !(array3.includes(array1[i]))){
                array3.push(array1[i]);
            }

        }
    }
    for(let i=0;i<array3.length;i++){
        sum=sum+array3[i];
    }

    return sum;
}