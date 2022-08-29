import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import DataContainer from "./dataContainer";
import LinksContainer from "./linksContainer";

function CustomContainer({
	mainPage = "Provide main page name for this page",
	linksContainerData = [],
	dataContainerData = [],
	queryParam = "",
}) {
	return (
		<div className="w-full max-w-6xl mx-auto text-white py-4 space-y-4 px-2">
			{linksContainerData.length > 0 && (
				<div className="hidden md:block">
					<h3 className="uppercase font-bold tracking-widest">{mainPage}</h3>
					<LinksContainer
						data={linksContainerData}
						mainLink={mainPage}
						queryParam={queryParam}
					/>
				</div>
			)}

			<div className="flex items-center space-x-4 h-14">
				<div className="">
					<AiTwotoneHome className="text-2xl text-color-orange" />
				</div>
				<h3 className="uppercase font-bold tracking-widest text-base mt-[6px] ">
					{`${mainPage}/${queryParam}`}
				</h3>
			</div>
			<DataContainer data={dataContainerData} showGenres={false} />
		</div>
	);
}

export default CustomContainer;
