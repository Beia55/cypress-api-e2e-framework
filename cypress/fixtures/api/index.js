export const mockApiData = currentFunction => {
  cy.fixture('api/data.json').then(currentApiData =>
    currentFunction(currentApiData)
  )
}
