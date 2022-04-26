const pet = {
    name: "Tulio",
    sayHello: function(){
        console.log(`${this.name} te saluda en español`)
    }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()