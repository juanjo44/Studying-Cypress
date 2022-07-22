/// <reference types='cypress'/>

describe("Some testing in libreria nacional page", () => {

  it("Sending requests", () => {
    cy.visit('https://librerianacional.com/')
        .request('categoria/libros')
  })
})
