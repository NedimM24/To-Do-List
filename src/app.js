//This class will be used to hold the projects in an array and be able to delete them

export class App{
    constructor (){
        this.projectArray = [];
    }

    addProject(project){
        this.projectArray.push(project);
    }

    deleteProject(index){
        this.projectArray.splice(index, 1)
    }


    displayProjects(){  
        const projectSide = document.querySelector(".nav-project")
        this.projectArray.forEach((project) => {
        const projectButton = document.createElement("button");
        projectButton.classList.add("project-buttons")
        projectButton.textContent = project.name;
        projectSide.appendChild(projectButton);
    });
    }

    displayTask(){
        const taskSide = document.querySelector(".to-do-list");

        this.projectArray.forEach((project) => {
            const projectTitle = document.createElement("h3");
            projectTitle.textContent = `Tasks for ${project.name}`;
            taskSide.appendChild(projectTitle);

            project.toDoList.forEach((todo) => {
                const todoDiv = document.createElement("div");
                todoDiv.classList.add("to-do-container");

                //todo task title
                const toDoTitle = document.createElement("h1");
                toDoTitle.textContent = `Task: ${todo.title}`;
                //todo task description
                const toDoDesc = document.createElement("h1");
                toDoDesc.textContent = `Description: ${todo.description}`;
                //todo task date
                const toDoDate = document.createElement("h1");
                toDoDate.textContent = `Due Date: ${todo.dueDate}`;

                todoDiv.appendChild(toDoTitle)
                todoDiv.appendChild(toDoDesc)
                todoDiv.appendChild(toDoDate)

                taskSide.appendChild(todoDiv);
            })
        })

    }
}

