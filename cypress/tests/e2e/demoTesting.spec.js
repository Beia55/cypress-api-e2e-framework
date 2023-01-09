import { DemoSitePage, AngularJsPracticePage } from '../../e2e/pages'
import { NAVIGATION_ITEM } from '../../resources'
import { urlShouldEqual } from '../../helpers'

describe('e2e test for demo testing page', () => {
  const demoSitePage = new DemoSitePage()
  const angularJsPracticePage = new AngularJsPracticePage()

  beforeEach(() => {
    demoSitePage.navigateToDemoTesting()
    demoSitePage.titleShouldBeVisible()
  })

  it('should info list length equal 4', () => {
    demoSitePage.infoListShouldHaveLength(4)
  })

  it('should redirect to angular js page', () => {
    demoSitePage.navigateToPracticeAngularJsSite()
    angularJsPracticePage.titleShouldBeVisible()
  })

  it('should go to angular js page from components', () => {
    demoSitePage.clickOnComponent(4, 2)
    urlShouldEqual(NAVIGATION_ITEM.ANGULAR_JS_PROTRACTOR_PRACTICE_SITE.LINK)
    angularJsPracticePage.titleShouldBeVisible()
  })
})
