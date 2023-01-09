import { Routes } from '../../utils'
import { METHODS, ROUTES } from '../../resources'
import { mockApiData } from '../../fixtures/api'

describe('rest api test for todos endpoints', () => {
  const routes = new Routes(ROUTES.TODOS)

  it('should get inexistent todo response have status 404', () => {
    routes.shouldHaveStatus({ status: 404, id: 201 })
  })

  it('should succesfully put a todo', () => {
    mockApiData(data => {
      routes.shouldPutSuccesfully(data.putTodo)
      routes.validateHeader({
        id: data.putTodo.id,
        method: METHODS.PUT,
        params: data.putTodo,
      })
      routes.responseLengthForGetAllNot0(data.putTodo.id)
    })
  })

  it('should contain property title in get by id response', () => {
    routes.validateHeader({
      id: 2,
    })
    routes.shouldIncludePropertyForGetById({ id: 2, property: 'title' })
  })

  it('should not get by id response be empty', () => {
    routes.validateHeader({
      id: 1,
    })
    routes.responseForGetByIdNotNull(1)
  })
})
