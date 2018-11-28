export function users() {
  return new Promise(function(resolve, reject) {
    axios.get('/api/sys/users').then((response) => {
      resolve(response.data)
    }).catch((err) => {
      reject(err)
    })
  });
}
