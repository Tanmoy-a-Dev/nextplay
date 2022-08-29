import React from "react";
import LinkedButton from "../common/LinkedButton";

function SearchResultSect({ movies = [{}], series = [{}], error = "" }) {
	return (
		<section
			id="elastic-search-section"
			className="absolute bottom-[-12.875rem] left-0 h-52 w-full bg-slate-900 text-white px-5 py-4 overflow-y-scroll overflow-x-hidden border-[1px] rounded-lg scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-slate-900">
			{error && <p>{error}</p>}
			{movies && (
				<div>
					<h4 className="text-lg uppercase tracking-wider border-b-[1px] text-center">
						Movies
					</h4>
					{movies.slice(0, 3).map((movie, index) => (
						<p key={index} className="border-b-[1px] border-dashed">
							<span>
								{movie.name.length > 4
									? movie.name.slice(0, 4).concat("...")
									: movie.name}
							</span>
							<span>{movie.year}</span>
						</p>
					))}
				</div>
			)}

			{series && (
				<div>
					<h4 className="text-lg uppercase tracking-wider border-b-[1px] text-center">
						Series
					</h4>
					{series.slice(0, 3).map((item, index) => (
						<p key={index} className="border-b-[1px] border-dashed">
							<span>
								{item.name.length > 4
									? item.name.slice(0, 4).concat("...")
									: item.name}{" "}
								-{" "}
							</span>
							<span>{item.year}</span>
						</p>
					))}
				</div>
			)}
			<div className="flex w-full justify-center mt-4">
				<LinkedButton linkTo="#" linkText="see more" />
			</div>
		</section>
	);
}

export default SearchResultSect;
