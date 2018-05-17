import { contentful } from '../../config.js'
import { createClient } from 'contentful'

const productionConfig = {
	space: process.env.REACT_APP_SPACE,
	accessToken: process.env.REACT_APP_TOKEN
}

const client = createClient(process.env.NODE_ENV == 'production' ? productionConfig : contentful)

export default client