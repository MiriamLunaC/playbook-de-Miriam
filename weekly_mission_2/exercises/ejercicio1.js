const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
   

const issue = {
    title: "Mi issue",
    repositoryNameAssociated: "MiriamLunaC",
    status: "open",
    numberOfComments:2,
    labels:["Label1"],
    author:"Miriam Luna",
    dateCreated:"25/04/2022",
    lastUpdated:"25/04/2022",
    
    getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`
    },

    getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.author} on ${this.dateCreated}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log("Número de comentarios: "+issue.numberOfComments)
console.log(issue.getGeneralInfo())

const pullRequest = {
    title: "my PR",
    branchName: "main",
    dateCreated: "25/04/2022",
    status: "open",
    repositoryNameAssociated: "MiriamLunaC",
    getStatus:function(){
        return `The status of the pull request ${pullRequest.title} is: ${pullRequest.status}`
    },
    getTitleAndAuthor:function(){
        return `This pull request ${this.title} was created by ${this.repositoryNameAssociated}`
    }
}

console.log(`Pull request title: ${pullRequest.title}`)
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())

const socialMedia = {
    twitter:{
        user: {user: "Miriam", username:"miriamLuna", bio:"This is my bio", age: 23},
        trending_topic: ["Sarah", "Elon Musk", "NO AUTORIZO"],
        hashtag: ["#VoySinTwiter","#compañere","#Act_Lovesick"]
    },
    facebook:{
        user:"Miriam Luna",
        post:"My new post",
        biography:"Hello, this is my biography"
    },
    uber:{
        profile:"Miriam Luna",
        travel:"Al centro"
    }
}

console.log("My twitter: "+socialMedia.twitter.user.username);
console.log("My facebook: "+socialMedia.facebook.user);
console.log("Uber profile: "+socialMedia.uber.profile);