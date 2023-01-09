import { onNavigationItemClick, urlShouldEqual } from '../../helpers'
import { E2E_URL, SELECTORS } from '../../resources'

export class NavigationComponent {
  constructor() {}

  startPage() {
    cy.visit(E2E_URL)
  }

  navigationIsVisible() {
    cy.isVisible(SELECTORS.NAVBAR)
  }

  clickOnNavItem(item, link) {
    onNavigationItemClick(item)
    link && urlShouldEqual(link)
  }

  clickOnLogo() {
    cy.isVisible(SELECTORS.LOGO)
    cy.get(SELECTORS.LOGO).click()
    urlShouldEqual(E2E_URL + '/')
  }
}
