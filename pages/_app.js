import AdminLayout from "../components/lauouts/admin-layout";
import FrontLayout from "../components/lauouts/front-layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
	const adminPanel = router.route.startsWith("/admin-panel") ? true : false;
	const getLayout = adminPanel
		? (page) => <AdminLayout>{page}</AdminLayout>
		: (page) => <FrontLayout>{page}</FrontLayout>;

	return <>{getLayout(<Component {...pageProps} />, pageProps)}</>;
}

export default MyApp;
