export default class MyPokemon{
    constructor(pokemon){
        this.pokemon = pokemon
    }

    sayHello(){
        console.log("Mi pokemon "+this.pokemon+" te saluda!!!")
    }

    sayMessage(message){
        console.log("Mi pokemon "+this.pokemon+" dice: "+message)
    }
}