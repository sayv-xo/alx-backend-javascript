/* eslint-disable import/extensions */
/* eslint-disable quotes */
// eslint-disable-next-line import/extensions
import getResponseFromAPI from './0-promise.js';
import handleResponseFromAPI from "./2-then";
import signUpUser from './4-user-promise.js';
import handleProfileSignup from "./3-all";

handleProfileSignup();

console.log(signUpUser("Bob", "Dylan"));
const promise = Promise.resolve();
handleResponseFromAPI(promise);

const response = getResponseFromAPI();
console.log(response instanceof Promise);
