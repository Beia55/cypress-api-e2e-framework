export const shouldHaveProperty = (expected, property) =>
  expect(expected).to.have.property(property)

export const shouldHavePropertyWithValue = (expected, property, value) =>
  expect(expected).to.have.property(property, value)

export const shouldHaveProperties = (expected, properties) =>
  properties.map(property => expect(expected).to.have.property(property))

export const shouldHavePropertiesWithValue = (expected, propertiesWithValue) =>
  propertiesWithValue.map(([property, value]) =>
    expect(expected).to.have.property(property, value)
  )

export const shouldBeDisabled = selected => selected.should('be.disabled')

export const urlShouldEqual = link => cy.url().should('eq', link)
