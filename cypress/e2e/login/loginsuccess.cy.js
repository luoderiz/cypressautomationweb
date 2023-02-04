import loginLocators from "../../fixtures/loginLocators.json"
import homePageLocators from "../../fixtures/homePageLocators.json"
import example from "../../fixtures/example.json"

describe('Login Feature', () => {

  it('Login Success', () => {
    cy.visit('https://practice.automationtesting.in/')
    cy.get(loginLocators.MyAccountMenu).click({force: true})
    cy.get(loginLocators.UsernameTextbox).type(example.validUsername);
    cy.get(loginLocators.PasswordTextbox).type(example.validPassword);
    cy.get(loginLocators.LoginButton).click({force: true});
    cy.get(homePageLocators.HelloMessage).contains('Hello')
  })

  it('Login Fail for invalid username', () => {
    cy.visit('https://practice.automationtesting.in/')
    cy.get(loginLocators.MyAccountMenu).click({force: true})
    cy.get(loginLocators.UsernameTextbox).type(example.invalidUsername);
    cy.get(loginLocators.PasswordTextbox).type(example.validPassword);
    cy.get(loginLocators.LoginButton).click({force: true});
    cy.get(loginLocators.ErrorMessage).contains('Error')
  })

  it('Login Fail for blank password', () => {
    cy.visit('https://practice.automationtesting.in/')
    cy.get(loginLocators.MyAccountMenu).click({force: true})
    cy.get(loginLocators.UsernameTextbox).type(example.validUsername);
    cy.get(loginLocators.LoginButton).click({force: true});
    cy.get(loginLocators.ErrorMessage).contains('Error')
  })

  it('Login Fail for invalid password', () => {
    cy.visit('https://practice.automationtesting.in/')
    cy.get(loginLocators.MyAccountMenu).click({force: true})
    cy.get(loginLocators.UsernameTextbox).type(example.validUsername);
    cy.get(loginLocators.PasswordTextbox).type(example.invalidPassword);
    cy.get(loginLocators.LoginButton).click({force: true});
    cy.get(loginLocators.ErrorMessage).contains('Error')
  })
})