import VendorOrganization from 'App/Models/VendorOrganization'

declare module '@ioc:Adonis/Core/HttpContext' {
  // eslint-disable-next-line no-unused-vars
  interface HttpContextContract {
    authVendor?: VendorOrganization
  }
}
