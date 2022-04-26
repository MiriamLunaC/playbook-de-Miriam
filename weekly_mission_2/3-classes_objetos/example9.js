class Developer {
    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName(){
        return this.name
    }
}

console.log("Ejemplo 9: Herencia entre 2 clases")
const carloDev = new Developer("Carlo", "js", ["elixir","groovy","lisp"])
console.log(carloDev)

class LaunchXStudent extends Developer{}

const carloLaunchXDev = new LaunchXStudent("Carlo","js",["elixir","groovy","lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName)