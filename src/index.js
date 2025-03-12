
import "./styles/style.css"
import "./styles/dialogs.css"
import "./styles/templateCards.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import modalFunctions from "./modalUI.js";
import { displayProjectAndTodoCards } from "./projectsUI.js";
import { sincLocalStorageWithJs, getProjectsFromLocalStorage } from "./localStorage.js";

// ----------------------- Update local storage and display
sincLocalStorageWithJs();
getProjectsFromLocalStorage();
displayProjectAndTodoCards();