Cypress.Commands.add('popupClose', () => {
//    cy.wait(5000)
    cy.get('body').then(($body) => {
      if ($body.find('.dytmpl-popup-close').length > 0) {
        cy.get('.dytmpl-popup-close').then(($button) => {
          if ($button.is(':visible')) {
            cy.get('.dytmpl-popup-close').click({
              force: true,
            });
          }
        });
      }
    });
  });