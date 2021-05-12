import { clearLocalStorage, getLocalStorageItem } from '../../library/storage/storage';
import { LOCAL_STORAGE_ACCESS_TOKEN_NAME } from '../../library/requestApi';

export const checkAccessTokenEffective = async () => {
  const accessToken = getLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);

  if (accessToken) {
    return false;
  }

  // accessToken check or refreshToken check
};

export const checkIsLogin = async () => {
  try {
    const accessToken = getLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);

    if (!accessToken) {
      throw Error('There is no access token.');
    }

    return true;
  } catch (error) {
    return false;
  }
};

export const logoutAndRefresh = () => {
  clearLocalStorage();
  alert('로그아웃 되었습니다.');
  console.log(location);
  location.href = '/login';
};
