import { getLocalStorageItem } from '../../library/storage/storage';

const LOCAL_STORAGE_APP_THEME_NAME = 'appTheme';

export const getAppTheme = () => {
  const appTheme = getLocalStorageItem(LOCAL_STORAGE_APP_THEME_NAME);
  const enableThemeNameArr = ['default', 'bright'];

  if (~enableThemeNameArr.includes(appTheme)) {
    return 'default';
  }

  return appTheme ?? 'default';
};
