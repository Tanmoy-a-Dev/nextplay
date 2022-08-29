import Head from "next/head";
import HomeFirstAd from "../advertisements/home-first-ad";
import Footer from "../footer";
import Header from "../header";
export default function FrontLayout({ children }) {
	const adBeforeFooter = true; // temp state
	return (
		<>
			<Head>
				<title>Next Stream- V1</title>
				<meta
					name="description"
					content="movies series new episodes watch online movies"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>{children}</main>

			{adBeforeFooter && <HomeFirstAd />}
			<Footer />
		</>
	);
}
