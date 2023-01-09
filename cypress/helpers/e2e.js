import { NAVIGATION_ITEM } from '../resources'

export const onNavigationItemClick = item => {
  switch (item) {
    case NAVIGATION_ITEM.CHEATSHEETS.SELECTOR:
      cy.get(NAVIGATION_ITEM.CHEATSHEETS.SELECTOR).click()
      break
    case NAVIGATION_ITEM.FREE_BOOKS.SELECTOR:
      cy.get(NAVIGATION_ITEM.FREE_BOOKS.SELECTOR).click()
      break
    case NAVIGATION_ITEM.TESTERS_HUB.SELECTOR:
      cy.get(NAVIGATION_ITEM.TESTERS_HUB.SELECTOR).click()
      break
    case NAVIGATION_ITEM.CONTACT_US.SELECTOR:
      cy.get(NAVIGATION_ITEM.CONTACT_US.SELECTOR).click()
      break
    case NAVIGATION_ITEM.FREE_MACHINE_LEARNING_EBOOKS.SELECTOR:
      cy.get(NAVIGATION_ITEM.FREE_BOOKS.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.FREE_MACHINE_LEARNING_EBOOKS.SELECTOR)
        .click()
      break
    case NAVIGATION_ITEM.FREE_DEEP_LEARNING_EBOOKS.SELECTOR:
      cy.get(NAVIGATION_ITEM.FREE_BOOKS.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.FREE_DEEP_LEARNING_EBOOKS.SELECTOR)
        .click()
      break
    case NAVIGATION_ITEM.FREE_ELASTIC_SEARCH_EBOOKS.SELECTOR:
      cy.get(NAVIGATION_ITEM.FREE_BOOKS.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.FREE_ELASTIC_SEARCH_EBOOKS.SELECTOR)
        .click()
      break
    case NAVIGATION_ITEM.FREE_TENSORFLOW_EBOOKS.SELECTOR:
      cy.get(NAVIGATION_ITEM.FREE_BOOKS.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.FREE_TENSORFLOW_EBOOKS.SELECTOR)
        .click()
      break
    case NAVIGATION_ITEM.DEMO_TESTING_SITE.SELECTOR:
      cy.get(NAVIGATION_ITEM.TESTERS_HUB.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.DEMO_TESTING_SITE.SELECTOR)
        .click()
      break
    case NAVIGATION_ITEM.ANGULAR_JS_PROTRACTOR_PRACTICE_SITE.SELECTOR:
      cy.get(NAVIGATION_ITEM.TESTERS_HUB.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.ANGULAR_JS_PROTRACTOR_PRACTICE_SITE.SELECTOR)
        .click()
      break
    case NAVIGATION_ITEM.MULTIFORM.SELECTOR:
      cy.get(NAVIGATION_ITEM.TESTERS_HUB.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.ANGULAR_JS_PROTRACTOR_PRACTICE_SITE.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.MULTIFORM.SELECTOR)
        .click({ force: true })
      break
    case NAVIGATION_ITEM.SAMPLE_PAGE_TEST.SELECTOR:
      cy.get(NAVIGATION_ITEM.TESTERS_HUB.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.SAMPLE_PAGE_TEST.SELECTOR)
        .click()
      break
    case NAVIGATION_ITEM.FLASH_WEBSITE.SELECTOR:
      cy.get(NAVIGATION_ITEM.TESTERS_HUB.SELECTOR)
        .trigger('mouseover')
        .get(NAVIGATION_ITEM.FLASH_WEBSITE.SELECTOR)
        .click()
      break
    default:
      cy.get(NAVIGATION_ITEM.HOME.SELECTOR).click()
  }
}

export const getCheatsheetsListItem = itemNo =>
  `#post-6881 > div > div > div > ul > li:nth-child(${itemNo}) > span > a`

export const getDemoSiteComponent = (col, row) =>
  `#post-2715 > div:nth-child(3) > div > div > div.row.price_table_holder.col_4 > div:nth-child(${col}) > ul > li:nth-child(${row}) > a`

export const getAngularJsSiteComponent = (col, row) =>
  `#post-2777 > div:nth-child(4) > div > div > div.row.price_table_holder.col_3 > div:nth-child(${col}) > ul > li:nth-child(${row}) > a`

export const chooseMultiformConsole = choice =>
  `#form-views > div:nth-child(2) > div:nth-child(${choice}) > label > input`
