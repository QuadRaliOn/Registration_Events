import axios from 'axios';

const options = {
  baseURL: "http://localhost:3005",
  headers: {
    "Content-Type" : 'application/json'
  }
}

const axiosInstance = axios.create(options)

export {axiosInstance}