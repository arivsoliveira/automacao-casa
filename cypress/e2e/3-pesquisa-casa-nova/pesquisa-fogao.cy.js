describe('buscar fogão casa nova', () => {


    beforeEach(() => {
   
      cy.visit('https://www.google.com.br/');
    })


    it('buscar fogão', () => {
        cy.get('.gLFyf').type('cooktop 4 bocas')
        cy.wait(1000)
        cy.get('.CqAVzb > center > .gNO89b').click()
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        cy.get(':nth-child(8) > .RhVG3d > :nth-child(1) > .sh-dr__short > .DON5yf > .EQ4p8c > .vjtvke > .JcqPK').click()    })

})