export interface RegisterFields {
  email: string,
  username: string,
  password: string
}

export interface LoginFields {
  username: string,
  password: string
}

function validateEmail(mail : string) : boolean {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function validatePassword(password: string) : boolean {
  if (password.length >= 5 && password.length < 15) {
    return true;
  }
  return false;
}

function validateUsername(password: string) : boolean {
  if (password.length >= 3 && password.length < 10) {
    return true;
  }
  return false;
}

export function validateLoginFields({ username, password } : LoginFields) : boolean {
  if (validatePassword(password) && validateUsername(username)) {
    return true;
  }
  return false;
}

export function validateRegisterFields({ email, username, password } : RegisterFields) : boolean {
  if (validateEmail(email) && validatePassword(password) && validateUsername(username)) {
    return true;
  }
  return false;
}
