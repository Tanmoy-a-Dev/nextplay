import React from "react";
import CustomLink from "../../common/CustomLink";

function MiniInfoSect({ icon, link, sectionName, number }) {
	return (
		<div className="semiTab:mb-4 ml-[5px] grow-0 shrink w-[calc(100%-10px)] semiTab:w-[calc(100%/2-6px)] md:w-[calc(100%/3-6px)] lg:w-[calc(100%/4-6px)] h-24 bg-color-green border-2 rounded flex items-center relative">
			<div className="w-[20%] bg-color-border px-2 h-full flex items-center text-[220%] md:text-[150%] text-color-dark">
				{icon}
			</div>
			<div className="w-[55%] mx-[4px] xs:pl-[5%] hover:bg-color-border h-full flex items-center">
				<CustomLink
					linkTo={link}
					linkClass=""
					linkFront={
						<>
							<p className="text-xs text-color-light">Total</p>
							<h3 className="text-color-dark text-[190%] md:text-[150%] font-semibold capitalize">
								{sectionName}
							</h3>
						</>
					}
				/>
			</div>
			<div className="w-[10%] absolute top-1 right-[14%] xl:right-[10%] border-l-2">
				<p className="text-[240%] md:text-[170%] xl:text-[200%] px-1 text-center">
					{number}
				</p>
			</div>
		</div>
	);
}

export default MiniInfoSect;
