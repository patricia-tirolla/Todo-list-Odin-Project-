
export const myProjects = [
    new Project("Default Project"),
];

function Project(title) {
    this.title = title;
    this.todos = [];
};

export function Todo(title, description, dueDate, priority, done) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = done; 
};

// ----------------------- Add Todos and Projects functions
export function addNewProjectToList(title) {
    myProjects.push(new Project(title));
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

export function addTodoToProject(projectIndex, todo) {
    myProjects[projectIndex].todos.push(todo);

    localStorage.setItem("projects", JSON.stringify(myProjects));
}

// ----------------------- Dele Todos and Projects functions
export function deleteTodo(projectIndex, todoIndex) {
    myProjects[projectIndex].todos.splice(todoIndex, 1);
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

export function deleteProject(index) {
    myProjects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(myProjects));
}

// ----------------------- Move Todo between Projects function
export function moveTodoBetweenProjects(todoIndex, fromIndex, toIndex) {
    // .splice() returns a list of the removed items, that can be stored in a variable
    // const [item0] = ["a"] is the same as const list = ["a"]; const item0 = list[0]
    const [removedTodo] = myProjects[fromIndex].todos.splice(todoIndex, 1);
    addTodoToProject(toIndex, removedTodo);
    localStorage.setItem("projects", JSON.stringify(myProjects));
}