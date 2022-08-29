import Head from "next/head";
import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import AdminFooter from "../admin-panel/Footer";
import AdminHeader from "../admin-panel/header/AdminHeader";
import Sidebar from "../admin-panel/sidebar";

export default function AdminLayout({ children }) {
	// media query hook
	const isBreakpoint = useMediaQuery(1023);
	// states
	const [isCollapsed, setIsCollapsed] = useState(false);

	useEffect(() => {
		setIsCollapsed(isBreakpoint);
	}, [isBreakpoint]);

	// other functions
	const handleSidenavCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<>
			<Head>
				<title>Next Era | Dashboard</title>
				<meta
					name="description"
					content="movies series new episodes watch online movies"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				{/* <meta name="theme-color" content="#ffffff"></meta> */}
			</Head>
			<div className="flex w-full max-w-7xl mx-auto xl:border-r-[1px] relative">
				<Sidebar
					isCollapsed={isCollapsed}
					collapsedFunc={handleSidenavCollapse}
				/>
				<main className="flex-1 lg:z-10 ">
					<AdminHeader
						collapsedFunc={handleSidenavCollapse}
						isCollapsed={isCollapsed}
					/>
					<div className="h-[calc(100vh)] xl:h-[calc(100vh-8rem)] overflow-y-scroll bg-color-light">
						{children}
					</div>
				</main>
				<AdminFooter />
			</div>
		</>
	);
}
