function createLoginTracker(username, password) {

  const userInfo = {
    username: username,
    password: password
  }
  // let username = userInfo.username;
  // let password = userInfo.password;

  let attemptCount = 0;

  function attemptLogin(passwordAttempt) {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      attemptCount = 0; // Reset the attempt count on successful login
      return "Login successful";
    } 
    if (passwordAttempt !== userInfo.password) {
      attemptCount ++;
      return `Attempt ${attemptCount}: Login failed`;
    }
  }

  return attemptLogin;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
}; 