export class App {
    constructor() {
        this.projectArray = [];
    }

    addProject(project) {
        this.projectArray.push(project);
    }

    deleteProject(index) {
        // Ensure the index is valid and not the default project (index 0)
        if (index === 0) {
            alert("The default project cannot be deleted.");
            return; // Do nothing if it's index 0
        }

         // Check if the index is valid (within the array bounds)
    if (index > 0) {
        // Remove the project at the given index
        this.projectArray.splice(index, 1);
    } else {
        // Log an error if the index is out of bounds
        console.error("Invalid project index");
    }
}
}