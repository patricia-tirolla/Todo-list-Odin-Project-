import { myProjects } from "./projects";

// ----------------------- Sinc the storage with the JS

export function sincLocalStorageWithJs() {
    let projectsLocalStorage = localStorage.getItem("projects");
    if (projectsLocalStorage === null) {
        localStorage.setItem("projects", JSON.stringify(myProjects));
    } else {
        let projectList = JSON.parse(projectsLocalStorage);
        myProjects.splice(0, 1);
        projectList.forEach((project) => {
            myProjects.push(project);
        })
    }
}

export function getProjectsFromLocalStorage() {
    const projects = localStorage.getItem("projects");
    if (projects === null) {
        return [];
    }
    return JSON.parse(projects);
}