/// <reference types="cypress" />

// it('Should navigate to the TodoMVC App', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh/')
// })

it('Should be able to add a new todo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Learn Cypress{enter}')
})

// //To add a delay:
// it('Should be able to add a new todo to the list with a delay', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000') //This is where magic happens
//     cy.get('.new-todo').type('Learn Cypress{enter}')
// })

// //But it is also normal to have timeout times
// it('Should be able to add a new todo to the list with a delay but timeout', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000') 
//     cy.get('.new-todo', {timeout: 6000}).type('Learn Cypress{enter}') //last parametes of the .get can be a object with options
// })

//Test with click on the toggle
it('Should be abble to click on the toggle', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Learn Cypress{enter}')
    cy.get('.toggle').click()
})

//We can use contains intead of get
it('Should be abble to click on the toggle', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Learn Cypress{enter}')
    cy.get('.toggle').click()

    cy.contains('Clear completed').click()
})
//------------------------------------------------------------//
//Validation
it('Should validate that the text is correct and that the toggle isnt checked', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Learn Cypress{enter}')
    cy.get('label').should("have.text", 'Learn Cypress')
    cy.get('.toggle').should("not.be.checked")
})

it('Should validate that css change', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Learn Cypress{enter}')
    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line', 'line-through')

})

it('Should validate that css change', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Learn Cypress{enter}')
    cy.get('.toggle').click()
    // cy.get('label').should('have.css','text-decoration-line', 'line-through')
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants','li')
})
