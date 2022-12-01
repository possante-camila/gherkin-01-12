/// <reference types="cypress" />
import {When} from "@badeball/cypress-cucumber-preprocessor";

When(`I click on signin button`, () => {
	cy.get('[href="/sign/in"]').first().click()
})

When(`I type email`,() => {
    cy.get('#inputEmail').type('niltongomessantos@yahoo.com.br')
})

When(`I type password`, () =>{
    cy.get('#inputPassword').clear().type('NIlton9345')
}) 

When(`I click on signin securely`, () =>{
    cy.get('.sign-in').click()
})