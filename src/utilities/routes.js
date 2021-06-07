export const notRequiredAuthPaths = [
  '/',
  '/forgot-password',
  '/reset-password/:token'
]

export const redirectPathIfRequireAuthFails = '/'

export const redirectPathIfNotRequiredAuthFails = [
  {
    path: '/dashboard',
    userTypes: ['admin']
  },
  {
    path: '/book-event',
    userTypes: ['user']
  }
]
