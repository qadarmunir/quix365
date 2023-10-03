import Myloginpage from "../pages/loginpage.js";
import cypressConfig from "../../../cypress.config.js";
const login=new Myloginpage();

Cypress.Commands.add('login', (data)=>{
    
    cy.visit('https://quix365.com/')
    // Wait 30 seconds for page 'load' event
    //cy.visit('/index.html', { timeout: 30000 })
    login.main_site_login_btn1().click({setTimeout: 3000});
    login.site_url().type(data.sitename)
    login.site_url_submit_btn2().click({setTimeout: 3000});
    login.store_email().type(data.email_address)
    login.store_password().type(data.password)
    login.letme_in_btn3().click({setTimeout: 3000});
})