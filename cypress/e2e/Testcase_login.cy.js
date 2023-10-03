import Myloginpage from  '../utils/login.js'

describe('Validate Login  on quix365 website', function () {

    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('Validate successful Login', function () {
        cy.Myloginpage(this.testdata)
    })
   
})