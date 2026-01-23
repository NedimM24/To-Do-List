export class Projects{
    constructor(name){
        this.name = name;
        this.toDoList = [];
    }

    addToDo(toDo){
        this.toDoList.push(toDo)
    }
}