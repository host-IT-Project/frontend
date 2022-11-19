export function getItemFromLS(key) {
  return window.localStorage.getItem(key);
}

export function setItemToLS(key, value) {
  window.localStorage.setItem(key, value);
}

export function removeItemFromLS(key) {
  window.localStorage.removeItem(key);
}
