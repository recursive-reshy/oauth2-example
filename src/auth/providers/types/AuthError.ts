enum AuthErrorCode {
  NETWORK_ERROR = 'NETWORK_ERROR',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  USER_CANCELLED = 'USER_CANCELLED',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  PROVIDER_ERROR = 'PROVIDER_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

class AuthError extends Error {
  constructor(
    public code: AuthErrorCode,
    message: string,
    public originalError?: Error,
  ) {
    super( message )
    this.name = 'AuthError'
  }
}

export type { AuthErrorCode, AuthError }