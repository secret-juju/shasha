import axios from 'axios';

import type { DotEnvType, AccessTokenType } from '../types';
import type {
  RequestApiType,
  RequestApiWithBodyType,
  RequestApiWithAccessTokenType,
  RequestApiWithBodyAndAccessTokenType,
} from '../types/requestApiType';

export const methodType = {
  POST: 'post',
  PUT: 'put',
  GET: 'get',
  DELETE: 'delete',
};

const BASE_URL: DotEnvType = process.env.REACT_APP_BASE_URL;
export const LOCAL_STORAGE_ACCESS_TOKEN_NAME = 'accessToken';
export const LOCAL_STORAGE_REFRESH_TOKEN_NAME = 'refreshToken';
const ACCESS_TOKEN_NAME = 'Bearer Authorization';
export const AuthorizationName = 'Authorization';

export const requestApiWithBodyAndAccessToken = async ({
  httpMethod,
  requestUrl,
  body,
  headers,
}: RequestApiWithBodyAndAccessTokenType) => {
  const accessToken: AccessTokenType = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);

  try {
    if (accessToken === null) {
      throw new Error(`Try ${httpMethod} request with access token, but there is no access token.`);
    }

    const res = await axios[httpMethod](BASE_URL + requestUrl, body, {
      ...headers,
      [ACCESS_TOKEN_NAME]: accessToken,
    });

    return res;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const requestApiWithAccessToken = async ({
  httpMethod,
  requestUrl,
  headers,
}: RequestApiWithAccessTokenType) => {
  const accessToken: AccessTokenType = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);

  try {
    if (accessToken === null) {
      throw new Error(`Try ${httpMethod} request with access token, but there is no access token.`);
    }

    const res = await axios[httpMethod](BASE_URL + requestUrl, {
      ...headers,
      [ACCESS_TOKEN_NAME]: accessToken,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const requestApi = async ({ httpMethod, requestUrl, headers }: RequestApiType) => {
  try {
    const res = await axios[httpMethod](BASE_URL + requestUrl, {
      headers,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
