describe('Home Page', () => {
    it('should display the home page', () => {
        cy.visit('/')
        cy.contains('Home Page')
    })
})