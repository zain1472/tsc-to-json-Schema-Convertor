export interface ForgotPassword {
  email: string
}

export interface UpdateUserPassword {
  token: string
  email: string
  password: string
}
