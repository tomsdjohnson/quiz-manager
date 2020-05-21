import { v4 as createUuid } from 'uuid';

const AUTH_TOKEN_LOCAL_STORAGE_KEY = 'quiz-auth-token';

export default class TokenRepo {
  getOrCreateToken() {
    const storedToken = getToken();
    return storedToken ? storedToken : createToken();
  }

  refreshToken() {
    localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
    return createToken();
  }
}

const getToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);

  if (token) {
    return {
      value: token,
      isNew: false
    };
  }
};

const createToken = () => {
  const token = createUuid();
  localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token);

  return {
    value: token,
    isNew: true
  };
};
