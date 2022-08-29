import React from "react";

// icons
import { HiUsers } from "react-icons/hi";
import {
	MdMovieCreation,
	MdOutlineVideoCameraFront,
	MdVideoLibrary,
} from "react-icons/md";

// dummy import - replace it with database api data
import { miniInfo } from "../../heplperFuncs/tempConstants";
// components import
import BarChart from "../../components/admin-panel/dashboard/barChart";
import MiniInfoSect from "../../components/admin-panel/dashboard/MiniInfoSect";
import Table from "../../components/admin-panel/generals/Table";

function Dashboard() {
	const miniInfoIcons = [
		{ icon: <MdMovieCreation /> },
		{ icon: <MdOutlineVideoCameraFront /> },
		{ icon: <MdVideoLibrary /> },
		{ icon: <HiUsers /> },
	];
	/*
	header - page name
	-4 linked info - movies, series, episodes, users
	- bar chart, movies view, users, episodes view, map chart, robots , browsers, 
	*/
	return (
		<div className="bg-color-dark text-color-light m-5 ">
			<header className="h-8 flex items-center p-3">
				<h2 className="text-xl text-color-light tracking-wider font-pop">
					Dashboard
				</h2>
			</header>
			<div className="border-color-light overflow-hidden">
				{/* miniInfo sect */}
				<div className="flex flex-wrap lg:mx-auto w-[100%] mx-auto space-y-2 semiTab:space-y-0">
					{miniInfo.map(({ dataFor, total }, index) => (
						<MiniInfoSect
							key={index}
							icon={miniInfoIcons[index]["icon"]}
							link={`/admin-panel/${dataFor}`}
							sectionName={dataFor}
							number={total}
						/>
					))}
				</div>
				{/* charts and tables */}
				<div className="lg:flex justify-around">
					{/* bar chart */}
					<div className="h-[calc(60vh+5rem)] semiTab:h-[25rem] w-screen md:w-[90%] md:mx-auto lg:mx-0 lg:w-[60%] my-4  overflow-x-scroll-auto px-2 xs:px-4">
						<div className=" h-[4.5rem] mb-2">
							<h3 className="text-3xl">Daily Visits</h3>
							<p>Unique &amp; Non-Unique Visits</p>
						</div>
						<div className="h-[calc(100%-5rem)] w-[100%]">
							<BarChart />
						</div>
					</div>
					<div className="h-80 w-screen md:w-[90%] md:mx-auto lg:mx-0 lg:w-[30%] my-4 border-[1px]">
						<Table
							headers={["items", "views"]}
							tableData={[
								[
									{
										type: "link",
										main: {
											name: "loki",
											link: "/admin-panel/series/loki",
											category: "series",
										},
									},
									{ type: "string", main: "1050" },
								],
								[
									{
										type: "link",
										main: {
											name: "black widow",
											link: "/admin-panel/series/black-widow",
											category: "movie",
										},
									},
									{ type: "string", main: "3500" },
								],
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
