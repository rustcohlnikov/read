import axios from 'axios'
import mock from './mock'

const client = axios.create({
	baseURL: 'http://localhost:1337/'
})

export default client