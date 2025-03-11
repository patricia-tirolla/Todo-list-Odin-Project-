import { myProjects, Todo, deleteTodo, deleteProject, moveTodoBetweenProjects, addTodoToProject, addNewProjectToList } from "./projects";
import { getProjectsFromLocalStorage } from "./localStorage";


export function doneStatus(todo, e) {
    todo.done = e.target.checked;
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

let selectedProjectIndex = null;

// ----------------------- Create Todos and Projects objects with the user inputs
export function createTodo() {
    let todoTitle = document.getElementById("todo-title");
    let todoDescription = document.getElementById("todo-description");
    let todoDueDate = document.getElementById("todo-due-date");
    let todoPriority = document.getElementById("todo-priority");
    if (selectedProjectIndex === null) {
        alert("Please select a project before adding a todo.");
        return;
    }

    addTodoToProject(selectedProjectIndex, new Todo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value, false))
}

export function createProject() {
    let projectTitle = document.getElementById("project-title").value;
    addNewProjectToList(projectTitle);
}

// ----------------------- Manipulate Projects and Todo Cards
// ----------------------- Create, delete and move them on the display
export function displayProjectAndTodoCards() {

    // ----------------------- Display the projects
    let projectsContainer = document.getElementById("all-projects-container");
    projectsContainer.innerHTML = "";

    let dragged = null;
    getProjectsFromLocalStorage().forEach((project, projectIndex) => {

        const projectTemplate = document.getElementById("project-card-template");
        let projectClone = projectTemplate.content.cloneNode(true);

        let projectCard = projectClone.querySelector(".project-card");

        projectCard.setAttribute("data-index", projectIndex);
        projectCard.querySelector("h2").textContent = project.title;
        projectCard.querySelector(".project-delete-button").onclick = () => {
            if (projectIndex != 0) {
                deleteProject(projectIndex);
                displayProjectAndTodoCards();
            }
        }

        // handle project selection when clicked
        projectCard.addEventListener("click", () => {
            document.querySelectorAll(".project-card").forEach(card => card.classList.remove("project-card-selected"));
            projectCard.classList.add("project-card-selected");
            selectedProjectIndex = projectIndex;
        })

        // add a plus button inside each project, to add a new todo
        projectClone.querySelector(".new-todo-plus-button").onclick = () => {
            const todoModal = document.getElementById("todo-dialog");
            todoModal.show();
        }

        // allows the todos to drag over the projects
        projectCard.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        // select the project to get the todo dragged
        projectCard.addEventListener("drop", (e) => {
            e.preventDefault();
            let fromIndex = dragged.closest(".project-card").dataset.index;
            let todoIndex = dragged.dataset.todoIndex;

            moveTodoBetweenProjects(todoIndex, fromIndex, projectIndex);
            displayProjectAndTodoCards();
        })
       

        // ----------------------- Display the todos
        let todosContainer = projectClone.querySelector(".todos-list");
        project.todos.forEach((todo, todoIndex) => {
            let cardTemplate = document.getElementById("todo-card-template");
            let todoClone = cardTemplate.content.cloneNode(true);

            todoClone.querySelector(".todo-card").setAttribute("data-todo-index", todoIndex);
            todoClone.querySelector(".todo-title").textContent = todo.title;
            todoClone.querySelector(".todo-description").textContent = todo.description;
            todoClone.querySelector(".todo-due-date").textContent = `Due date: ${todo.dueDate}`;
            todoClone.querySelector(".todo-priority").textContent = `Priority: ${todo.priority}`;
            todoClone.querySelector(".done").checked = todo.done;
            todoClone.querySelector(".done").onchange = (e) => {
                doneStatus(myProjects[projectIndex].todos[todoIndex], e);
                displayProjectAndTodoCards();
            }
            todoClone.querySelector(".todo-delete-button").onclick = () => {
                deleteTodo(projectIndex, todoIndex);
                displayProjectAndTodoCards();
            }
            // target the todo card to drag
            todoClone.querySelector(".todo-card").addEventListener("dragstart", (e) => {
                dragged = e.target;
            });
            let card = todoClone.querySelector(".todo-card");
            card.draggable = true;

            // ----------------------- Append
            todosContainer.appendChild(todoClone);
        })
        projectsContainer.appendChild(projectClone);
    })
}