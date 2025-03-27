import HomePage from "../pages/homePage"
import CreateNewHero from "../pages/createNewHeroPage"

const homePage = new HomePage()
const createNewHeroPage = new CreateNewHero()

describe ('Teste criando novo heroi', () => {
    it('Create a new hero - Success', () => {
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginAdminSuccess()

        createNewHeroPage.AccessCreateNewHero()
        createNewHeroPage.CreateNewHero()
    })
})