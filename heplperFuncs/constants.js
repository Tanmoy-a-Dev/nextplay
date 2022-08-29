import {
	FaFacebookF,
	FaInstagram,
	FaPinterestP,
	FaTwitter,
} from "react-icons/fa";

import { FiYoutube } from "react-icons/fi";

const CONSTANTS = {
	yearRange: 9,
	mainNavigationLinks: [
		// {
		// 	slug: "/",
		// 	text: "home",
		// },
		{
			slug: "/genres",
			text: "genres",
		},
		{
			slug: "/years",
			text: "releases",
		},
		{
			slug: "/countries",
			text: "countries",
		},
		{
			slug: "/latest",
			text: "last added",
		},
		{
			slug: "/movies",
			text: "movies",
		},
		{
			slug: "/series",
			text: "series",
		},
		{
			slug: "/top-imdb",
			text: "top imdb",
		},
		{
			slug: "/top-watched",
			text: "top watched",
		},
	],
	socialLinks: [
		{
			slug: "/facebook",
			icon: <FaFacebookF />,
		},
		{
			slug: "/twitter",
			icon: <FaTwitter />,
		},
		{
			slug: "/youtube",
			icon: <FiYoutube />,
		},
		{
			slug: "/instagram",
			icon: <FaInstagram />,
		},
		{
			slug: "/pinterest",
			icon: <FaPinterestP />,
		},
	],
	sliderImages: [
		{
			imgUrl: "/movie_posters/doctor-strange-in-the-multiverse-of-madness.jpg",
			imgText: {
				headingText: "Doctor Strange In The multiverse of madness",
				subText: {
					releaseYear: 2022,
					genre: ["action", "fiction", "drama"],
				},
			},
		},
		{
			imgUrl: "/movie_posters/minions_the_rise_of_gru_2000x1125.jpg",
			imgText: {
				headingText: "minions rise of gru",
				subText: {
					releaseYear: 2022,
					genre: ["animation", "fun", "drama"],
				},
			},
		},
		{
			imgUrl: "/movie_posters/rubikon_2022_1920x1080.jpg",
			imgText: {
				headingText: "rubikon",
				subText: {
					releaseYear: 2022,
					genre: ["action", "fiction", "drama"],
				},
			},
		},
		{
			imgUrl: "/movie_posters/thor_love_and_thunder_2022_.jpg",
			imgText: {
				headingText: "thor love and thunder",
				subText: {
					releaseYear: 2022,
					genre: ["action", "fiction", "drama"],
				},
			},
		},
		{
			imgUrl: "/movie_posters/prey_2022_2560x1440.jpg",
			imgText: {
				headingText: "prey",
				subText: {
					releaseYear: 2022,
					genre: ["action", "fiction", "drama"],
				},
			},
		},
		{
			imgUrl: "/movie_posters/the_sea_beast_2022_2048x1152.jpg",
			imgText: {
				headingText: "the sea beast",
				subText: {
					releaseYear: 2022,
					genre: ["animation", "fun", "drama"],
				},
			},
		},
	],
	upperFooterPages: [
		{
			slug: "/terms",
			name: "Terms and Conditions",
		},
		{
			slug: "/privacy-policy",
			name: "Privacy Policy",
		},
		{
			slug: "/about-us",
			name: "About Us",
		},
		{
			slug: "/contact-us",
			name: "Contact Us",
		},
		{
			slug: "/dmca",
			name: "DMCA",
		},
	],
	discovers: ["trendings", "upcomings"],
	filterSection: [
		{
			groupName: "sort by",
			fieldType: "radio",
			fields: [
				{
					id: "radio-la",
					name: "sortBy",
					value: "latest",
					label: "last added",
					// checked: false,
				},
				{
					id: "radio-mv",
					name: "sortBy",
					value: "viewed",
					label: "most viewed",
					// checked: false,
				},
				{
					id: "radio-name",
					name: "sortBy",
					value: "name",
					label: "name",
					// checked: false,
				},
				{
					id: "radio-tmdb",
					name: "sortBy",
					value: "tmdb",
					label: "tmdb",
					// checked: false,
				},
				{
					id: "radio-ry",
					name: "sortBy",
					value: "releaseYear",
					label: "release year",
					checked: true,
				},
			],
		},
		// type of video
		{
			groupName: "type",
			fieldType: "checkbox",
			fields: [
				{
					value: "movies",
				},
				{
					value: "series",
				},
			],
		},
		// quality
		{
			groupName: "quality",
			fieldType: "checkbox",
			fields: [
				{
					value: "sd",
				},
				{
					value: "cam",
				},
				{
					value: "hd",
				},
			],
		},
		// release year
		{
			groupName: "release",
			fieldType: "checkbox",
			fields: [
				{
					value: "2022",
				},
				{
					value: "2021",
				},
				{
					value: "2020",
				},
				{
					value: "2019",
				},
				{
					value: "2018",
				},
				{
					value: "2017",
				},
				{
					value: "2016",
				},
				{
					value: "2015",
				},
				{
					value: "2014",
				},
				{
					value: "2013",
				},
				{
					value: "older",
				},
			],
		},
		// genres
		{
			groupName: "genre",
			fieldType: "checkbox",
			fields: [
				{
					value: "action",
				},
				{
					value: "adventure",
				},
				{
					value: "animation",
				},
				{
					value: "biography",
				},
				{
					value: "comedy",
				},
				{
					value: "costume",
				},
				{
					value: "crime",
				},
				{
					value: "documentary",
				},
				{
					value: "drama",
				},
				{
					value: "family",
				},
				{
					value: "fantasy",
				},
				{
					value: "game show",
				},
				{
					value: "historical fiction",
				},
				{
					value: "history",
				},
				{
					value: "horror",
				},
				{
					value: "kung-fu",
				},
				{
					value: "music",
				},
				{
					value: "musical",
				},
				{
					value: "mystery",
				},
				{
					value: "mythological",
				},
				{
					value: "news",
				},
				{
					value: "psychological",
				},
				{
					value: "romance",
				},
				{
					value: "sci-fi",
				},
				{
					value: "short",
				},
				{
					value: "sport",
				},
				{
					value: "talk-show",
				},
				{
					value: "thriller",
				},
				{
					value: "tv-show",
				},
				{
					value: "war",
				},
				{
					value: "western",
				},
				{
					value: "wwe",
				},
			],
		},
		// countries
		{
			groupName: "country",
			fieldType: "checkbox",
			fields: [
				{
					value: "afganistan",
				},
				{
					value: "argentina",
				},
				{
					value: "armenia",
				},
				{
					value: "asia",
				},
				{
					value: "Australia",
				},
				{
					value: "austria",
				},
				{
					value: "bahmas",
				},
				{
					value: "belgium",
				},
				{
					value: "belize",
				},
				{
					value: "bolivia",
				},
				{
					value: "bosnia",
				},
				{
					value: "brazil",
				},
				{
					value: "Bulgaria",
				},
				{
					value: "cambodia",
				},
				{
					value: "Canada",
				},
				{
					value: "chile",
				},
				{
					value: "china",
				},
				{
					value: "colombia",
				},
				{
					value: "croatia",
				},
				{
					value: "cuba",
				},
				{
					value: "czech-republic",
				},
				{
					value: "Denmark",
				},
				{
					value: "dominican rebublic",
				},
				{
					value: "finland",
				},
				{
					value: "France",
				},
				{
					value: "georgia",
				},
				{
					value: "Germany",
				},
				{
					value: "greece",
				},
				{
					value: "hong kong",
				},
				{
					value: "hungary",
				},
				{
					value: "iceland",
				},
				{
					value: "india",
				},
				{
					value: "indonesia",
				},
				{
					value: "international",
				},
				{
					value: "iran",
				},
				{
					value: "Ireland",
				},
				{
					value: "israel",
				},
				{
					value: "italy",
				},
				{
					value: "japan",
				},
				{
					value: "jordan",
				},
				{
					value: "kenya",
				},
				{
					value: "korea",
				},
				{
					value: "lebanon",
				},
				{
					value: "lithuania",
				},
				{
					value: "luxembourg",
				},
				{
					value: "malaysia",
				},
				{
					value: "mali",
				},
				{
					value: "malta",
				},
				{
					value: "Mexico",
				},
				{
					value: "mongolia",
				},
				{
					value: "morocco",
				},
				{
					value: "netherlands",
				},
				{
					value: "new Zealand",
				},
				{
					value: "nigeria",
				},
				{
					value: "norway",
				},
				{
					value: "pakistan",
				},
				{
					value: "palestine",
				},
				{
					value: "panama",
				},
				{
					value: "peru",
				},
				{
					value: "philippines",
				},
				{
					value: "poland",
				},
				{
					value: "portugal",
				},
				{
					value: "romania",
				},
				{
					value: "Russia",
				},
				{
					value: "samoa",
				},
				{
					value: "senegal",
				},
				{
					value: "serbia",
				},
				{
					value: "singapore",
				},
				{
					value: "slovenia",
				},
				{
					value: "somalia",
				},
				{
					value: "South africa",
				},
				{
					value: "south korea",
				},
				{
					value: "spain",
				},
				{
					value: "sudan",
				},
				{
					value: "sweden",
				},
				{
					value: "switzerland",
				},
				{
					value: "taiwan",
				},
				{
					value: "thailand",
				},
				{
					value: "trinidad",
				},
				{
					value: "turkey",
				},
				{
					value: "uganda",
				},
				{
					value: "ukraine",
				},
				{
					value: "united arab emirates",
				},
				{
					value: "united Kingdom",
				},
				{
					value: "united States",
				},
				{
					value: "uruguay",
				},
				{
					value: "venezuela",
				},
				{
					value: "vietnam",
				},
			],
		},
	],

	adImages: [
		{
			url: "/advertise/ad_2-300x300.gif",
		},
		{
			url: "/advertise/ad_2-300x300.gif",
		},
		{
			url: "/advertise/ad_2-300x300.gif",
		},
		{
			url: "/advertise/ad_2-300x300.gif",
		},
	],
};

module.exports = CONSTANTS;
