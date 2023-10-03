class Myloginpage {
    main_site_login_btn1(){
        return cy.get(':nth-child(5) > .nav-link')
    }
    site_url(){
        return cy.get('#site_url')
    }
    site_url_submit_btn2(){
        return cy.get('#btnSubmit')

    }
    store_email(){
        return cy.get('#email')
    }
    store_password(){
        return cy.get('#password')
    }
    letme_in_btn3(){
        return cy.get('.btn')
    }

}
export default Myloginpage