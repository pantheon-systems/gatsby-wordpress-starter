import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './404.module.css';
const NotFoundPage = () => {
	return (
		<Layout>
			<div className="flex max-w-screen-sm">
				<span className={`${styles.notFound} font-bold mt-8`}>
					404: Could not find the requested page
				</span>
			</div>
		</Layout>
	);
};

export default NotFoundPage;

export function Head() {
	return <Seo title="404" description="Not Found" />;
}
