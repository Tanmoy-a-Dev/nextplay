import React from "react";
import ContainerItem from "./ContainerItem";

function DataContainer({ data, showGenres = true }) {
	return (
		<div>
			<div className="flex flex-wrap px-5">
				{data.slice(0, 21).map((item, index) => (
					<ContainerItem key={index} item={item} showGenres={showGenres} />
				))}
			</div>
			<div className="border-[1px] text-center uppercase text-orange-400 tracking-widest font-bold">
				<h5 className="">This is the spot for future pagination</h5>
			</div>
		</div>
	);
}

export default DataContainer;
