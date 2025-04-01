class EditHero {
    selectorsList(){
        const selectors = {
            editButton: "[data-cy='pencil']",
            editName: "[name='name']",
            editPrice: "[name='price']",
            editFans: "[name='fans']",
            editSaves: "[name='saves']",
            editPower: "[data-cy='powersSelect']",
            editiAvatar: "[data-cy='avatarFile']",
            editButtonSubmit: "[novalidate=''] button",
            bodyMessage: ".shadow-md"
        }
        return selectors
    }

    accessEditHero () {
        cy.get(this.selectorsList().editButton).eq(0).click()
    }

    editHero(name,price,fans,saves,power){
        cy.get(this.selectorsList().editName).clear().type(name)
        cy.get(this.selectorsList().editPrice).clear().type(price)
        cy.get(this.selectorsList().editFans).clear().type(fans)
        cy.get(this.selectorsList().editSaves).clear().type(saves)
        cy.get(this.selectorsList().editPower).select(power)
        cy.get(this.selectorsList().editiAvatar).selectFile('server/prisma/images/hero4.png')
        cy.get(this.selectorsList().editButtonSubmit).click()
    }

    validationErrorEdit(){
        cy.get(this.selectorsList().bodyMessage).contains(/Name is required|Price is required|Fans is required|Saves is required|Powers is required/).should('exist')
    }


}

export default EditHero