describe('buscar geladeira casa nova', () => {


    beforeEach(() => {
   
      cy.visit('https://www.google.com.br/');
    })


    it('buscar geladeira', () => {
        cy.get('.gLFyf').type('geladeira inox')
        cy.wait(1000)
        cy.get('.CqAVzb > center > .gNO89b').click()
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        cy.get('.SrY7j > .RhVG3d > :nth-child(1) > .sh-dr__short > :nth-child(2) > .EQ4p8c > .vjtvke > .JcqPK').click()
        cy.get(':nth-child(11) > .RhVG3d > :nth-child(1) > .sh-dr__short > .DON5yf > .EQ4p8c > .vjtvke > .JcqPK').click()
    })
})