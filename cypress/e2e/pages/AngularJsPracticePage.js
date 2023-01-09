import { BasePage } from './BasePage'
import { NAVIGATION_ITEM, SELECTORS } from '../../resources'
import { getAngularJsSiteComponent } from '../../helpers'

export class AngularJsPracticePage extends BasePage {
  constructor() {
    super()
  }

  navigateToAngularJsPractice() {
    cy.visit(NAVIGATION_ITEM.ANGULAR_JS_PROTRACTOR_PRACTICE_SITE.LINK)
  }

  titleShouldBeVisible() {
    cy.isVisible(SELECTORS.ANGULARJS_PRACTICE_TITLE)
  }

  infoListShouldHaveLength(size) {
    cy.get(SELECTORS.ANGULARJS_LIST_OF_INFO)
      .children()
      .should('have.length', size)
  }

  navigateToPracticeDemoSite() {
    cy.isVisible(SELECTORS.ANGULARJS_DEMO_LINK)
    cy.get(SELECTORS.ANGULARJS_DEMO_LINK).click()
  }

  clickOnComponent(col, row) {
    const element = getAngularJsSiteComponent(col, row + 1)
    cy.isVisible(element)
    cy.get(element).click()
  }
}
