import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './post.module.css'

const Post = ({
	post: { title, date, content, featuredImage },
	previous,
	next,
}) => {
	const imageData = {
		gatsbyImage:
			featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData,
		altText: featuredImage?.node?.altText || title,
	}

	return (
		<article className={styles.container}>
			<h1 className={styles.mainTitle}>{title}</h1>
			<p className={`${styles.date} text-gray-600 leading-8`}>
				{new Date(date).toDateString()}
			</p>

			<Link className={styles.link} to="/posts">
				Posts &rarr;
			</Link>
			<div className={styles.content}>
				{imageData.gatsbyImage ? (
					<div className="rounded-lg">
						<GatsbyImage
							className="rounded-lg"
							priority="true"
							image={imageData.gatsbyImage}
							layout="fill"
							objectFit="cover"
							alt={imageData.altText}
						/>
					</div>
				) : null}
			</div>

			{content ? (
				<div
					className={styles.paragraphContent}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			) : (
				<p>Sorry, no page data was found at this route.</p>
			)}
			<hr className="my-10 mx-0 opacity-30 w-full" />
			<nav className={`${styles.nav} flex flex-wrap`}>
				{previous ? (
					<Link className={styles.prev} to={`/posts${previous.uri}`}>
						← {previous.title}
					</Link>
				) : null}
				{next ? (
					<Link className={styles.next} to={`/posts${next.uri}`}>
						{next.title} →
					</Link>
				) : null}
			</nav>
		</article>
	)
}

export default Post
