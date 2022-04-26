const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("Explorers' name: ")
   explorers.forEach((explorer)=>{
       console.log(explorer.name);
   })

   console.log("Explorers' stack: ")
   explorers.forEach((explorer)=>{
       console.log(explorer.stack)
   })

   console.log("Stacks: ")
   const stacks = [];
   explorers.map((explorer)=>{
        explorer.stack.map((stack)=>{
            if(!stacks.includes(stack)){
                stacks.push(stack);
            }
        })
   })

   console.log("New list: ["+stacks+"]");

   console.log("Explorers with JS in their stacks: ")
   const jsExplorers = explorers.filter((explorer)=>{
       return explorer.stack.includes("js")
   })
   console.log(jsExplorers);

   console.log("Explorers from CDMX: ")
   const cdmxExplorers = explorers.find((explorer)=>explorer.city == "CDMX")
   console.log(cdmxExplorers);

   const sumaCompleted_exercises = explorers.reduce((acc,explorer) => acc + explorer.exercises_completed,0);
   console.log("Suma de ejercicios completados: "+sumaCompleted_exercises);

   const isFinished = explorers.some((explorer)=> explorer.missions.frontend.isFinished === true)
   console.log("Alguien acabo con los ejercicios de front-end: "+isFinished)

   const everyFinished = explorers.every((explorer)=>explorer.missions.onboarding.isFinished === true)
   console.log("Todos acabaron los ejercicios del onboarding: "+everyFinished);

   