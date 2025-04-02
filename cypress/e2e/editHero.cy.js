import HomePage from "../pages/homePage";
import EditHero from "../pages/editHeroPage";
import userData from "../fixtures/userdata.json"

const Chance = require('chance')

const chance = new Chance()
const homePage = new HomePage()
const editHero = new EditHero()

describe ('Teste editando um heroi', () => {
    it('Edit a hero - Success', () => {
        
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginAdminSuccess(userData.adminSuccess.email, userData.adminSuccess.password)
        
        editHero.accessEditHero()

        editHero.editHero(chance.last(),chance.prime({min: 0, max: 20000}),chance.prime({min: 0, max: 2000}), chance.prime({min: 0, max: 2000}),chance.integer({ min: 0, max: 8 }))
    
        
    })

    it('Edit a hero - Fail', () => {
        
        homePage.accessHomePage()
        homePage.accessLogin()
        homePage.loginAdminSuccess(userData.adminSuccess.email, userData.adminSuccess.password)
        
        editHero.accessEditHero()

        editHero.editHero(' ', ' ', ' ', ' ', chance.integer({ min: 0, max: 8 }) )
        editHero.validationErrorEdit()
        
        //o app aceitando editar o campo nome e deixa-lo vazio, aceita digitar apenas numeros.

    })

})
