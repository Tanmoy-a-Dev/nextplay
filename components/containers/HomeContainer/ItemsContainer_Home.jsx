import Link from "next/link";
import React from "react";
import DataContainer from "../generalContainers/dataContainer";

function ItemsContainer_Home({ data, headerTitle }) {
	return (
		<div className="w-full max-w-6xl mx-auto">
			<div className="flex justify-between items-center tracking-wider border-b-[1px] border-dashed my-6 pb-4 uppercase px-3">
				<h3 className="text-xl font-bold text-color-green">{headerTitle}</h3>
				<Link href="/">
					<a title="watch more" className="text-color-orange">
						MORE &gt;
					</a>
				</Link>
			</div>
			<DataContainer data={data} />
		</div>
	);
}

export default ItemsContainer_Home;
