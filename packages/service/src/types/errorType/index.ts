export enum ErrorType {
  ACCESS_TOKEN_EXPIRED = 'ACCESS_TOKEN_EXPIRED',
  ACCESS_TOKEN_NOT_PROVIDED = 'ACCESS_TOKEN_NOT_PROVIDED',
  DATABASE_ERROR_OCCURRED = 'DATABASE_ERROR_OCCURRED',
  GENERIC = 'GENERIC',
  FAILED_DB_REQUEST = 'FAILED_DB_REQUEST',
  FAILED_LOGIN = 'FAILED_LOGIN',
  FAILED_LOGIN_PASSWORD_MISMATCH = 'FAILED_LOGIN:PASSWORD_MISMATCH',
  FAILED_LOGIN_USER_DELETED = 'FAILED_LOGIN:USER_DELETED',
  FAILED_LOGIN_USER_NOT_FOUND = 'FAILED_LOGIN:USER_NOT_FOUND',
  FAILED_TO_DECRYPT_REFRESH_TOKEN = 'FAILED_TO_DECRYPT_REFRESH_TOKEN',
  FAILED_TO_DELETE_USER = 'FAILED_TO_DELETE_USER',
  FAILED_TO_REFRESH_ACCESS_TOKEN = 'FAILED_TO_REFRESH_ACCESS_TOKEN',
  FAILED_TO_REGISTER_USER = 'FAILED_TO_REGISTER_USER',
  FAILED_TO_REGISTER_USER_ALREADY_EXISTS = 'FAILED_TO_REGISTER_USER:ALREADY_EXISTS',
  FAILED_TO_RETRIEVE_SELF = 'FAILED_TO_RETRIEVE_SELF',
  FAILED_TO_RETRIEVE_SELF_USER_NOT_FOUND = 'FAILED_TO_RETRIEVE_SELF:USER_NOT_FOUND',
  FAILED_TO_REVOKE_USER_REFRESH_TOKENS = 'FAILED_TO_REVOKE_USER_REFRESH_TOKENS',
  REFRESH_TOKEN_COOKIE_NOT_FOUND = 'REFRESH_TOKEN_COOKIE_NOT_FOUND',
  REFRESH_TOKEN_VERSION_MISMATCH = 'REFRESH_TOKEN_VERSION_MISMATCH',
  SELF_DELETE = 'SELF_DELETE',
  USER_DELETED = 'USER_DELETED',
}
