    class HomePage{
        selectorsList(){
            const selectors = {
                loginButton: "nav",
                emailField: "[data-cy='email']",
                passwordField: "[data-cy='password']",
                signInButton: "form button",
                loginErrorMessage: ".text-red-500",
                deleteHeroButton: "[data-cy='trash']",
                confirmDeleteYes: ".gap-2 > .text-white",
                confirmDeleteNo: ".gap-4 > .gap-2 > .text-gray-800",
                buyButton: "[data-cy='money']",
                confirmBuyYes: ".gap-2 > .text-white",
                confirmBuyNo: ".gap-4 > .gap-2 > .text-gray-800",
                likeButton: "[data-cy='like']",
                messageError: ".gap-4 > .flex-col > .mb-1"

            }
            return selectors
        }

        accessHomePage(){
            cy.visit('http://localhost:3000/heroes')
        }

        accessLogin(){
            cy.get(this.selectorsList().loginButton).click()
        }

        loginUserSuccess (email, password){
            cy.get(this.selectorsList().emailField).type(email)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().signInButton).click({force : true})
        }

        loginAdminSuccess (email, password){
            cy.get(this.selectorsList().emailField).type(email)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().signInButton).click()
        }

        loginFail (email, password){
            cy.get(this.selectorsList().emailField).type(email)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().signInButton).click()       
        }

        checkAcessInvalid(){
            cy.get(this.selectorsList().loginErrorMessage).should('be.visible')
        }

        deleteHeroPositive(){
            cy.get(this.selectorsList().deleteHeroButton).eq('3').click() 
            cy.get(this.selectorsList().confirmDeleteYes).click() 
        }

        deleteHeroNegative(){
            cy.get(this.selectorsList().deleteHeroButton).eq('3').click() 
            cy.get(this.selectorsList().confirmDeleteNo).click() 
        }

        buyHeroPositive(){
            cy.get(this.selectorsList().buyButton).eq('3').click() 
            cy.get(this.selectorsList().confirmBuyYes).click() 

        }

        buyHeroNegative(){
            cy.get(this.selectorsList().buyButton).eq('4').click() 
            cy.get(this.selectorsList().confirmBuyNo).click() 
        }

        buyHeroWithoutUser(){
            cy.get(this.selectorsList().buyButton).eq('4').click() 
            cy.get(this.selectorsList().messageError).should('be.visible') 
        }

        likeHeroPositive(){
            cy.get(this.selectorsList().likeButton).eq('4').click() 
        }
        
        likeHeroNegative(){
            cy.get(this.selectorsList().likeButton).eq('4').click()
            cy.get(this.selectorsList().messageError).should('be.visible') 
        }
    }

    export default HomePage