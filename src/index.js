
import "./styles/style.css"
import { showNewTodoModal, closeNewTodoModal, showNewProjectModal, closeNewProjectModal, addNewTodoButton, addNewProjectButton, showWelcomeModal, closeWelcomeModal } from "./modalUI.js";
import { displayProjectAndTodoCards } from "./projectsUI.js";
import { sincLocalStorageWithJs, getProjectsFromLocalStorage } from "./localStorage.js";

// ----------------------- Update local storage and display
sincLocalStorageWithJs();
getProjectsFromLocalStorage();
displayProjectAndTodoCards();