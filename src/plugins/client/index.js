import axios from 'axios'
import mock from './mock'

const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default client