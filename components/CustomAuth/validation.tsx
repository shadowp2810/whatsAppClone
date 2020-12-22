export function validateEmail(email) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return 'Enter a valid email address.';
    } else return null;
  }
  
  export function validatePassword(password) {
    if (
      !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/i.test(
        password,
      )
    ) {
      return 'Password must contain an uppercase letter, a number, a lowercase letter and be at least 8 characters long';
    } else return null;
  }
  
  export function validateUsername(username) {
    if (!/^[a-z0-9_-]{3,16}$/i.test(username)) {
      return 'User name must be 3 to 16 characters long';
    } else return null;
  }
  
  export function validateCode(code) {
    if (!code) {
      return 'Enter a valid code';
    } else return null;
  }

  export function validatePhoneNumber(phone_number) {
    if (!phone_number) {
      return 'Enter a valid Phone Number';
    } else return null;
  }

  export function validateGivenName(given_name) {
    if (!/^[a-zA-Z]{3,30}$/.test(given_name)) {
      return 'Enter a valid Name.';
    } else return null;
  }

  export function validateBirthDate(birthdate) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      return 'Enter a valid Birth Date.';
    } else return null;
  }

