import { sanitize } from 'isomorphic-dompurify';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './page.module.css';

const Page = ({
	page,
	next,
	previous,
}: {
	page: Queries.WpPageEdge['node'];
	next: Queries.WpPageEdge['next'];
	previous: Queries.WpPageEdge['previous'];
}) => {
	const title = page?.title as string;
	const featuredImage =
		page?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData;
	const altText = (page?.featuredImage?.node?.altText as string) || title;

	return (
		<article className={styles.container}>
			<h1 className={`${styles.mainTitle} font-extrabold mb-10`}>
				{page?.title}
			</h1>
			{page?.date ? (
				<p className={`${styles.date} text-gray-600 leading-8`}>
					{new Date(page.date).toDateString()}
				</p>
			) : null}
			<Link className={styles.link} to="/pages">
				Pages &rarr;
			</Link>
			<div className={styles.content}>
				{featuredImage ? (
					<div>
						<GatsbyImage
							className="rounded-lg"
							priority
							image={featuredImage}
							layout="fill"
							objectFit="cover"
							alt={altText}
						/>
					</div>
				) : null}
			</div>
			{page?.content ? (
				<div
					className={styles.paragraphContent}
					dangerouslySetInnerHTML={{ __html: sanitize(page.content) }}
				/>
			) : (
				<p>Sorry, no page data was found at this route.</p>
			)}
			<hr className="my-10 mx-0 opacity-30 w-full" />
			<nav className="flex flex-wrap px-6">
				{previous ? (
					<Link className={styles.next} to={`/pages${String(previous?.uri)}`}>
						← {previous.title}
					</Link>
				) : null}
				{next ? (
					<Link className={styles.prev} to={`/pages${String(next?.uri)}`}>
						{next.title} →
					</Link>
				) : null}
			</nav>
		</article>
	);
};

export default Page;
