//Entry point


import "./styles.css";
import { ToDoObject } from "./toDo.js";
import { Projects } from "./projects.js";


//test to create a Project object and print its array
const testProject = new Projects("Daily");
console.log(testProject);

//Create a new todo item 
const myItem = new ToDoObject("Gym", "Go to gym, hit back and bis" ,"1/23/2026" );
console.log(myItem);

//add to do item to the projects

testProject.addToDo(myItem);
console.log(testProject);



 //test the delete
testProject.deleteToDo(myItem);
console.log(testProject);











