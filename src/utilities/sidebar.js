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
    userTypes: ['admin', 'user'],
    authRequire: false
  },
  {
    endPoint: '/book-event',
    addInSideBar: true,
    title: 'Book Event',
    userTypes: ['user'],
    authRequire: true
  },
  {
    endPoint: '/registered-users',
    addInSideBar: true,
    title: 'Registered User',
    userTypes: ['admin'],
    authRequire: true
  }
]
