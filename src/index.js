//Entry point


import "./styles.css";
import { ToDoObject } from "./toDo.js";
import { Projects } from "./projects.js";

//app will just be one obbject that stores projects in an array and
//displays them on the projects sidebar
import { App } from "./app.js";


//test to create a Project object and print its array
const testProject = new Projects("Daily");
const testProject2 = new Projects("monthly");
const testProject3 = new Projects("yearly");

//testing app to add/delete projects to an array
const myApp = new App();
myApp.addProject(testProject);
myApp.addProject(testProject2)
myApp.addProject(testProject3)

myApp.dleteProject(testProject2)
console.log(myApp);



//Create a new todo item 
const myItem = new ToDoObject("Gym", "Go to gym, hit back and bis" ,"1/23/2026" );
console.log(myItem);

//add to do item to the projects

testProject.addToDo(myItem);
console.log(testProject);



 //test the delete
testProject.deleteToDo(myItem);
console.log(testProject);











