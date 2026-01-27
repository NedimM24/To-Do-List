//NEDIM MULAHUSIC
//ENTY POINT
//THIS MODULE CREATES THE APP THAT HOLDS THE PROJECTS IN AN ARRAY
//THIS MODULE ALSO HANDLES BUTTONS THAT ADD NEW TASKS AND PROJECTS + DIALOG AND FORM FOR USER INPUT

import "./styles.css";
import { ToDoObject } from "./toDo.js";
import { Projects } from "./projects.js";
import { App } from "./app.js";
import { displayProjects, displayTask, getActiveProjectIndex, setActiveProjectIndex } from "./ui.js";

// Creating a default project/task to display
const projectHolder = new App();
const defaultProject = new Projects("Home");
const defaultTask = new ToDoObject("Be Happy", "Smile", "Every Day");
defaultProject.addToDo(defaultTask);
projectHolder.addProject(defaultProject);

// Display the default project and tasks
displayProjects(projectHolder);
displayTask(projectHolder);


// Testing add button functionality
//Project dialog buttons
//START ADD PROJECT FUNCTIONALITY AND DIALOG FORM
const projectDialog = document.querySelector("#add-project-dialog");
const submitProjectBtn = document.querySelector(".submit-project");


const addProjectButton = document.querySelector(".add-project");
addProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
    
    // After adding a new project, keep the last clicked project highlighted
    const activeProjectButton = document.querySelectorAll(".project-buttons")[getActiveProjectIndex()];
    if (activeProjectButton) {
        activeProjectButton.style.backgroundColor = "orange"; // Keep the last clicked project highlighted
    }
});
submitProjectBtn.addEventListener("click", function(e) {
    e.preventDefault();
    var projectName = document.getElementById("projectName").value;
    const newProject = new Projects(projectName);
    projectHolder.addProject(newProject);

    projectDialog.close();
    document.getElementById("projectName").value = ""; //Clear the form

    displayProjects(projectHolder);
})
//END ADD PROJECT FUNCTIONALITY AND DIALOG FORM

const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", () => {
    // Create a new task with default values
    const newTask = new ToDoObject("New Task", "No Description", "01/01/2027");

    // Get the active project using the activeProjectIndex
    const activeProject = projectHolder.projectArray[getActiveProjectIndex()];

    // Add the new task to the active project's toDoList
    activeProject.addToDo(newTask);

    // Refresh the task list for the active project
    displayTask(projectHolder);
});

// Delete project button functionality
const deleteProjectButton = document.querySelector(".delete-project");
deleteProjectButton.addEventListener("click", () => {
    // Get the current active project index
    const activeProjectIndex = getActiveProjectIndex();

    // If the active project is the first (default) project, don't allow deletion
    if (activeProjectIndex === 0) {
        alert("Cannot delete the default project!");
        return;
    }

    // Delete the project at the activeProjectIndex
    projectHolder.deleteProject(activeProjectIndex);
    

    // If the active project was deleted, set the active project to index 0
    // Ensure that the activeProjectIndex doesn't go out of bounds
    if (activeProjectIndex >= projectHolder.projectArray.length) {
        setActiveProjectIndex(projectHolder.projectArray.length - 1);
    } else {
        setActiveProjectIndex(activeProjectIndex);
    }

    // Re-render the project and task list
    displayProjects(projectHolder);
    displayTask(projectHolder);
});































