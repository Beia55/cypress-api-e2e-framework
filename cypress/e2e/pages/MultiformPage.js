import { BasePage } from './BasePage'
import { NAVIGATION_ITEM, SELECTORS } from '../../resources'
import { chooseMultiformConsole } from '../../helpers'

export class MultiformPage extends BasePage {
  constructor() {
    super()
  }

  visitMultiformPage() {
    cy.visit(NAVIGATION_ITEM.MULTIFORM.LINK)
  }

  titleShouldBeVisible() {
    cy.isVisible(SELECTORS.MULTIFORM_TITLE)
  }

  typeName(name) {
    cy.isVisible(SELECTORS.MULTIFORM_NAME)
    cy.get(SELECTORS.MULTIFORM_NAME).type(name)
  }

  typeEmail(email) {
    cy.isVisible(SELECTORS.MULTIFORM_EMAIL)
    cy.get(SELECTORS.MULTIFORM_EMAIL).type(email)
  }

  chooseConsoleChoice(choice) {
    cy.isVisible(chooseMultiformConsole(1))
    cy.isVisible(chooseMultiformConsole(2))
    cy.get(chooseMultiformConsole(choice)).click()
  }

  goToNextStep() {
    cy.isVisible(SELECTORS.MULTIFORM_STEPS_BTN)
    cy.get(SELECTORS.MULTIFORM_STEPS_BTN).eq(0).click()
  }

  submitForm() {
    cy.isVisible(SELECTORS.MULTIFORM_SUBMIT_BTN)
    cy.get(SELECTORS.MULTIFORM_SUBMIT_BTN).click()
  }

  clickOnGlobalLink() {
    cy.isVisible(SELECTORS.MULTIFORM_REDIRECT_HOME_LINK)
    cy.get(SELECTORS.MULTIFORM_REDIRECT_HOME_LINK)
      .invoke('removeAttr', 'target')
      .click()
  }

  displayThanksMsg() {
    cy.isVisible(SELECTORS.MULTIFORM_THANKS_MSG)
    cy.get(SELECTORS.MULTIFORM_THANKS_MSG).should(
      'contain',
      'Thanks For Your Money!'
    )
  }

  previerShouldContain({ name, email, console }) {
    cy.isVisible(SELECTORS.MULTIFORM_PREVIEWR)
    const currentName = '"name":"' + name + '"'
    const currentEmail = '"email":"' + email + '"'
    const currentConsole = '"type":"' + console + '"'

    cy.get(SELECTORS.MULTIFORM_PREVIEWR).should(
      'contain',
      `{${name && currentName}${email ? ',' : ''}${email ? currentEmail : ''}${
        console ? ',' : ''
      }${console ? currentConsole : ''}}`
    )
  }

  showConfirmationForSubmitform() {
    cy.on('window:alert', msg => {
      expect(msg).to.equal(`awesome!`)
    })
  }
}
