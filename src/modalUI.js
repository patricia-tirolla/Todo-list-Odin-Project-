import { displayProjectAndTodoCards, createProject, createTodo} from "./projectsUI";

export default {
        // ---------------- Todo modal and buttons
        showNewTodoModal: (function () {

            const addtodoButton = document.querySelector(".new-todo-button");
            const modal = document.getElementById("todo-dialog");
            addtodoButton.addEventListener("click", (e) => {
                modal.show();
            })
        })(),
        closeNewTodoModal: (function () {
        
            const addtodoButton = document.getElementById("cancel-button");
            const modal = document.getElementById("todo-dialog");
            addtodoButton.addEventListener("click", () => {
                modal.close();
            })
        })(),
        addNewTodoButton: (function () {
            const addNewTodoButton = document.getElementById("add-todo-button");
            const modal = document.getElementById("todo-dialog");
            addNewTodoButton.addEventListener("click", (e) => {
                e.preventDefault();
                createTodo();
                displayProjectAndTodoCards();
                modal.close();
            })
        })(),
        
        // ---------------- Project modal and buttons
        showNewProjectModal: (function () {
            const addtodoButton = document.querySelector(".new-project-button");
            const modal = document.getElementById("project-dialog");
            addtodoButton.addEventListener("click", () => {
                modal.show();
            })
        })(),
        closeNewProjectModal: (function () {
            const addtodoButton = document.getElementById("cancel-project-button");
            const modal = document.getElementById("project-dialog");
            addtodoButton.addEventListener("click", () => {
                modal.close();
            })
        })(),
        addNewProjectButton: (function () {
            const addNewProjectButton = document.getElementById("add-project-button")
            const modal = document.getElementById("project-dialog");
            addNewProjectButton.addEventListener("click", (e) => {
                e.preventDefault();
                createProject();
                displayProjectAndTodoCards();
                modal.close();
            })
        })(),
        
        // ---------------- Welcome modal and buttons
        showWelcomeModal: (function () {
            const addtodoButton = document.querySelector(".welcome-button");
            const modal = document.getElementById("welcome-dialog");
            addtodoButton.addEventListener("click", () => {
                modal.show();
            })
        })(),
        closeWelcomeModal: (function () {
            const addtodoButton = document.getElementById("close-welcome-button");
            const modal = document.getElementById("welcome-dialog");
            addtodoButton.addEventListener("click", () => {
                modal.close();
            })
        })()
}
