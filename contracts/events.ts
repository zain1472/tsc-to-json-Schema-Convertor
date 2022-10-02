/**
 * Contract source: https://git.io/JfefG
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

declare module '@ioc:Adonis/Core/Event' {
  /*
  |--------------------------------------------------------------------------
  | Define typed events
  |--------------------------------------------------------------------------
  |
  | You can define types for events inside the following interface and
  | AdonisJS will make sure that all listeners and emit calls adheres
  | to the defined types.
  |
  | For example:
  |
  | interface EventsList {
  |   'new:user': UserModel
  | }
  |
  | Now calling `Event.emit('new:user')` will statically ensure that passed value is
  | an instance of the the UserModel only.
  |
  */
  interface EventsList {
    'customer:customerResetPassword': {
      first_name: string
      token: string
      email: string
    }
    'customer:notifyVendorWhenTokenIsEmpty': {
      first_name: string
      token: string
      email: string
    }
    'adminUser:adminResetPassword': {
      first_name: string
      token: string
      email: string
    }
    'vendor:applicationApproved': {
      first_name: string
      token: string
      email: string
    }
    'user:resetPassword': {
      first_name: string
      token: string
      email: string
    }
    'notification:event': {
      first_name: string
      email: string
    }
  }
}
