import { myProjects, Todo, addNewProjectToList, addTodoToProject, moveTodoBetweenProjects, deleteTodo, deleteProject } from "../src/projects.js";

// ----------------------- Testing the Projects functions
describe("Project", () => {
    beforeEach(() => {
        myProjects.splice(1, myProjects.length);
    })
    it("should add project to list", () => {
        expect(myProjects.length).toBe(1);
        addNewProjectToList("projectt1");
        expect(myProjects.length).toBe(2);
    })
    it("should add todo to project list", () => {
        addNewProjectToList("test project");
        addTodoToProject(1, new Todo("Task1", "anything", "2024-11-01", "high"));
        expect(myProjects[1].todos.length).toBe(1);
        expect(myProjects[1].todos[0]).not.toBe(undefined);
    })
    it("should move todos from one project to another", () => {
        addNewProjectToList("test project");
        addNewProjectToList("test project2");
        addTodoToProject(1, new Todo("Task1", "anything", "2024-11-01", "high"));
        
        moveTodoBetweenProjects(0, 1, 2);
        expect(myProjects[1].todos.length).toBe(0);
        expect(myProjects[2].todos.length).toBe(1);
        expect(myProjects[2].todos[0]).toBeInstanceOf(Todo);
    })
    it("should delete project from the list", () => {
        addNewProjectToList("test project");
        expect(myProjects.length).toBe(2);
        addNewProjectToList("test project");
        expect(myProjects.length).toBe(3);
        deleteProject(2);
        expect(myProjects.length).toBe(2);
    })
})

// ----------------------- Testing the todos functions
describe("List", () => {
    beforeEach( () => {
        myProjects[1].todos.splice(0, myProjects[1].todos.length);
    })
    it("should add todo to list", () => {
        addTodoToProject(1, new Todo("Task1", "anything", "2024-11-02", "low"));
        expect(myProjects[1].todos.length).toBe(1);

        addTodoToProject(1, new Todo("Task2", "anything", "2024-11-02", "low"));
        expect(myProjects[1].todos.length).toBe(2);
        expect(myProjects[1].todos[0].title).toBe("Task1");
        expect(myProjects[1].todos[1].title).toBe("Task2");
    })
    it("should delete todo from the list", () => {
        addTodoToProject(1, new Todo("Task2", "anything", "2024-11-02", "low"));
        expect(myProjects[1].todos.length).toBe(1);
        deleteTodo(1, 0);
        expect(myProjects[1].todos.length).toBe(0);
    })
})
