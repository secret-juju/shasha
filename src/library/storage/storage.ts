import type { ItemKeyType } from './StorageType';

export const getLocalStorageItem = (itemKey: ItemKeyType) => {
  const targetItem = localStorage.getItem(itemKey);

  const parseTargetItem = JSON.parse(targetItem);

  return parseTargetItem;
};

export const setLocalStorageItem = (itemKey: ItemKeyType, itemValue) => {
  const stringfyValue = JSON.stringify(itemValue);

  localStorage.setItem(itemKey, stringfyValue);
};

export const removeLocalStorageItem = (itemKey: ItemKeyType) => {
  localStorage.removeItem(itemKey);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
