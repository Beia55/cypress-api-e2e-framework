import { MultiformPage } from '../../e2e/pages'
import { urlShouldEqual } from '../../helpers'
import { E2E_URL } from '../../resources'
import { mockE2EData } from '../../fixtures/e2e'

describe('e2e test for angular hs practice page', () => {
  const multiformPage = new MultiformPage()

  beforeEach(() => {
    multiformPage.visitMultiformPage()
    multiformPage.titleShouldBeVisible()
  })

  it('should fill and send form', () => {
    mockE2EData(data => {
      multiformPage.typeName(data.multiform.name)
      multiformPage.previerShouldContain({
        name: data.multiform.name,
      })
      multiformPage.typeEmail(data.multiform.email)
      multiformPage.previerShouldContain({
        name: data.multiform.name,
        email: data.multiform.email,
      })
      multiformPage.goToNextStep()
      multiformPage.chooseConsoleChoice(data.multiform.console.no)
      multiformPage.goToNextStep()
      multiformPage.displayThanksMsg()
      multiformPage.previerShouldContain({
        name: data.multiform.name,
        email: data.multiform.email,
        console: data.multiform.console.xbox,
      })
    })
    multiformPage.submitForm()
    multiformPage.showConfirmationForSubmitform()
  })

  it('should redirect to home page on link click', () => {
    multiformPage.clickOnGlobalLink()
    urlShouldEqual(E2E_URL + '/')
  })
})
