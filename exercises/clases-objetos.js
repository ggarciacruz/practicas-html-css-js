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
class Persona{
    /**
     * 
     * @param {string} nombre Se debe ingresar el nombre del estudiante
     * @param {string} edad Se debe ingresar la edad del estudiante
     * @param {string} sexo Se debe ingresar el grado del estudiante
     */
    constructor(nombre, edad, sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }

    /**
     * retorna que el estudiante esta estudiando
     */
    saludar(){
        return ('saludos a todos');
    }
}



class Estudiante extends Persona{
    /**
     * @param {string} nombre 
     * @param {string} edad
     * @param {string} sexo
     * @param {string} curso
     */
    constructor(nombre,edad,sexo,curso){
        super(nombre,edad,sexo);
        this.curso=curso;
    }
}

const student1=new Estudiante('Gary Gabriel',' 37 años','masculino','1ro secundaria')
console.log(student1);




module.exports={
    Persona: Persona,
    Celular:Celular
}