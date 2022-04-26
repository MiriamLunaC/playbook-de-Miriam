class MissionCommander{
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get getStudents(){
        return this.students
    }

    get getLives(){
        return this.lives
    }

    set setStudents(students){
        this.students = students
    }

    set setLives(lives){
        this.lives = lives
    }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommnderNode = new MissionCommander("Carlo", "NodeJs")

console.log(missionCommnderNode.getStudents)
console.log(missionCommnderNode.getLives)

missionCommnderNode.setStudents = 100
missionCommnderNode.setLives = 3

console.log(missionCommnderNode.getStudents)
console.log(missionCommnderNode.getLives)