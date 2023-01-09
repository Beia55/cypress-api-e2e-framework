import { BasePage } from './BasePage'
import { SELECTORS } from '../../resources'

export class LoginPage extends BasePage {
  constructor() {
    super()
  }

  visitLoginPage() {
    cy.visit(SELECTORS.LOGIN_PAGE)
  }

  getLoginBTN() {
    return cy.contains('button', SELECTORS.LOGIN_BTN)
  }

  typeUsername(username) {
    cy.get(SELECTORS.LOGIN_UERNAME_INPUT).type(username)
  }

  typePassword(password) {
    cy.get(SELECTORS.LOGIN_PASSWORD_INPUT).type(password)
  }

  login() {
    this.getLoginBTN().click()
  }

  logout() {
    cy.contains('button', SELECTORS.LOGOUT_BTN).click()
  }

  goToRegisterPage() {
    cy.contains('a', SELECTORS.LOGIN_REDIRECT_TO_REGISTER_BTN).click()
  }

  displayErrorMsg() {
    cy.isVisible(SELECTORS.LOGIN_FAILED)
    cy.get(SELECTORS.LOGIN_FAILED).should('contain', SELECTORS.LOGIN_FAILED_MSG)
  }
}
