//@ts-check




/**
 * Clase celular
 */
class Celular{
    /**
     * Contructor de la clase celular
     * @param {string} marca Se debe ingresar la marca del celular
     * @param {String} modelo Se debe ingresar el modelo del celular
     * @param {String} camara Se debe ingresar el tipo de camara del elular
     */
    constructor(marca, modelo, camara){
        this.marca=marca;
        this.modelo=modelo;
        this.camara=camara;

    }

     call() {
        return ('estoy haciendo un llamado desde mi cel:'+ this.modelo);
    }

}


/**
 * Clase estudiante
 */
class Estudiante{
    /**
     * 
     * @param {string} nombre Se debe ingresar el nombre del estudiante
     * @param {string} edad Se debe ingresar la edad del estudiante
     * @param {string} grado Se debe ingresar el grado del estudiante
     */
    constructor(nombre, edad, grado){
        this.nombre=nombre;
        this.edad=edad;
        this.grado=grado;
    }

    /**
     * retorna que el estudiante esta estudiando
     */
    estudiar(){
        return ('el estudiante '+this.nombre+', esta estudiando.');
    }
}


module.exports={
    Estudiante: Estudiante,
    Celular:Celular
}