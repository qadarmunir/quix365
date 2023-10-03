const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 70000 ,
    defaultCommandTimeout : 50000 ,
    testIsolation : false,
    baseUrl :"https://quix365.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
