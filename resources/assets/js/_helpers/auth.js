export function login(credentials) {
  return new Promise(function(resolve, reject) {
    axios.post('/api/auth/login', credentials).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      reject("Incorrect Credentials")
    })
  });
}

export function getLocalUser() {
  const userString = localStorage.getItem("user")
  if (!userString) {
    return null;
  }
  return JSON.parse(userString)
}
