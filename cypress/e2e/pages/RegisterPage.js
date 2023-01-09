import { BasePage } from './BasePage'
import { SELECTORS } from '../../resources'

export class RegisterPage extends BasePage {
  constructor() {
    super()
  }

  visitRegisterPage() {
    cy.visit(SELECTORS.REGISTER_PAGE)
  }

  getRegisterBTN() {
    return cy.contains('button', SELECTORS.REGISTER_BTN)
  }

  displaySuccessMsg() {
    cy.isVisible(SELECTORS.REGISTER_WITH_SUCCESS)
    cy.get(SELECTORS.REGISTER_WITH_SUCCESS).should(
      'contain',
      SELECTORS.REGISTER_WITH_SUCCESS_MSG
    )
  }

  typeFirstName(firstName) {
    cy.get(SELECTORS.REGISTER_FIRST_NAME_INPUT).type(firstName)
  }

  typeLastName(lastName) {
    cy.get(SELECTORS.REGISTER_LAST_NAME_INPUT).type(lastName)
  }

  typeUsername(username) {
    cy.get(SELECTORS.REGISTER_UERNAME_INPUT).type(username)
  }

  typePassword(password) {
    cy.get(SELECTORS.REGISTER_PASSWORD_INPUT).type(password)
  }

  register() {
    this.getRegisterBTN().click()
  }

  cancelRegister() {
    cy.contains('a', SELECTORS.CANCEL_REGISTER_BTN).click()
  }
}
