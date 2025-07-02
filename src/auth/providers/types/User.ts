type AuthProviderType = 'google' | 'facebook' | 'apple'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  displayName: string
  emailVerified: boolean
  provider: AuthProviderType
  providerData?: Record< string, any >
}

export type { User, AuthProviderType }