import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import CustomLink from "../common/CustomLink";
import FilterSect from "./FilterSect";

// helper functions
import IssueFormSect from "./IssueFormSect";
import Nav from "./Nav";
import SearchSect from "./SearchSect";
import User from "./User";

// img

function Header() {
	// not permanent states
	const [cars, setCars] = useState([]);
	const [error, setError] = useState("");

	// api call funcs
	const handleKeyDown = async (e) => {
		const name = e.target.value;
		if (!name) {
			setCars([]);
		}
		try {
			const { data } = await axios.post(
				"http://localhost:4000/rest-api/cars/search-car",
				{
					name,
				}
			);
			setError("");
			setCars(data.cars);
		} catch (err) {
			if (err) {
				setCars([]);
				setError(err.response.data.msg);
			}
			console.log();
		}
	};

	/*
	1st div ->  logo, userIcon, menu/ham
	2nd div -> search, feedback icon, filter icon, buy premium button
	*/

	return (
		<header className="bg-color-green text-color-dark w-full h-32 md:h-20 lg:h-32 xl:h-20 flex flex-wrap xl:justify-around xl:items-center z-40 relative ">
			{/* logo, navigation menu and user */}
			<div className="flex justify-around w-full md:w-2/4 lg:w-full xl:w-3/4 h-2/4 md:h-full lg:h-2/4 items-center">
				{/* logo */}
				<CustomLink
					linkTo="/"
					linkClass="w-[25%] xs:ml-[2.5%] md:w-[200px] h-14 xl:h-14 relative "
					linkFront={
						<Image
							src="/logo.png"
							alt="Logo of Next Movie website"
							layout="fill"
							objectFit="contain"
							objectPosition="center center"
							priority="true"
						/>
					}
				/>
				<div className="ml-auto lg:ml-0 lg:w-full xl:ml-0 xl:w-full flex items-center">
					{/* navigation menu */}
					<Nav />

					{/* ham and user */}
					<User />
				</div>
			</div>

			{/* issue, filter and search section */}
			<div className="w-full md:w-2/4 lg:w-full xl:w-1/4 h-2/4 md:h-full lg:h-2/4 xl:h-full flex items-center justify-around px-2 border-t-2 md:border-t-0 lg:border-t-2 xl:border-t-0 ">
				{/* issue and filter section */}
				<div className="flex w-1/4 xs:ml-[3.5%] lg:w-2/3 xl:w-1/4 space-x-2 lg:space-x-6 xl:space-x-2 xl:h-full px-2 text-3xl items-center lg:ml-[4%] xl:ml-0 ">
					<IssueFormSect />

					<FilterSect />
				</div>

				{/* search section */}
				<SearchSect />
			</div>
		</header>
	);
}

export default Header;
