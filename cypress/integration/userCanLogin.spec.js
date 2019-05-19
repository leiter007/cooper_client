describe('User can log in', () => {
  it('succesfully', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/sign_in',
      response: 'fixture:login_valid.json',
      headers: {
        "uid": "user@mail.com"
      }
    })
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('#submit').click()
    })
    cy.contains('Hi user@mail.com')
  })

  it('with invalid credentials', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/sign_in',
      status: "401",
      response: 'fixture:login_invalid.json'
    })     
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('wrongpassword')
      cy.get('#submit').click()
    })
    cy.contains('Invalid login credentials. Please try again.')
  })
})
