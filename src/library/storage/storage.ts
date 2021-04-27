import type { ItemKeyType } from './StorageType';

export const getLocalStorageItem = (itemKey: ItemKeyType) => {
  const targetItem = localStorage.getItem(itemKey);

  if (typeof targetItem === 'string' && targetItem.split[0] !== `"`) {
    return targetItem;
  }

  const parseTargetItem = JSON.parse(targetItem);

  return parseTargetItem;
};

export const setLocalStorageItem = (itemKey: ItemKeyType, itemValue) => {
  if (typeof itemValue === 'string') {
    localStorage.setItem(itemKey, itemValue);
    return;
  }

  const stringfyValue = JSON.stringify(itemValue);

  localStorage.setItem(itemKey, stringfyValue);
};

export const removeLocalStorageItem = (itemKey: ItemKeyType) => {
  localStorage.removeItem(itemKey);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
