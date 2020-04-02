context("Admin page", () => {

    beforeEach(() => {
        cy.visit("http://skivbolaget-bbkfed.herokuapp.com/login");
        cy.clearCookies();
        cy.get("#username").type("balthazar");
        cy.get("#password").type("1234");
        cy.get("#post-login-form").submit();
        cy.url().should('eq', 'http://skivbolaget-bbkfed.herokuapp.com/admin');
    })

    it("Delete all albums", () => {

        // Delete all albums
        cy.get('#remove-admin-album').click({ multiple: true });
        cy.get('#remove-admin-album').click({ multiple: true });
        cy.get('#remove-admin-album').click({ multiple: true });
        cy.get('#remove-admin-album').click({ multiple: true });
        cy.get('#remove-admin-album').click({ multiple: true });
        cy.get('#remove-admin-album').click({ multiple: true });
        cy.get('#remove-admin-album').click({ multiple: true });
        cy.get('#remove-admin-album').click({ multiple: true });

    });

    afterEach(() => {
        cy.clearCookies();
        cy.visit('http://skivbolaget-bbkfed.herokuapp.com/');
    });

});