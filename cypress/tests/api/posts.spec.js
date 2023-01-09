import { Routes } from '../../utils'
import { METHODS, ROUTES } from '../../resources'
import { mockApiData } from '../../fixtures/api'

describe('rest api test for posts endpoints', () => {
  const routes = new Routes(ROUTES.POSTS)

  it('should validate get all posts response', () => {
    routes.validateHeader({})
    routes.shouldHaveStatus({ status: 200 })
    routes.responseShouldHaveLength(100)
  })

  it('should succesfully post a post', () => {
    mockApiData(data => {
      routes.validateHeader({
        params: data.postNewPost,
        method: METHODS.POST,
      })
      routes.shouldPostSuccesfully(data.postNewPost)
    })
  })

  it('should succesfully delete a post', () => {
    routes.validateHeader({ id: 1, method: METHODS.DELETE })
    routes.shouldDeleteSuccesfully('1')
  })

  it('should succesfully put a post', () => {
    mockApiData(data => {
      routes.shouldPutSuccesfully(data.putPost)
      routes.validateHeader({
        id: data.putPost.id,
        method: METHODS.PUT,
        params: data.putPost,
      })
      routes.responseLengthForGetAllNot0(data.putPost.id)
    })
  })
})
