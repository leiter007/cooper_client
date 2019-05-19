import axios from 'axios'

const apiUrl = 'https://cooper-felix-george.herokuapp.com/api/v1';

const authenticate = async (email, password) => {
  const path = apiUrl + '/auth/sign_in';
  try {
    let response = await axios.post(path, { email: email, password: password })
    await storeAuthCredentials(response)
    sessionStorage.setItem('current_user', JSON.stringify({ id: response.data.data.id }));
    return { authenticated: true }
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors[0] }
  }
};

const authenticateSignUp = async (email, password, passwordConfirmation) => {
  const path = apiUrl + '/auth/';
  try {
    let response = await axios.post(path, { email: email, password: password, password_confirmation: passwordConfirmation })
    await storeAuthCredentials(response)
    sessionStorage.setItem('current_user', JSON.stringify({ id: response.data.data.id }));
    return { authenticated: true }
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors.full_messages[0] }
  }
};

const authenticateSignOut = async (email) => {
  const path = apiUrl + '/auth/sign_out';
  try {
    let response = await axios.delete(path, { email: email})
    await storeAuthCredentials(response)
    sessionStorage.getItem('current_user', JSON.stringify({ id: response.data.data.id }));
    return { authenticated: false}
  } catch (error) {
    return { authenticated: true, message: error.response.data.errors.full_messages[0] }
  }
};

const storeAuthCredentials = ({ data, headers }) => {
  return new Promise((resolve) => {
    const uid = headers['uid'],
      client = headers['client'],
      accessToken = headers['access-token'],
      expiry = headers['expiry'];

    sessionStorage.setItem('credentials', JSON.stringify({
      uid: uid,
      client: client,
      access_token: accessToken,
      expiry: expiry,
      token_type: 'Bearer'
    }));
    resolve(true)
  })
};

export { authenticate, authenticateSignUp, authenticateSignOut, storeAuthCredentials }
