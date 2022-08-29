import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import SearchResultSect from "./SearchResultSect";

function SearchSect() {
	// states
	const [showSection, setShowSection] = useState(true);
	const [error, setError] = useState("");
	const wrapperRef = useRef(null);
	// hooks
	useOutsideAlerter(wrapperRef, setShowSection);
	// temp states
	const movies = [
		{ name: "movie1", year: "2021", author: "sen1" },
		{ name: "movie2", year: "2021", author: "sen2" },
		{ name: "movie3", year: "2021", author: "sen3" },
		{ name: "movie4", year: "2021", author: "sen4" },
		{ name: "movie5", year: "2021", author: "sen5" },
	];
	const series = [
		{ name: "series1", year: "2021", author: "sen1" },
		{ name: "series2", year: "2021", author: "sen2" },
		{ name: "series3", year: "2021", author: "sen3" },
		{ name: "series4", year: "2021", author: "sen4" },
		{ name: "series5", year: "2021", author: "sen5" },
	];

	return (
		<div
			ref={wrapperRef}
			className="w-3/4 lg:w-1/2 xl:w-3/4 px-2 h-full flex items-center text-color-light relative">
			<input
				type="text"
				className="w-3/4 h-9 text-lg bg-transparent border-2 border-color-border rounded-2xl rounded-r-none border-r-0 focus:outline-none pl-2"
				// onKeyUp={(e) => handleKeyDown(e)}
			/>
			<span className="w-1/4 h-9 border-2 border-color-border rounded-tr-2xl rounded-br-2xl border-l-0 flex justify-center items-center text-2xl text-color-dark ">
				<AiOutlineSearch />
			</span>
			{showSection && (
				<SearchResultSect movies={movies} series={series} error={error} />
			)}
		</div>
	);
}

export default SearchSect;
