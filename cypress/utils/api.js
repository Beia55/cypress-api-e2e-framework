import { URL, METHODS } from '../resources'
import {
  findAvatar,
  shouldHavePropertyWithValue,
  shouldHavePropertiesWithValue,
  shouldHaveProperty,
} from '../helpers'

export class Routes {
  urlPointer
  constructor(urlPointer) {
    this.urlPointer = urlPointer
  }

  validateHeader({ params = undefined, method = METHODS.GET, id }) {
    const idParam = id ? `/${id}` : ''
    const avatar = findAvatar(this.urlPointer, method)
    cy.request(method, URL + this.urlPointer + idParam, params).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      shouldHavePropertyWithValue(
        resp.headers,
        'content-type',
        'application/json; charset=utf-8'
      )
    })
  }

  shouldHaveStatus({ status = 200, method = METHODS.GET, params, id }) {
    const idParam = id ? `/${id}` : ''
    const avatar = findAvatar(this.urlPointer, method)
    cy.request({
      method: method,
      url: URL + this.urlPointer + idParam,
      failOnStatusCode: false,
      body: params,
    }).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.status).to.eq(status)
    })
  }

  shouldPostSuccesfully(params) {
    const avatar = findAvatar(this.urlPointer, METHODS.POST)
    cy.request(METHODS.POST, URL + this.urlPointer, params).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.status).to.eq(201)
    })
  }

  shouldDeleteSuccesfully(id) {
    const avatar = findAvatar(this.urlPointer, METHODS.DELETE)
    cy.request(METHODS.DELETE, URL + this.urlPointer + '/' + id).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.status).to.eq(200)
    })
  }

  shouldPutSuccesfully(params) {
    const avatar = findAvatar(this.urlPointer, METHODS.PUT)
    cy.request(METHODS.PUT, URL + this.urlPointer + '/' + params.id, params).as(
      avatar
    )
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.status).to.eq(200)
      shouldHavePropertiesWithValue(resp.body, Object.entries(params))
    })
  }

  shouldPatchSuccesfully(params) {
    const avatar = findAvatar(this.urlPointer, METHODS.PATCH)
    cy.request(
      METHODS.PATCH,
      URL + this.urlPointer + '/' + params.id,
      params
    ).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.status).to.eq(200)
      shouldHavePropertiesWithValue(resp.body, Object.entries(params))
    })
  }

  shouldIncludePropertyForGetById({ id, params, property }) {
    const avatar = findAvatar(this.urlPointer, METHODS.GET)
    cy.request(METHODS.GET, URL + this.urlPointer + '/' + id, params).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      shouldHaveProperty(resp.body, property)
    })
  }

  responseLengthForGetAllNot0() {
    const avatar = findAvatar(this.urlPointer, METHODS.GET)
    cy.request(METHODS.GET, URL + this.urlPointer).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.body.length).to.be.greaterThan(0)
    })
  }

  responseShouldHaveLength(length) {
    const avatar = findAvatar(this.urlPointer, METHODS.GET)
    cy.request(METHODS.GET, URL + this.urlPointer).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.body.length).to.eq(length)
    })
  }

  responseForGetByIdNotNull(id) {
    const avatar = findAvatar(this.urlPointer, METHODS.GET)
    cy.request(METHODS.GET, URL + this.urlPointer + '/' + id).as(avatar)
    cy.get(`@${avatar}`).then(resp => {
      expect(resp.body).not.to.eq({} || null || undefined)
    })
  }
}
