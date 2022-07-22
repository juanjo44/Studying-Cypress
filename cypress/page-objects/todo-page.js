export class TodoPage {
    navigate() {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
    }

    addToDo(todoText) {
        cy.get('.new-todo').type(`${todoText}{enter}`)
    }

    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should("have.text", expectedText)
    }
}
