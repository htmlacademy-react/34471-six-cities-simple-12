export enum AppRoute {
  Main = '/',
  Login = '/login-page',
  Room = '/offer/:id',
  NotFound = '/notfound-page'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
