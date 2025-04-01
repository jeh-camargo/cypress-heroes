import HomePage from "../pages/homePage"
import userData from  '../fixtures/userdata.json'
import CreateNewHero from "../pages/createNewHeroPage"

const homePage = new HomePage()
const createNewHeroPage = new CreateNewHero()

describe ('Teste criando novo heroi', () => {
    it('Create a new hero - Success', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginAdminSuccess(userData.adminSuccess.email, userData.adminSuccess.password)

        createNewHeroPage.AccessCreateNewHero()
        createNewHeroPage.CreateNewHero(userData.createHeroSuccess.name, userData.createHeroSuccess.price, userData.createHeroSuccess.fans, userData.createHeroSuccess.saves, userData.createHeroSuccess.power)
    })

    it('Create a new hero - Fail', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginAdminSuccess(userData.adminSuccess.email, userData.adminSuccess.password)

        createNewHeroPage.AccessCreateNewHero()
        createNewHeroPage.CreateNewHero(userData.createHeroFail.name, userData.createHeroFail.price, userData.createHeroFail.fans, userData.createHeroFail.saves, userData.createHeroFail.power)
        createNewHeroPage.ErrorCreateNewHero()
    })
})