class Persona {
    constructor(nombre, edad, sexo, peso, altura, fechaDeNacimiento) {
        this.name = nombre;
        this.age = edad;
        this.sex = sexo;
        this.weight = peso;
        this.heigt = altura;
        this.bornDate = fechaDeNacimiento;
    }
    esMayorDeEdad = () => {
        if (this.age >= 18) {
            alert('La persona es mayor de edad');
        }
    }
    mostrarGeneracion = () => {
        if (this.bornDate >= 1930 && this.bornDate <= 1948) {
            alert('La persona es de la generación silenciosa (Los niños de la posguerra). El rasgo característico es la austeridad.')
        } else if (this.bornDate >= 1949 && this.bornDate <= 1968) {
            alert('La persona es de la generación baby boomer. El rasgo característico es la ambición.')
        } else if (this.bornDate >= 1969 && this.bornDate <= 1980) {
            alert('La persona es de la generación X. El rasgo característico es la obsesión por el éxito.')
        } else if (this.bornDate >= 1981 && this.bornDate <= 1993) {
            alert('La persona es de la generación Y (Millennials). El rasgo característico es la frustración.')
        } else {
            alert('La persona es de la generación Z. El rasgo característico es la irreverencia.')
        }
    }
    mostrarDatos = () => {
        alert(Object.values(Persona));
    }
}

export default Persona;