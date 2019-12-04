const value = '';
const key = '';

if ('localStorage' in window) {

  // SET into LocalStorage
  localStorage.setItem(key, value);

  // GET to localStorage
  const storageData = localStorage.getItem(key);

}