import { sanitize } from 'isomorphic-dompurify';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './post.module.css';

const Post = ({
	post,
	next,
	previous,
}: {
	post: Queries.WpPostEdge['node'];
	next: Queries.WpPostEdge['next'];
	previous: Queries.WpPostEdge['previous'];
}) => {
	const title = post?.title as string;
	const featuredImage =
		post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData;
	const altText = (post?.featuredImage?.node?.altText as string) || title;

	return (
		<article className={styles.container}>
			<h1 className={styles.mainTitle}>{post?.title}</h1>
			{post?.date ? (
				<p className={`${styles.date} text-gray-600 leading-8`}>
					{new Date(post.date).toDateString()}
				</p>
			) : null}
			<Link className={styles.link} to="/posts">
				Posts &rarr;
			</Link>
			<div className={styles.content}>
				{featuredImage ? (
					<div className={`${styles.img} rounded-lg mx-auto w-full`}>
						<GatsbyImage
							className={`${styles.img} rounded-lg mx-auto w-full`}
							image={featuredImage}
							layout="fit"
							objectFit="cover"
							alt={altText}
						/>
					</div>
				) : null}
			</div>

			{post?.content ? (
				<div
					className={styles.paragraphContent}
					dangerouslySetInnerHTML={{ __html: sanitize(post.content) }}
				/>
			) : (
				<p>Sorry, no post data was found at this route.</p>
			)}
			<hr className="my-10 mx-0 opacity-30 w-full" />
			<nav className={`${styles.nav} flex flex-wrap`}>
				{previous ? (
					<Link className={styles.prev} to={`/posts${String(previous?.uri)}`}>
						← {previous.title}
					</Link>
				) : null}
				{next ? (
					<Link className={styles.next} to={`/posts${String(next?.uri)}`}>
						{next.title} →
					</Link>
				) : null}
			</nav>
		</article>
	);
};

export default Post;
