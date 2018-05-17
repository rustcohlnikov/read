const normalizePosts = (posts) => {
	return posts.map(post => ({
		id: post.sys.id,
		title: post.fields.title,
		body: post.fields.body,
		createdAt: post.fields.createdAt,
		updatedAt: post.fields.updatedAt,
		author: post.fields.author,
		cover: post.fields.image
	}))
}

export {
	normalizePosts
}