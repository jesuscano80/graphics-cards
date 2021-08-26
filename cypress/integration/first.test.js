describe('Graphics Cards', () => {
  
    beforeEach(() => {
      const baseUrl = 'http://localhost:4400/';
      cy.visit(baseUrl);
    }
    )

    it('search feat works?', () => {
        cy.get("input").type("geforce")
        cy.get("button").click();
      })

    it('details web?', ()=>{
        cy.get("app-graphics-card-list-container > section > :nth-child(1)").click();
    })

    it ('back button details web', ()=>{
        cy.get("app-graphics-card-list-container > section > :nth-child(1)").click();
        cy.get(".icon").click();
    })

    it('scroll down and pushing up button', ()=>{
        cy.scrollTo(0, 500);
        cy.get(".buttonup").click();
    })

}) 