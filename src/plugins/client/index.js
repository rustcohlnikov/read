import axios from 'axios'

//TODO: add config
const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default client