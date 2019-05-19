describe('User can sign up', () => {
  it('succesfully', () => {
    cy.visit('http://localhost:3001');
    cy.get('#sign-up').click();
    cy.get('#sign-up-form').within(() => {
      cy.get('#email').type('user2@mail.com')
      cy.get('#password').type('password2')
      cy.get('#password-confirmation').type('password2')
      cy.get('button').click()
    })
    cy.contains('Hi user2@mail.com')
  })
})
