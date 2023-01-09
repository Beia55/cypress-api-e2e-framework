import { ROUTES } from '../resources'

export const findAvatar = (urlPointer, method) => {
  switch (urlPointer) {
    case ROUTES.ALBUMS:
      return method + 'Album'
      break
    case ROUTES.COMMENTS:
      return method + 'Comment'
      break
    case ROUTES.PHOTOS:
      return method + 'Photo'
      break
    case ROUTES.POSTS:
      return method + 'Post'
      break
    case ROUTES.TODOS:
      return method + 'Todo'
      break
    case ROUTES.USERS:
      return method + 'User'
      break
    default:
      return ''
  }
}
