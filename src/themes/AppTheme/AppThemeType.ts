type getHeaderThemeTargetType =
  | 'background'
  | 'sub-nav__background'
  | 'auth-button__color'
  | 'auth-button__color--hover';
type getDropDownThemeTargetType = 'background' | 'background--hover';

export type GetThemeType = {
  getBackgroundTheme: () => string;
  getColorTheme: () => string;
  getHeaderTheme: (target: getHeaderThemeTargetType) => string;
  getDropDownTheme: (target: getDropDownThemeTargetType) => string;
};
