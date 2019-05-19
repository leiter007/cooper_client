describe('User can log out', () => {
  it('succesfully', () => {
    cy.visit('http://localhost:3001');
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
    cy.contains('Hi user@mail.com')
    cy.get('#logout').click();
    cy.contains('You have successfuly logged out');
    cy.contains('Login');
    cy.contains('Sign Up');
  })
})