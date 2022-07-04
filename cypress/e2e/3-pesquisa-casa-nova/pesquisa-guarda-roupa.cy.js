describe('buscar guarda roupa casa nova', () => {


    beforeEach(() => {
   
      cy.visit('https://www.google.com.br/');
    })


    it('buscar guarda roupa', () => {
        cy.get('.gLFyf').type('guarda roupa casal')
        cy.wait(1000)
        cy.get('.CqAVzb > center > .gNO89b').click()
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        cy.get(':nth-child(8) > .RhVG3d > :nth-child(1) > .sh-dr__short > .DON5yf > .EQ4p8c > .vjtvke > .JcqPK').click()    })
})
jdsdjoifjsdifjdsofjsdijf