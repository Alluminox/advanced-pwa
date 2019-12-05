const value = {
  name: 'Username',
  email: 'email@email.com'
};
const key = 'localKey';

if ('localStorage' in window) {

  // SET into LocalStorage
  localStorage.setItem(key, value);

  // GET to localStorage
  const storageData = localStorage.getItem(key);

}