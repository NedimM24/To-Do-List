//Entry point

import "./styles.css";
import { ToDoObject } from "./toDo.js";
import { Projects } from "./projects.js";

//app will just be one obbject that stores projects in an array and
//displays them on the projects sidebar
import { App } from "./app.js";
import { displayProjects, displayTask, activeProjectIndex } from "./ui.js";

//creating a default project/task to display
const projectHolder = new App();
const defaultProject = new Projects("Default");
const defaultTask = new ToDoObject("Gym", "Go hit back and bis", "01/23/2026");
defaultProject.addToDo(defaultTask);
projectHolder.addProject(defaultProject);

// Display the default project and tasks
displayProjects(projectHolder);
displayTask(projectHolder);

// Testing add button functionality
const addProjectButton = document.querySelector(".add-project");
addProjectButton.addEventListener("click", () => {
    const newProject = new Projects("New Project");
    projectHolder.addProject(newProject);
    displayProjects(projectHolder);

    // After adding a new project, set the active project index to the newly added one
    const activeProjectButton = document.querySelectorAll(".project-buttons")[activeProjectIndex];
    if (activeProjectButton) {
        activeProjectButton.style.backgroundColor = "orange"; // Keep the last clicked project highlighted
    }
});


const addTaskButton = document.querySelector(".add-task-button");

addTaskButton.addEventListener("click", () => {
    // Create a new task with default values
    //next step is to get user input for this

    const newTask = new ToDoObject("New Task", "No Description", "01/01/2027");
    // Get the active project using activeProjectIndex
    const activeProject = projectHolder.projectArray[activeProjectIndex];
    // Add the new task to the active project's toDoList
    activeProject.addToDo(newTask);
    // Refresh the task list for the active project
    displayTask(projectHolder);
});

//delete project button
//delete onst activeProject = projectHolder.projectArray[activeProjectIndex];

const deleteProjectButton = document.querySelector(".delete-project");


//need to dynamically add delete button to every task
//const deletTaskButton = document.querySelector(".delete-task-button");












































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






