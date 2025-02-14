export const ErrorStatus = {
  INTERNAL_SERVER_ERROR:
    'There was a problem with the server. \nPlease try again later.',
  INVALID_REQUEST: 'Invalid request.',
  UNAUTHORIZED: 'Please log in to continue.',
  SESSION_EXPIRED: 'Your login session has expired.',
  TOO_MANY_REQUEST: 'Too many requests. \nPlease try again later.',
} as const

export const getErrorMessage = (key: keyof typeof ErrorStatus): string => {
  return ErrorStatus[key]
}
