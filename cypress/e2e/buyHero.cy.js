import HomePage from "../pages/homePage";
import userData from "../fixtures/userdata.json"


const homePage = new HomePage()

describe ('Teste comprando heroi', () => {
    it('Buy a Hero with user - Affirmative', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginUserSuccess(userData.userSuccess.email, userData.userSuccess.password)

        homePage.buyHeroPositive()

    })

    it('Buy a Hero with user - Negative', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginUserSuccess(userData.userSuccess.email, userData.userSuccess.password)
        homePage.buyHeroNegative()
    })

    it('Buy a Hero without user', () => {
        homePage.accessHomePage()
        homePage.buyHeroWithoutUser()
    })



})