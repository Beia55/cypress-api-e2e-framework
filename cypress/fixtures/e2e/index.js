export const mockE2EData = currentFunction => {
  cy.fixture('e2e/data.json').then(currentE2EData =>
    currentFunction(currentE2EData)
  )
}
