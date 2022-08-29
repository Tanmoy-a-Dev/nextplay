import Image from "next/image";
import React from "react";

function SecondAd() {
	return (
		<div className="h-[100px] w-[800px] hidden lg:block mx-auto mb-4">
			<Image
				src="/advertise/banner-ad_800x100 .png"
				alt="advertisement"
				height={100}
				width={800}
			/>
		</div>
	);
}

export default SecondAd;
