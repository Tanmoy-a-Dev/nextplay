import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiFillCalendar, AiTwotoneStar } from "react-icons/ai";
import { sliderImages } from "../../heplperFuncs/constants";
import CustomLink from "../common/CustomLink";
import { NextButton, PrevButton } from "./EmblaCarouselButtons";

const EmblaCarousel = ({ options = { loop: false } }) => {
	const autoplay = useRef(
		Autoplay(
			{ delay: 2000, stopOnInteraction: true },
			(emblaRoot) => emblaRoot.parentElement
		)
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollNext = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
		autoplay.current.reset();
	}, [emblaApi]);

	const scrollPrev = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
		autoplay.current.reset();
	}, [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
	}, [emblaApi, onSelect]);

	return (
		<div className="relative bg-[#b94141] w-full h-52 md:h-80 lg:h-[28rem] xl:h-[32rem] mx-auto ">
			<div
				className="embla w-full h-full overflow-hidden"
				ref={emblaRef}
				onMouseEnter={() => autoplay.current.stop()}
				onMouseLeave={() => autoplay.current.play()}>
				<div className="embla__container flex text-white h-full">
					{sliderImages.map((slide, index) => (
						<CustomLink
							key={index}
							linkTo="/movies"
							linkClass="embla__slide relative h-full group"
							linkFront={
								<>
									<Image
										src={slide.imgUrl}
										alt="Logo of Next Movie website"
										layout="fill"
										objectFit="fill"
										objectPosition="top center"
									/>
									<div className="absolute bg-black/70 hidden group-hover:block top-1/3 left-20 w-1/2 h-52 px-7 pt-10 pb-7 rounded-md">
										<h3 className="capitalize text-xl font-bold">
											{slide.imgText.headingText}
										</h3>
										<div className="flex h-10 items-center space-x-3">
											<AiTwotoneStar className="text-orange-400 text-xl" />
											<span>IMDB: </span> <span>7.1</span>
											<span>
												<AiFillCalendar className="text-orange-400 text-xl" />
											</span>
											<span>2022</span>
										</div>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Dignissimos harum necessitatibus hic dolore dolorum
											nesciunt beatae? Unde corporis necessitatibus assumenda?
										</p>
									</div>
								</>
							}
						/>
					))}
				</div>
			</div>

			<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
			<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
		</div>
	);
};

export default EmblaCarousel;
