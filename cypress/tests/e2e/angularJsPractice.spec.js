import {
  DemoSitePage,
  AngularJsPracticePage,
  MultiformPage,
} from '../../e2e/pages'
import { urlShouldEqual } from '../../helpers'
import { NAVIGATION_ITEM } from '../../resources'

describe('e2e test for angular hs practice page', () => {
  const demoSitePage = new DemoSitePage()
  const angularJsPracticePage = new AngularJsPracticePage()
  const multiformPage = new MultiformPage()

  beforeEach(() => {
    angularJsPracticePage.navigateToAngularJsPractice()
    angularJsPracticePage.titleShouldBeVisible()
  })

  it('should info list length equal 4', () => {
    angularJsPracticePage.infoListShouldHaveLength(4)
  })

  it('should redirect to demo practice page', () => {
    angularJsPracticePage.navigateToPracticeDemoSite()
    demoSitePage.titleShouldBeVisible()
  })

  it('should go to multiform page from components', () => {
    angularJsPracticePage.clickOnComponent(1, 1)
    urlShouldEqual(NAVIGATION_ITEM.MULTIFORM.LINK)
    multiformPage.titleShouldBeVisible()
  })
})
