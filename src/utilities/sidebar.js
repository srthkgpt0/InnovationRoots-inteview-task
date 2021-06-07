export const item = [
  {
    endPoint: '/dashboard',
    title: 'Create Event',
    addInSideBar: true,
    userTypes: ['admin'],
    authRequire: true
  },
  {
    endPoint: '/',
    addInSideBar: false,
    title: 'Login',
    userTypes: ['admin'],
    authRequire: false
  },
  {
    endPoint: '/book-event',
    addInSideBar: true,
    title: 'Book Event',
    userTypes: ['user'],
    authRequire: true
  }
]
