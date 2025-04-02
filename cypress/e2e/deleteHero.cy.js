import HomePage from "../pages/homePage";
import userData from "../fixtures/userdata.json"


const homePage = new HomePage()

describe ('Teste deletando heroi', () => {
    it('Delete a hero - Affirmative', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginAdminSuccess(userData.adminSuccess.email, userData.adminSuccess.password)
        homePage.deleteHeroPositive()
    })

    it('Delete a hero - Negative', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginAdminSuccess(userData.adminSuccess.email, userData.adminSuccess.password)
        homePage.deleteHeroNegative()
    })


})