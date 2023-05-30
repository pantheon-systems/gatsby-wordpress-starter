import Layout from '../components/layout'
import Paginator from '../components/paginator'
import Seo from '../components/seo'
import * as styles from './pagination.module.css'

const PaginationPostsExample = ({
	pageContext: { pagPosts, postsPerPage, routing, breakpoints },
	location,
}) => {
	const RenderCurrentItems = ({ currentItems }) => {
		return currentItems.map(item => {
			return (
				<article
					key={item.title}
					className={`${styles.item} flex flex-col leading-8 mb-10 p-3`}
				>
					<h2 className={`${styles.itemTitle} font-bold mb-2`}>{item.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: item.excerpt }} />
				</article>
			)
		})
	}

	return (
		<Layout>
			<div className={styles.container}>
				<section className={styles.content}>
					<h1 className={`${styles.title} font-extrabold my-10 mx-0`}>
						Pagination example
					</h1>
					<Paginator
						data={pagPosts}
						itemsPerPage={postsPerPage}
						location={location}
						breakpoints={breakpoints}
						routing={routing}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	)
}

export default PaginationPostsExample

export function Head() {
	return <Seo title="Paginated Posts Example" />
}
