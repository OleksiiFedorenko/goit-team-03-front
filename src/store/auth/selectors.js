export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectTheme = state => state.auth.user.theme;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectAccessToken = state => state.auth.accessToken;

