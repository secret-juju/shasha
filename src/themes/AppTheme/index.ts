import { getAppTheme } from '../../utils/themeUtils';

import type { GetThemeType } from './AppThemeType';

export const BackgroundTheme = {
  default: '#FFFFFF',
  bright: '#FFFFFF',
};

export const ColorTheme = {
  default: '#2F2F2F',
  bright: '#2F2F2F',
};

export const DropDownTheme = {
  background: {
    default: '#f6f6f646',
  },
  'background--hover': {
    default: '#e0e0e0e0',
  },
};

export const HeaderTheme = {
  background: {
    default: '#8CFA8B',
    bright: '#8CFA8B',
  },
  'sub-nav__background': {
    default: '#ffffff',
    bright: '#ffffff',
  },
  'auth-button__color': {
    default: '#4b4b4b',
    bright: '#4b4b4b',
  },
  'auth-button__color--hover': {
    default: '#000000',
    bright: '#000000',
  },
};

export const LoginTheme = {
  background: {
    default: '#ffffff',
    bright: '#ffffff',
  },
  title__color: {
    default: '#2f2f2f',
    bright: '#2f2f2f',
  },
};

export const getTheme: GetThemeType = {
  getBackgroundTheme: () => BackgroundTheme[getAppTheme()],
  getColorTheme: () => ColorTheme[getAppTheme()],
  getHeaderTheme: target => HeaderTheme[target][getAppTheme()],
  getDropDownTheme: target => DropDownTheme[target][getAppTheme()],
};
