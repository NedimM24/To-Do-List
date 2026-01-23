//Entry point


import "./styles.css";
import { ToDoObject } from "./toDo.js";
import { Projects } from "./projects.js";

//app will just be one obbject that stores projects in an array and
//displays them on the projects sidebar
import { App } from "./app.js";


/*
lets create some UI. Create a default folder with a default task in array
display task on the left project sidebar and display task in the todolist 
content body
*/ 


//creating a default project/task to display
const projectHolder = new App();
const defaultProject = new Projects("Default");
const defaultTask = new ToDoObject("Gym", "Go hit back and bis", "01/23/2026");

defaultProject.addToDo(defaultTask);
projectHolder.addProject(defaultProject);

const defaultProject2 = new Projects("work");
const defaultTask2 = new ToDoObject("Code", "finish code", "01/27/2026");

defaultProject.addToDo(defaultTask2);
projectHolder.addProject(defaultProject2);


projectHolder.displayProjects();
projectHolder.displayTask();











































/* m    basic tests housed here


//test to create a Project object and print its array
const testProject = new Projects("Daily");
const testProject2 = new Projects("monthly");
const testProject3 = new Projects("yearly");

//testing app to add/delete projects to an array
const myApp = new App();
myApp.addProject(testProject);
myApp.addProject(testProject2)
myApp.addProject(testProject3)

myApp.deleteProject(testProject2)
console.log(myApp);



//Create a new todo item 
const myItem = new ToDoObject("Gym", "Go to gym, hit back and bis" ,"1/23/2026");
console.log(myItem);

//add to do item to the projects

testProject.addToDo(myItem);
console.log(testProject);



 //test the delete
testProject.deleteToDo(myItem);
console.log(testProject);


*/






