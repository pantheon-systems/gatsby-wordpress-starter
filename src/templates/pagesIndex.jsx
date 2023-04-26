import React from 'react'
import Layout from '../components/layout'
import { PageGrid } from '../components/grid'
import Paginator from '../components/paginator'
import Seo from '../components/seo'

const PageIndexTemplate = ({
	pageContext: { itemsPerPage, routing, pages },
	location,
}) => {
	const RenderCurrentItems = ({ currentItems }) => {
		return <PageGrid data={currentItems} contentType="pages" />
	}

	return (
		<Layout>
			<header className="prose text-2xl mx-auto mt-20">
				<h1 className="text-center mx-auto">Pages</h1>
			</header>
			<div className="max-w-screen-lg mx-auto">
				<section>
					<Paginator
						data={pages}
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

export default PageIndexTemplate

export function Head() {
	return <Seo title="All pages" />
}
