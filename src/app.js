//This class will be used to hold the projects in an array and be able to delete them

export class App{
    constructor (){
        this.projectArray = [];
    }

    addProject(project){
        this.projectArray.push(project);
    }

    dleteProject(index){
        this.projectArray.splice(index, 1)
    }
}