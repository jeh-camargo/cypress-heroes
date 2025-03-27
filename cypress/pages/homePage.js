    class HomePage{
        selectorsList(){
            const selectors = {
                loginButton: "nav",
                emailField: "[data-cy='email']",
                passwordField: "[data-cy='password']",
                signInButton: "form button"

            }
            return selectors
        }

        accessHomePage(){
            cy.visit('http://localhost:3000/heroes')
        }

        accessLogin(){
            cy.get(this.selectorsList().loginButton).click()
        }

        loginUserSuccess (){
            cy.get(this.selectorsList().emailField).type("test@test.com")
            cy.get(this.selectorsList().passwordField).type("test123")
            cy.get(this.selectorsList().signInButton).click()
        }

        loginAdminSuccess (){
            cy.get(this.selectorsList().emailField).type("admin@test.com")
            cy.get(this.selectorsList().passwordField).type("test123")
            cy.get(this.selectorsList().signInButton).click()
        }
    }

    export default HomePage