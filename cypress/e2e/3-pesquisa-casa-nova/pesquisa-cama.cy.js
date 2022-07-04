describe('buscar cama casa nova', () => {


    beforeEach(() => {
   
      cy.visit('https://www.google.com.br/');
    })


    it('buscar cama', () => {
        cy.get('.gLFyf').type('cama box queen')
        cy.wait(1000)
        cy.get('.FPdoLc > center > .gNO89b').click()
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        cy.get(':nth-child(12) > .RhVG3d > :nth-child(1) > .sh-dr__short > .DON5yf > .EQ4p8c > .vjtvke > .JcqPK').click()
    })
})