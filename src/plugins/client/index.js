import axios from 'axios'

const client = axios.create({
	baseURL: (process.env.NODE_ENV == 'production') && process.env.REACT_APP_API_URL
		? process.env.REACT_APP_API_URL
		: 'https://jsonplaceholder.typicode.com/'
})

export default client