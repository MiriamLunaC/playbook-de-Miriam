class Explorer{
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername(){
        return `Explorer ${this.name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        super(name, username, mission)
        this.cycle = cycle
    }

    getGeneralInfo(){
        let nameAndUsername = this.getNameAndUsername()
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername())
console.log(viajero1.getGeneralInfo())