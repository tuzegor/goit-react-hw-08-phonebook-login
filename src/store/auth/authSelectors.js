const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
};
export const getToken = state => state.auth.token;
