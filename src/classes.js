/**
 * Class para crear un programador
 * @example
 * const newProgrammer = new Programmer({name: 'Arian', 'Go'})
 * newProgrammer.getInfo()
 *
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-languages
 *
 * @todo Implementar resto de métodos
 * */
class Programmer {
    /**
     * @param {{name: string}} user Información del usuario
     * @param {string} language Un lenguaje de programación
     * */
    constructor(user, language) {
        this.name = user.name;
        this.language = language;
    }

    /**
     * Obtener información de programador
     * @return {void}
     * */
    getInfo() {
        console.log(`Soy ${this.name} y mi lenguaje de programación favorita es ${this.language}`);
    }
}

/**
 * Conoce más en {@link Programmer}
 * */
const programmer = new Programmer({name: 'Arian Angoma Vilchez'}, 'javascript');
programmer.getInfo();