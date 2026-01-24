//Entry point


import "./styles.css";
import { ToDoObject } from "./toDo.js";
import { Projects } from "./projects.js";

//app will just be one obbject that stores projects in an array and
//displays them on the projects sidebar
import { App } from "./app.js";
import { displayProjects, displayTask } from "./ui.js";

let activeProjectIndex = 0;



//creating a default project/task to display
const projectHolder = new App();
const defaultProject = new Projects("Default");
const defaultTask = new ToDoObject("Gym", "Go hit back and bis", "01/23/2026");
const defaultTask2 = new ToDoObject("Gym", "Go hit back and bis", "01/23/2026");
defaultProject.addToDo(defaultTask);
defaultProject.addToDo(defaultTask2);

projectHolder.addProject(defaultProject);

displayProjects(projectHolder);
displayTask(projectHolder)

/*
testing add button functionality
*/ 
const addProjectButton = document.querySelector(".add-project");
addProjectButton.addEventListener("click", () => {  
    const newProject = new Projects("test");
    projectHolder.addProject(newProject);
    displayProjects(projectHolder)
})















































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






