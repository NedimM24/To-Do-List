// Local variable to store the active project index
let _activeProjectIndex = 0; 

// Getter for activeProjectIndex
export function getActiveProjectIndex() {
    return _activeProjectIndex;
}

// Setter for activeProjectIndex
export function setActiveProjectIndex(index) {
    _activeProjectIndex = index;
}

export function displayProjects(app) {
    const projectSide = document.querySelector(".nav-project");

    projectSide.innerHTML = ""; // Clear previous content

    app.projectArray.forEach((project, index) => {
        const projectButton = document.createElement("button");
        projectButton.classList.add("project-buttons");
        projectButton.textContent = project.name;
        projectSide.appendChild(projectButton);

        // Highlight the active project based on activeProjectIndex
        if (index === getActiveProjectIndex()) {
            projectButton.style.backgroundColor = "orange"; // Highlight active project
            projectButton.classList.add("active"); // Add the "active" class for the styling
        }

        projectButton.addEventListener("click", () => {
            // Reset the background color of the previously clicked button
            const lastClickedButton = document.querySelector(".project-buttons.active");
            if (lastClickedButton) {
                lastClickedButton.style.backgroundColor = ""; // Reset color
                lastClickedButton.classList.remove("active"); // Remove active class
            }

            // Set the clicked button to orange
            projectButton.style.backgroundColor = "orange";
            projectButton.classList.add("active");

            // Update the active project index
            setActiveProjectIndex(index);

            // Call the function to display tasks for the active project
            displayTask(app);
        });
    });
}
export function displayTask(app) {
    const taskSide = document.querySelector(".to-do-list");
    taskSide.innerHTML = ""; // Clear previous tasks

    const activeProject = app.projectArray[getActiveProjectIndex()]; // Get the active project
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("task-title");
    projectTitle.textContent = `To-Do list for: ${activeProject.name}`;
    taskSide.appendChild(projectTitle);

    activeProject.toDoList.forEach((todo, index) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("to-do-container");

        // Todo task title
        const toDoTitle = document.createElement("h3");
        toDoTitle.textContent = `Task: ${todo.title}`;
        // Todo task description
        const toDoDesc = document.createElement("h3");
        toDoDesc.textContent = `Description: ${todo.description}`;
        // Todo task date
        const toDoDate = document.createElement("h3");
        toDoDate.textContent = `Due Date: ${todo.dueDate}`;

        // Create a delete button for each task
        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.classList.add("delete-task-btn");
        deleteTaskButton.textContent = "- Delete Task";

        // Append the task details and delete button to the task div
        todoDiv.appendChild(toDoTitle);
        todoDiv.appendChild(toDoDesc);
        todoDiv.appendChild(toDoDate);
        todoDiv.appendChild(deleteTaskButton);

        // Append the task div to the task list
        taskSide.appendChild(todoDiv);
    });
}
