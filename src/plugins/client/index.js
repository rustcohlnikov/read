import axios from 'axios'

const client = axios.create({
	baseURL: 'http://localhost:1337/',
	timeout: 1000
})

export default {
	getPosts() {
		return new Promise((resolve, reject) => {
			client.get('/post')
				.then((response) => {
					console.log(response.data)
					resolve(response.data)
				})
				.catch((error) => {
					reject(error)
					console.log(error)
				})
		})
	}
}