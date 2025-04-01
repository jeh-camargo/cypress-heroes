    class HomePage{
        selectorsList(){
            const selectors = {
                loginButton: "nav",
                emailField: "[data-cy='email']",
                passwordField: "[data-cy='password']",
                signInButton: "form button",
                loginErrorMessage: ".text-red-500"

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
    }

    export default HomePage