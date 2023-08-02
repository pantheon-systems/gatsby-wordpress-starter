import { graphql, Link, useStaticQuery } from 'gatsby';
import * as styles from './footer.module.css';

const Footer = () => {
	const menuQuery = useStaticQuery<Queries.MenuQueryQuery>(graphql`
		query MenuQuery {
			wpMenu(name: { eq: "Example Menu" }) {
				id
				menuItems {
					nodes {
						id
						path
						label
					}
				}
			}
		}
	`);
	const nodes = menuQuery?.wpMenu?.menuItems?.nodes
		? menuQuery.wpMenu.menuItems.nodes
		: [];

	const FooterMenu = () => (
		<nav className={`${styles.footerNav} flex flex-col mx-auto`}>
			<ul className="mt-4">
				{nodes.map(({ id, label, path }) => {
					return (
						<li key={id} className="text-blue-300 list-disc ml-3">
							<Link
								className="text-blue-300 no-underline"
								to={`/posts${path || ''}`}
							>
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);

	return (
		<footer className="bg-black flex flex-col justify-self-end mt-12">
			<FooterMenu />
			<div className="text-white my-4 mx-auto p-2">
				<span className={styles.footerCopyLinks}>
					© {new Date().getFullYear()} Built with{' '}
					<a className="underline" href="https://www.gatsbyjs.com">
						Gatsby
					</a>{' '}
					and{' '}
					<a className="underline" href="https://wordpress.org/">
						WordPress
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
