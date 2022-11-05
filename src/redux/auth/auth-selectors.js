export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const selectAuthError = state => state.auth.error;
export const selectEmail = state => state.auth.user.email;
