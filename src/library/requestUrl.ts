export const ACCOUNT_URL = {
  login: (oauthType: string) => {
    return `/login/oauth2/code/${oauthType}`;
  },
};
