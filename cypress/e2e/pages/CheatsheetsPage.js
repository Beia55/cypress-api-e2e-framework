import { BasePage } from './BasePage'
import { E2E_URL, SELECTORS } from '../../resources'
import { getCheatsheetsListItem, urlShouldEqual } from '../../helpers'

export class CheatsheetsPage extends BasePage {
  constructor() {
    super()
  }

  titleShouldBeVisible() {
    cy.isVisible(SELECTORS.CHEATSHEETS_TITLE)
  }

  clickOnListItem(itemNo, itemLink) {
    cy.isVisible(getCheatsheetsListItem(itemNo))

    cy.get(getCheatsheetsListItem(itemNo))
      .invoke('removeAttr', 'target')
      .click()
    urlShouldEqual(E2E_URL + itemLink)
  }
}
