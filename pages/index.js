import HomeFirstAd from "../components/advertisements/home-first-ad";
import SecondAd from "../components/advertisements/second-ad";
import ItemsContainer_Home from "../components/containers/HomeContainer/ItemsContainer_Home";
import EmblaCarousel from "../components/heroSlider/EmblaCarousel";

// temporary data which will be replaced by database data
import { testMovie, testSeries } from "../heplperFuncs/tempConstants";

export default function Home() {
	const advertisement = true; //temp state
	return (
		<>
			<div className="text-color-light">
				<div>
					<EmblaCarousel />
				</div>
				{advertisement && <HomeFirstAd />}
				<div className="w-full max-w-md bg-color-orange text-color-dark p-4 mx-auto text-center rounded-md my-4">
					<h4>Stream or download Movies &amp; shows online</h4>
				</div>
				{advertisement && <SecondAd />}
				<ItemsContainer_Home data={testMovie} headerTitle="movies" />

				<ItemsContainer_Home data={testSeries} headerTitle="series" />
			</div>
		</>
	);
}
