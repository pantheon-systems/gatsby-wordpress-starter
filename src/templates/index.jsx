import { Link, withPrefix } from 'gatsby'
import { PostGrid } from '../components/grid'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './index.module.css'

const PageHeader = () => (
	<div className={styles.header}>
		<h1 className={`${styles.headerTitle} font-extrabold`}>
			Welcome to{' '}
			<Link
				className={`${styles.gatsby} text-purple-600 font-medium no-underline`}
				to="https://www.gatsbyjs.com/"
			>
				Gatsby!
			</Link>
		</h1>

		<div className={styles.onPantheon}>
			<span>Decoupled WordPress on </span>
			<img
				src={withPrefix('pantheon.png')}
				alt="Pantheon Logo"
				width={191}
				height={60}
			/>
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
