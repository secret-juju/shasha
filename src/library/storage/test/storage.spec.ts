import {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
  clearLocalStorage,
} from '../storage';

describe('library/storage', () => {
  it('should have item in localStorage', () => {
    setLocalStorageItem('temp', 'TEMP');

    expect(getLocalStorageItem('temp')).toBe('TEMP');

    clearLocalStorage();
  });

  it.each`
    key              | value           | index
    ${'temp'}        | ${'TEMP'}       | ${0}
    ${'accessToken'} | ${'tokenValue'} | ${1}
  `('should save item in localStorage', ({ key, value, index }) => {
    setLocalStorageItem(key, value);

    expect(getLocalStorageItem(key)).toBe(value);
    expect(Object.keys(localStorage.__STORE__).length).toBe(index + 1);
  });

  it.each`
    key
    ${'temp'}
    ${'accessToken'}
  `('should remove item in localStorage', ({ key }) => {
    setLocalStorageItem('temp', 'TEMP');
    setLocalStorageItem('accessToken', 'tokenValue');

    expect(Object.keys(localStorage.__STORE__).length).toBe(2);

    removeLocalStorageItem(key);

    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  it('clear localStorage and no data', () => {
    clearLocalStorage();

    setLocalStorageItem('temp', 'TEMP');

    expect(Object.keys(localStorage.__STORE__).length).toBe(1);

    clearLocalStorage();

    expect(localStorage.__STORE__).toEqual({});
  });
});
