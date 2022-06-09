import axios from 'axios'

//this variable for comunication to server via RESTful API
const http = (token = null) => {
  const headers = token && {
    authorization: `Bearer ${token}`
  }
  const URL = process.env.NODE_ENV === 'development'
            ? process.env.VUE_APP_BASE_URL : ``;

  return axios.create({
    baseURL: URL,
    headers
  })
}

export default http
