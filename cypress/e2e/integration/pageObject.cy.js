/// <reference types="cypress" />

import { TodoPage } from "../../page-objects/todo-page"

describe('todo actions', () => {
    const todoPage = new TodoPage() 
    beforeEach(() => {
        todoPage.navigate()
        todoPage.addToDo('Clean Room')
    })

    it("should add a new Todo to the list", () => {
        todoPage.validateTodoText(0, 'Clean Room')
    })
})