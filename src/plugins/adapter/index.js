const normalizePosts = (posts) => {
	return posts.map(post => ({
		id: post.sys.id,
		title: post.fields.title,
		body: post.fields.body,
		createdAt: post.sys.createdAt,
		updatedAt: post.sys.updatedAt,
		author: post.fields.author,
		cover: post.fields.image
	}))
}

export {
	normalizePosts
}