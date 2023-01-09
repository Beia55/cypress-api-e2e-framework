export class BasePage {
  constructor() {}

  pause(ms) {
    cy.wait(ms)
  }

  setMobileViewport() {
    cy.viewport('iphone-x')
  }

  setTableViewport() {
    cy.viewport('ipad-2')
  }

  setDesktopViewport() {
    cy.viewport('macbook-13')
  }

  setLargeDesktopViewport() {
    cy.viewport('macbook-15')
  }
}
