import type { User } from "./User"

interface AuthResult {
  user: User
  token: string
}

interface AuthProvider {
  // Authentication methods
  signIn(): Promise< AuthResult >
  signOut(): Promise< void >
  refreshToken(): Promise< string | null >
  // User management
  getCurrentUser(): Promise< User | null >
  // Provider info
  getProviderId(): string
  // Initialization and cleanup
  initialize(): Promise< void >
  cleanup(): void
}

export type { AuthResult, AuthProvider }