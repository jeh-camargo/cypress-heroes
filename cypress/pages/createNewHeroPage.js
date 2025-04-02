class CreateNewHero{
    selectorsList(){
        const selectors = {
            createNewHeroButton: "[href='/heroes/new']",
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powersList: "[data-cy='powersSelect']",
            avatarField: "[data-cy='avatarFile']",
            powerFlying: "[value='1']",
            submitButton: "form button",
            errorMessageNewHero: ".px-8"

        }
        return selectors
    }

    AccessCreateNewHero(){
        cy.get(this.selectorsList().createNewHeroButton).click()
    }

    CreateNewHero(name, price, fans, saves, power){
        cy.get(this.selectorsList().nameField).type(name)
        cy.get(this.selectorsList().priceField).type(price)
        cy.get(this.selectorsList().fansField).type(fans)
        cy.get(this.selectorsList().savesField).type(saves)
        cy.get(this.selectorsList().powersList).select(power)
        cy.get(this.selectorsList().avatarField).selectFile('cypress/fixtures/Images/png-transparent-avatar.png', {force : true})
        cy.get(this.selectorsList().submitButton).click()
       
    }


    ErrorCreateNewHero(){
        cy.get(this.selectorsList().errorMessageNewHero).contains(/Name is required|Price is required|Fans is required|Saves is required|Powers is required/).should('exist')
    }

}
export default CreateNewHero