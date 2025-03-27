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
            submitButton: "[novalidate=''] button"

        }
        return selectors
    }

    AccessCreateNewHero(){
        cy.get(this.selectorsList().createNewHeroButton).click()
    }

    CreateNewHero(){
        cy.get(this.selectorsList().nameField).type('Fire Man')
        cy.get(this.selectorsList().priceField).type('100')
        cy.get(this.selectorsList().fansField).type('100')
        cy.get(this.selectorsList().savesField).type('45')
        cy.get(this.selectorsList().powersList).select('2')
        cy.get(this.selectorsList().avatarField).selectFile('server/prisma/images/hero1.png', { action: 'drag-drop' })
        cy.get(this.selectorsList().submitButton).click()
    }

}
export default CreateNewHero