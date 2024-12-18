
import "./styles/style.css"
import { displayProjectAndTodoCards } from "./projectsUI.js";
import { sincLocalStorageWithJs, getProjectsFromLocalStorage } from "./localStorage.js";

// ----------------------- Update local storage and display
sincLocalStorageWithJs();
getProjectsFromLocalStorage();
displayProjectAndTodoCards();