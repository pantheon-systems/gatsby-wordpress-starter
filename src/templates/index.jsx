import React from 'react'
import { withPrefix } from 'gatsby'
import Layout from '../components/layout'
import { PostGrid } from '../components/grid'
import Seo from '../components/seo'

const PageHeader = () => (
	<div className="prose sm:prose-xl mt-20 flex flex-col mx-auto max-w-fit">
		<h1 className="prose text-4xl text-center h-full">
			Welcome to{' '}
			<a
				className="text-purple-600 no-underline hover:underline"
				href="https://www.gatsbyjs.com/"
			>
				Gatsby!
			</a>
		</h1>

		<div className="text-2xl">
			<div className="not-prose bg-black text-white rounded flex items-center justify-center p-4">
				<span>Decoupled WordPress on{' '}</span>
				<img
					src={withPrefix('pantheon.png')}
					alt="Pantheon Logo"
					width={191}
					height={60}
				/>
		</div>
		</div>
	</div>
)

const Index = ({ pageContext: { posts } }) => {
	return (
		<Layout isHomePage>
			<PageHeader />
			<section>
				<PostGrid data={posts.slice(0, 12)} contentType="posts" />
			</section>
		</Layout>
	)
}

export default Index

export function Head() {
	return <Seo title="All posts" />
}
