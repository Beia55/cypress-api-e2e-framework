import { NavigationComponent } from '../../e2e/components'
import { NAVIGATION_ITEM, CHEATSHEETS_LINK_SELECTORS } from '../../resources'
import { CheatsheetsPage, DemoSitePage, MultiformPage } from '../../e2e/pages'
import { urlShouldEqual } from '../../helpers'

describe('e2e test for navigation', () => {
  const navigation = new NavigationComponent()
  const cheatsheetsPage = new CheatsheetsPage()
  const demoSitePage = new DemoSitePage()
  const multiformPage = new MultiformPage()

  beforeEach(() => {
    navigation.startPage()
    navigation.navigationIsVisible()
  })

  it('should click on navigation cheatsheets item - first layer', () => {
    navigation.clickOnNavItem(
      NAVIGATION_ITEM.CHEATSHEETS.SELECTOR,
      NAVIGATION_ITEM.CHEATSHEETS.LINK
    )
    cheatsheetsPage.titleShouldBeVisible()
    // TODO: move this to a separate test for CHEATSHEETS page
    cheatsheetsPage.clickOnListItem(
      CHEATSHEETS_LINK_SELECTORS.SQL.NO,
      CHEATSHEETS_LINK_SELECTORS.SQL.LINK
    )
  })

  it('should click on demo testing site item - second layer', () => {
    navigation.clickOnNavItem(
      NAVIGATION_ITEM.DEMO_TESTING_SITE.SELECTOR,
      NAVIGATION_ITEM.DEMO_TESTING_SITE.LINK
    )
    demoSitePage.titleShouldBeVisible()
  })

  it('should click on multiform item - third layer', () => {
    navigation.clickOnNavItem(
      NAVIGATION_ITEM.MULTIFORM.SELECTOR,
      NAVIGATION_ITEM.MULTIFORM.LINK
    )
    urlShouldEqual(NAVIGATION_ITEM.MULTIFORM.LINK)
    multiformPage.titleShouldBeVisible()
  })

  it('should click on logo', () => {
    navigation.clickOnLogo()
  })
})
