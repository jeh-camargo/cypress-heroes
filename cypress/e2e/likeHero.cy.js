import HomePage from "../pages/homePage";
import userData from "../fixtures/userdata.json"


const homePage = new HomePage()

describe ('Teste likes herois', () => {
    it('Like the Hero with login', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginUserSuccess(userData.userSuccess.email, userData.userSuccess.password)
        homePage.likeHeroPositive()

    })

    it('Like the Hero without login', () => {
        homePage.accessHomePage()
        homePage.likeHeroNegative()

    })
})  