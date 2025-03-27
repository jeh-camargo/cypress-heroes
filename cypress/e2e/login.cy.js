import HomePage from '../pages/homePage'

const homePage = new HomePage()

describe('Testes de login', () => {
  it('Login User Success', () => {
    homePage.accessHomePage()
    homePage.accessLogin()
    homePage.loginUserSuccess()
    //cy.get("").type("test@test.com") // admin@teste.com
   // cy.get("").type("test123")
  })

  it('Login Admin Success', () => {
    homePage.accessHomePage()
    homePage.accessLogin()
    homePage.loginAdminSuccess()

  })

})