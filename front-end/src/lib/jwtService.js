const jwtService = {
  getToken() {
    return localStorage.getItem('jwtToken');
  },

  saveToken(token) {
    localStorage.setItem('jwtToken', token);
  },

  destroyToken() {
    localStorage.removeItem('jwtToken');
  },
};

export default jwtService;
