describe('Cooper Client calculates successfully', () => {
  before(function() {
    cy.visit('http://localhost:3001');
    cy.get('input[id="distance"]').type('1000')
    cy.get('div[id="gender"]').click().get('div[role="option"]').contains('Female')
    cy.get('input[id="age"]').type('23')
  })

  it('displays age', () => {
    cy.contains('23 y/o')
  })

  it('displays gender', () => {
    cy.contains('female')
  })

  it('displays distance', () => {
    cy.contains('running 1000 meters')
  })

  it('displays result', () => {
    cy.contains('Result: Poor')
  })
})