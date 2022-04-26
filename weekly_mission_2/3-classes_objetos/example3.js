class Student{
    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(carloStudent)