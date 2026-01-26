
let lastClickedButton = null; // To store the last clicked button
let activeProjectIndex = 0; // Track the currently active (selected) project

export function displayProjects(app) {
    const projectSide = document.querySelector(".nav-project");

    projectSide.innerHTML = ""; // Clear previous content

    app.projectArray.forEach((project, index) => {
        const projectButton = document.createElement("button");
        projectButton.classList.add("project-buttons");
        projectButton.textContent = project.name;
        projectSide.appendChild(projectButton);

        // Initially, highlight the first project as orange
        if (index === 0) {
            projectButton.style.backgroundColor = "orange";
            lastClickedButton = projectButton; // Set the first button as the last clicked
            activeProjectIndex = 0; // Set active index to the first project
        }

        projectButton.addEventListener("click", () => {
            // Reset the background color of the previously clicked button
            if (lastClickedButton && lastClickedButton !== projectButton) {
                lastClickedButton.style.backgroundColor = ""; // Reset color
            }

            // Set the clicked button to orange
            projectButton.style.backgroundColor = "orange";

            // Update the last clicked button and active project index
            lastClickedButton = projectButton;
            activeProjectIndex = index;  // Update the active project index when clicked

            // Call the function to display tasks for the active project
            displayTask(app);
        });
    });
}


 export function displayTask(app) {
    const taskSide = document.querySelector(".to-do-list");
    taskSide.innerHTML = ""; // Clear previous tasks

    const activeProject = app.projectArray[activeProjectIndex]; // Get the active project
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("task-title");
    projectTitle.textContent = `To-Do list for: ${activeProject.name}`;
    taskSide.appendChild(projectTitle);

    activeProject.toDoList.forEach((todo) => {
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

        todoDiv.appendChild(toDoTitle);
        todoDiv.appendChild(toDoDesc);
        todoDiv.appendChild(toDoDate);
        taskSide.appendChild(todoDiv);
    });
}