import axios from 'axios';

import { getLocalStorageItem, setLocalStorageItem } from './storage/storage';

import type { DotEnvType, AccessTokenType } from '../types';
import type {
  RequestApiType,
  RequestApiWithBodyType,
  RequestApiWithAccessTokenType,
  RequestApiWithBodyAndAccessTokenType,
} from '../types/requestApiType';
import { ACCOUNT_URL } from './apiUrlLib';

export const methodType = {
  POST: 'post',
  PUT: 'put',
  GET: 'get',
  DELETE: 'delete',
};

const BASE_URL: DotEnvType = process.env.REACT_APP_BASE_URL;
export const LOCAL_STORAGE_ACCESS_TOKEN_NAME = 'accessToken';
export const LOCAL_STORAGE_REFRESH_TOKEN_NAME = 'refreshToken';
export const AUTHORIZATION_NAME = 'Authorization';

export const requestApiWithBodyAndAccessToken = async ({
  httpMethod,
  requestUrl,
  body,
  headers,
}: RequestApiWithBodyAndAccessTokenType) => {
  const accessToken: AccessTokenType = getLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);

  try {
    if (accessToken === null) {
      throw new Error(`Try ${httpMethod} request with access token, but there is no access token.`);
    }

    const res = await axios[httpMethod](BASE_URL + requestUrl, body, {
      headers: {
        ...headers,
        [AUTHORIZATION_NAME]: `Bearer ${accessToken}`,
      },
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const requestApiWithBody = async ({
  httpMethod,
  requestUrl,
  body,
  headers,
}: RequestApiWithBodyType) => {
  try {
    const res = await axios[httpMethod](BASE_URL + requestUrl, body, { headers });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const requestApiWithAccessToken = async ({
  httpMethod,
  requestUrl,
  headers,
}: RequestApiWithAccessTokenType) => {
  const accessToken: AccessTokenType = getLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);

  try {
    if (accessToken === null) {
      throw new Error(`Try ${httpMethod} request with access token, but there is no access token.`);
    }

    const res = await axios[httpMethod](BASE_URL + requestUrl, {
      headers: {
        ...headers,
        [AUTHORIZATION_NAME]: `Bearer ${accessToken}`,
      },
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const requestApi = async ({ httpMethod, requestUrl, headers }: RequestApiType) => {
  try {
    const res = await axios[httpMethod](BASE_URL + requestUrl, {
      headers,
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const reissueAccessToken = async () => {
  try {
    const accessToken = getLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);
    const refreshToken = getLocalStorageItem(LOCAL_STORAGE_REFRESH_TOKEN_NAME);

    const httpMethod = methodType.POST;
    const requestUrl = ACCOUNT_URL.reissueAccessToken();

    const res = await axios[httpMethod](BASE_URL + requestUrl, { accessToken, refreshToken }, {});

    setLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME, res.data.token);
  } catch (error) {
    console.log(error);
  }
};
