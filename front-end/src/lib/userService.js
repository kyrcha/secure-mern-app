import decode from 'jwt-decode';
import jwtService from './jwtService';
import apiService from './apiService';

const userService = {

  // authInfo: {
  //   isAuthenticated: !!jwtService.getToken('jwtToken'),
  //   user: {},
  // },

  signupUser(user) {
    return apiService.post('signup', user);
  },

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  },

  isAuthenticated() {
    // console.log(`The user is ${this.authInfo.isAuthenticated} authenticated`);
    // return this.authInfo.isAuthenticated;
    // Checks if there is a saved token and it's still valid
    const token = jwtService.getToken(); // GEtting token from localstorage
    const result = (!!token && token !== 'undefined') && !this.isTokenExpired(token); // handwaiving here
    return result;
  },

  // loadUser() {
  //   return new Promise((resolve, reject) => {
  //     apiService.get('users/whoami')
  //       .then((user) => {
  //         // console.log(user);
  //         // this.setAuth(user);
  //         // jwtService.saveToken(user.jwt);
  //         this.setAuth(user);
  //         return resolve(user);
  //       }).catch(err => reject(err));
  //   });
  // },

  // revokeGithub() {
  //   return new Promise((resolve, reject) => {
  //     apiService.delete('users/revoke')
  //       .then((message) => {
  //         console.log(message);
  //         return resolve('success');
  //       }).catch(err => reject(err));
  //   });
  // },

  // populate() {
  //   return new Promise((resolve, reject) => {
  //     // If JWT detected, attempt to get & store user's info
  //     if (jwtService.getToken()) {
  //       apiService.get('users/whoami')
  //         .then((user) => {
  //           // console.log(user);
  //           // this.setAuth(user);
  //           // jwtService.saveToken(user.jwt);
  //           this.setAuth(user);
  //           return resolve(this.getCurrentUser());
  //         }).catch((err) => {
  //           // console.error(err);
  //           this.purgeAuth();
  //           return reject(this.getCurrentUser());
  //         });
  //     } else {
  //       // Remove any potential remnants of previous auth states
  //       this.purgeAuth();
  //       return this.getCurrentUser();
  //     }
  //     return this.getCurrentUser();
  //   });
  // },

  // setAuth(user) {
  //   // Save JWT sent from server in localstorage
  //   jwtService.saveToken(user.jwt);
  //   // Set current user data into observable
  //   // this.authInfo = {
  //   //   isAuthenticated: true,
  //   //   user,
  //   // };
  // },

  // purgeAuth() {
  //   // Remove JWT from localstorage
  //   jwtService.destroyToken();
  //   // this.authInfo = {
  //   //   isAuthenticated: false,
  //   //   user: {},
  //   // };
  // },

  // attemptAuth() {
  //   return apiService.get('users/whoami').then((user) => {
  //     console.log(user);
  //     this.setAuth(user);
  //     return user;
  //   }).catch((err) => {
  //     console.error(err);
  //     return {};
  //   });
  // },

  // getCurrentUser() {
  //   return decode(jwtService.getToken());
  // },
};

export default userService;
