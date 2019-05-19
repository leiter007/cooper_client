describe('User can sign up', () => {
  // This particular it block will fail. because the test hits the Heroku server
  // the API is deployed. Which means that user2@mail.com already exists. You can change lines 8-10 & 14
  // with other credentials to verify the functionality of new user sign up.
  it('succesfully', () => {
    cy.visit('http://localhost:3001');
    cy.get('#sign-up').click();
    cy.get('#sign-up-form').within(() => {
      cy.get('#email').type('user2@mail.com')
      cy.get('#password').type('password2')
      cy.get('#passwordConfirmation').type('password2')
      cy.get('#submit').click()
    })
    cy.contains('Hi user2@mail.com')
  })

  it('but not when email is already taken', () => {
    cy.visit('http://localhost:3001');
    cy.get('#sign-up').click();
    cy.get('#sign-up-form').within(() => {
      cy.get('#email').type('user2@mail.com')
      cy.get('#password').type('password2')
      cy.get('#passwordConfirmation').type('password2')
      cy.get('#submit').click()
    })
    cy.contains('Email has already been taken')
  })

  it('but not when password and passwordConfirmation are not equal', () => {
    cy.visit('http://localhost:3001');
    cy.get('#sign-up').click();
    cy.get('#sign-up-form').within(() => {
      cy.get('#email').type('user3@mail.com')
      cy.get('#password').type('password2')
      cy.get('#passwordConfirmation').type('password23')
      cy.get('#submit').click()
    })
    cy.contains("Password confirmation doesn't match Password")
  })

  it('but not when password is less than six characters long', () => {
    cy.visit('http://localhost:3001');
    cy.get('#sign-up').click();
    cy.get('#sign-up-form').within(() => {
      cy.get('#email').type('user3@mail.com')
      cy.get('#password').type('pass')
      cy.get('#passwordConfirmation').type('pass')
      cy.get('#submit').click()
    })
    cy.contains('Password is too short (minimum is 6 characters)')
  })
})
