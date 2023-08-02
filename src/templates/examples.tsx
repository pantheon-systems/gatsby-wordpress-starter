import { Link } from 'gatsby';
import Layout from '../components/layout';
import * as styles from './examples.module.css';

const ExamplesPageTemplate = ({
	pageContext: { routing },
}: {
	pageContext: { routing: boolean };
}) => {
	return (
		<Layout>
			<div className="my-10 mx-auto max-w-screen-md">
				<h1 className={`${styles.containerTitle} font-extrabold mb-10`}>
					Examples
				</h1>
				<Link to="/" className={`${styles.link} text-black underline`}>
					<span>Home &rarr;</span>
				</Link>
				<div className={`${styles.content} font-normal leading-8 mx-auto`}>
					<p>
						This page outlines a growing list of common use cases that can be
						used as a reference when building using this starter kit. If you
						don&apos;t need them for your site, feel free to delete the
						`pages/examples` directory in your codebase.
					</p>
					<ul className="pl-6">
						<li className="list-disc my-4 mx-0 pl-3">
							<Link
								to={`/examples/pagination${routing ? '/1' : ''}`}
								className={`${styles.link} text-black underline`}
							>
								Pagination
							</Link>{' '}
							- a paginated list with a large dataset.
						</li>
						<li className="list-disc my-4 mx-0 pl-3">
							<Link
								to={`/examples/auth-api`}
								className={`${styles.link} text-black underline`}
							>
								API Authorization
							</Link>{' '}
							- confirms that Gatsby is able to make authenticated requests to
							WordPress&apos; API.
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default ExamplesPageTemplate;
