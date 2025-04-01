import HomePage from '../pages/homePage'
import userData from  '../fixtures/userdata.json'

const homePage = new HomePage()

describe('Testes de login', () => {
  it('Login User Success', () => {
    homePage.accessHomePage()
    homePage.accessLogin()
    homePage.loginUserSuccess(userData.userSuccess.email, userData.userSuccess.password)
  })

  it('Login Admin Success', () => {
    homePage.accessHomePage()
    homePage.accessLogin()
    homePage.loginAdminSuccess(userData.adminSuccess.email, userData.adminSuccess.password)
  })

  it('Login Fail', () => {
    homePage.accessHomePage()
    homePage.accessLogin()
    homePage.loginFail(userData.userFail.email, userData.userFail.password)
    homePage.checkAcessInvalid()
  })

})