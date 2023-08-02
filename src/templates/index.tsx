import { withPrefix } from 'gatsby';
import { PostGrid } from '../components/grid';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './index.module.css';

const PageHeader = () => (
	<div className={styles.header}>
		<h1 className={`${styles.headerTitle} font-extrabold`}>
			Welcome to{' '}
			<a
				className="text-purple-600 font-medium no-underline"
				href="https://www.gatsbyjs.com/"
			>
				Gatsby!
			</a>
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
);

const Index = ({
	pageContext: { posts },
}: {
	pageContext: { posts: Queries.WpPostEdge[] };
}) => {
	return (
		<Layout isHomePage>
			<PageHeader />
			<section>
				<PostGrid
					data={posts.slice(0, 12).map(({ node }) => node)}
					FallbackComponent={() => <span>🏜 Posts not found</span>}
				/>
			</section>
		</Layout>
	);
};

export default Index;

export function Head() {
	return <Seo title="All posts" />;
}
