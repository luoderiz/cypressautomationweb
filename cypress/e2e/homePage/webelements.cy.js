import homePageLocators from "../../fixtures/homePageLocators.json"

describe('Home Page Feature', () => {
  it('There are 3 Sliders Only', () => {
    cy.visit('https://practice.automationtesting.in/')
    cy.get(homePageLocators.ShopMenuButton).click({force: true})
    cy.get(homePageLocators.HomeMenuButton).click({force: true});
    cy.get(homePageLocators.Slider)
        .should('have.length', 3)
  })

  it('There are 3 Arrivals Only', () => {
    cy.visit('https://practice.automationtesting.in/')
    cy.get(homePageLocators.ShopMenuButton).click({force: true})
    cy.get(homePageLocators.HomeMenuButton).click({force: true});
    cy.get(homePageLocators.NewArrival)
        .should('have.length', 3)
  })
})