import React from 'react'
import Layout from '../components/layout'
import { PostGrid } from '../components/grid'
import Paginator from '../components/paginator'
import Seo from '../components/seo'

const PostIndexTemplate = ({
	pageContext: { posts, routing, itemsPerPage },
	location,
}) => {
	const RenderCurrentItems = ({ currentItems }) => {
		return <PostGrid data={currentItems} contentType="posts" />
	}

	return (
		<Layout>
			<header className="prose text-2xl mx-auto mt-20">
				<h1 className="text-center mx-auto">Posts</h1>
			</header>
			<div className="max-w-screen-lg mx-auto">
				<section>
					<Paginator
						data={posts}
						itemsPerPage={itemsPerPage}
						location={location}
						routing={routing}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	)
}

export default PostIndexTemplate

export function Head() {
	return <Seo title="All posts" />
}
