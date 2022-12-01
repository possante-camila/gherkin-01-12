/// <reference types="cypress" />
import {Given, When} from "@badeball/cypress-cucumber-preprocessor";

Given(`I navigate to the Nuts homepage`, () => {
	cy.visit('https://nuts.com')
	cy.popupClose()
});


