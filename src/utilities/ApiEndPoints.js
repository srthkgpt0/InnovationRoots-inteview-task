const ApiEndPoints = {
  login: {
    url: '/auth/user',
    method: 'POST'
  },
  signUp: {
    url: '/auth/signup',
    method: 'POST'
  },
  updateUser: {
    url: '/auth/user',
    method: 'PATCH'
  },
  deleteUser: {
    url: '/auth/user',
    method: 'DELETE'
  },
  createEvent: {
    url: '/auth/event',
    method: 'POST'
  },
  getEventList: {
    url: '/auth/event',
    method: 'GET'
  },
  bookEvent: (id) => ({
    url: `/auth/event/${id}`,
    method: 'POST'
  }),
  getRegisteredUserList: {
    url: '/auth/event/registeredUser',
    method: 'GET'
  }
}
export default ApiEndPoints
