import { BasePage } from './BasePage'
import { NAVIGATION_ITEM, SELECTORS } from '../../resources'
import { getDemoSiteComponent } from '../../helpers'

export class DemoSitePage extends BasePage {
  constructor() {
    super()
  }

  navigateToDemoTesting() {
    cy.visit(NAVIGATION_ITEM.DEMO_TESTING_SITE.LINK)
  }

  titleShouldBeVisible() {
    cy.isVisible(SELECTORS.DEMO_SITE_TITLE)
  }

  infoListShouldHaveLength(size) {
    cy.get(SELECTORS.DEMO_LIST_OF_INFO).children().should('have.length', size)
  }

  navigateToPracticeAngularJsSite() {
    cy.isVisible(SELECTORS.DEMO_ANGULARJS_LINK)
    cy.get(SELECTORS.DEMO_ANGULARJS_LINK).click()
  }

  clickOnComponent(col, row) {
    const element = getDemoSiteComponent(col, row + 1)
    cy.isVisible(element)
    cy.get(element).click()
  }
}
