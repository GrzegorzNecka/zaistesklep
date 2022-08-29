import { verify } from "crypto";

export {};

describe("Smoke test", () => {
    it("Does not do much!", () => {
        //Given
        cy.visit("/newsletter");
        //When

        cy.get(`[data-cy="newsletter-email"]`).type("abc@gmail.com");

        cy.get(`[data-cy="newsletter-name"]`).type("maniek");

        cy.get(`[data-cy="newsletter-submit-btn"]`).click();
        //Then
        cy.get(`[data-cy="newsletter-submit-confetti"]`).contains("subscribe was successed");
    });
});
