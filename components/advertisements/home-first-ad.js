import Image from "next/image";
import React from "react";
import { adImages } from "../../heplperFuncs/constants";
function HomeFirstAd() {
	return (
		// <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around my-4 space-y-4 md:space-y-0 w-full max-w-7xl xl:mx-auto xl:mb-[4px]">
		// 	{adImages.map((ad, index) => (
		// 		<div key={index} className="basis-[300px] mx-auto mb-4 ml-2">
		// 			<div className="relative h-80 w-80 ">
		// 				<Image
		// 					src={ad.url}
		// 					alt="poster image"
		// 					layout="fill"
		// 					objectFit="contain"
		// 					objectPosition="center center"
		// 				/>
		// 			</div>
		// 			{/* <Image src={ad.url} alt="advertisement" height={300} width={300} /> */}
		// 		</div>
		// 	))}
		// </div>

		<div className="flex flex-wrap justify-between w-full max-w-7xl xl:mx-auto space-x-2 ">
			{adImages.map((ad, index) => (
				<div key={index} className="mb-4 grow shrink basis-[22%] h-80 ">
					<div className="relative h-full w-full ">
						<Image
							src={ad.url}
							alt="poster image"
							layout="fill"
							objectFit="contain"
							objectPosition="center center"
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default HomeFirstAd;
