import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './grid.module.css'

const GradientPlaceholder = () => <div className={styles.gradientPlaceholder} />

const withGrid = Component => {
	const GridedComponent = ({ data, ...props }) => {
		if (!data || !data.length) {
			return props.contentType ? (
				<h2 className={`${styles.notFound} mt-14 text-center`}>
					No {props.contentType} found 🏜
				</h2>
			) : null
		}

		return (
			<div className={styles.container}>
				{data.map((content, i) => {
					return <Component key={i} content={content} {...props} />
				})}
			</div>
		)
	}

	return GridedComponent
}

const GridItem = ({ href, imgSrc, altText, title }) => {
	return (
		<Link
			to={href}
			className={`${styles.card} rounded-lg cursor-pointer overflow-x-hidden no-underline`}
		>
			<div className="shrink-0 h-40 relative">
				{imgSrc ? (
					<GatsbyImage
						image={imgSrc}
						style={{ height: '100%', width: '100%' }}
						objectFit="fit"
						alt={altText}
					/>
				) : (
					<GradientPlaceholder />
				)}
			</div>
			<h2 className={`${styles.cardTitle} font-semibold my-5 mx-4`}>
				{title} &rarr;
			</h2>
		</Link>
	)
}

const PostGridItem = ({ content: { post } }) => {
	const imgSrc =
		post?.featuredImage?.node.localFile.childImageSharp.gatsbyImageData || null
	const altText = post?.featuredImage?.node.altText || post.title

	return (
		<GridItem
			href={`/posts${post.uri}`}
			imgSrc={imgSrc}
			altText={altText}
			title={post.title}
		/>
	)
}

const PageGridItem = ({ content: { page } }) => {
	const imgSrc =
		page?.featuredImage?.node.localFile.childImageSharp.gatsbyImageData || null
	const altText = page?.featuredImage?.node.altText || page.title

	return (
		<GridItem
			href={`/pages${page.uri}`}
			imgSrc={imgSrc}
			altText={altText}
			title={page.title}
		/>
	)
}

export const PostGrid = withGrid(PostGridItem)
export const PageGrid = withGrid(PageGridItem)
