import Image from "next/image";
import React from "react";

function ContainerItem({ item, showGenres }) {
	const modifiedName =
		item.name.length > 17 ? item.name.slice(0, 17).concat("..") : item.name;
	const stringGenre = item.genres.join(", ");
	const modifiedStringGenre =
		stringGenre.length > 21
			? stringGenre.slice(0, 21).concat("..")
			: stringGenre;
	// border-[1px]
	return (
		<div className="relative mb-4  grow-0 shrink basis-[calc(100%/2)] xs:basis-[calc(100%/3)] md:basis-[calc(100%/4)] lg:basis-[calc(100%/6)] xl:basis-[calc(100%/8)] pb-[78%] xs:pb-[48%] md:pb-[35%] lg:pb-[25%] xl:pb-[18%]">
			<a
				href={`/movies/${item.name}`}
				className="absolute top-1 bottom-1 left-1 right-1">
				<div className="relative h-[calc(100%-14%)] xl:h-[calc(100%-18%)] w-full">
					<Image
						src={item.imgUrl}
						alt="poster image"
						layout="fill"
						objectFit="fill"
						objectPosition="center center"
					/>
				</div>
				<div>
					<h4 className="capitalize text-sm xs:text-base md:text-base xl:text-sm font-bold">
						{modifiedName}
					</h4>
					{showGenres && (
						<p className="text-[12px] md:text-sm xl:text-[12px]">
							{modifiedStringGenre}
						</p>
					)}
				</div>
			</a>
		</div>
	);
}

export default ContainerItem;
