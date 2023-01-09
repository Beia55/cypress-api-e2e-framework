import { LoginPage, RegisterPage } from '../../e2e/pages'
import { SELECTORS } from '../../resources'
import { shouldBeDisabled, urlShouldEqual } from '../../helpers'
import { mockE2EData } from '../../fixtures/e2e'
import { genereateRandomNo } from '../../utils'

describe('e2e test for auth', () => {
  const login = new LoginPage()
  const register = new RegisterPage()

  it('should cancel register', () => {
    register.visitRegisterPage()
    register.cancelRegister()
    urlShouldEqual(SELECTORS.LOGIN_PAGE)
  })

  it('should register with incomplete data', () => {
    register.visitRegisterPage()
    mockE2EData(data => {
      register.typeFirstName(data.auth.firstName)
      register.typeLastName(data.auth.lastName)
      register.typeUsername(data.auth.username)
    })
    shouldBeDisabled(register.getRegisterBTN())
  })

  it('should register succesfully', () => {
    register.visitRegisterPage()
    mockE2EData(data => {
      register.typeFirstName(data.auth.firstName)
      register.typeLastName(data.auth.lastName)
      register.typeUsername(data.auth.username + genereateRandomNo())
      register.typePassword(data.auth.password)
    })
    register.register()
    urlShouldEqual(SELECTORS.LOGIN_PAGE)
    register.displaySuccessMsg()
  })

  it('should redirect from login to register page', () => {
    login.visitLoginPage()
    login.goToRegisterPage()
    urlShouldEqual(SELECTORS.REGISTER_PAGE)
  })

  it('should login when unregistered user', () => {
    login.visitLoginPage()
    mockE2EData(data => {
      login.typeUsername(data.auth.username)
      login.typePassword(data.auth.password)
    })
    login.login()
    login.displayErrorMsg()
  })
})
