/* 
				
				dashboard, movies-(all, addMovies),series-(all, addSeries), episodes-(all, addEpisodes), collections-(all, addCollections), pages-(all, addPages), persons-(all, addpersons), genres, comments, reports, users-(all, adduser), settings-(all, general, search Engine, advertisements),				
				
				*/

import { AiFillSetting } from "react-icons/ai";
import { BsCollectionPlayFill, BsPersonLinesFill } from "react-icons/bs";
import { CgPathDivide } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";
import { ImNewspaper } from "react-icons/im";
import {
	MdAddToPhotos,
	MdComment,
	MdDashboard,
	MdMovieCreation,
	MdOutlineVideoCameraFront,
	MdReport,
	MdVideoLibrary,
} from "react-icons/md";
import {
	RiAdvertisementFill,
	RiListSettingsFill,
	RiPlayList2Fill,
} from "react-icons/ri";
import { TbVirusSearch } from "react-icons/tb";

const tempConstant = {
	testMovie: [
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			releaseDate: "2.07.22",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			imgUrl: "/advertise/ad-1_300x300.png",
			name: "doctor strange in the multiverse of madness",
			genres: ["Action", "Adventure", "Animation"],
		},
	],

	testSeries: [
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
		{
			name: "test Show",
			episodeNo: 2,
			episodes: 30,
			releaseDate: "07.2,22",
			imgUrl: "/advertise/ad-1_300x300.png",
			genres: ["Action", "Adventure", "Animation"],
		},
	],

	// for dashboard
	miniInfo: [
		{
			dataFor: "movies",
			total: 40,
		},
		{
			dataFor: "series",
			total: 40,
		},
		{
			dataFor: "episodes",
			total: 40,
		},
		{
			dataFor: "users",
			total: 40,
		},
	],

	sideNav: [
		// dashboard
		{
			nested: false,
			icon: <MdDashboard />,
			name: "dashboard",
			link: "/admin-panel/",
			nestedMenu: [],
		},
		// movies-(all, addMovie)
		{
			nested: true,
			icon: <MdMovieCreation />,
			name: "movies",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiPlayList2Fill />,
					name: "all",
					link: "/admin-panel/movies/all",
				},
				{
					nested: false,
					icon: <MdAddToPhotos />,
					name: "add movie",
					link: "/admin-panel/movies/add",
				},
			],
		},
		// series-(all, addSeries)
		{
			nested: true,
			icon: <MdOutlineVideoCameraFront />,
			name: "series",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiPlayList2Fill />,
					name: "all",
					link: "/admin-panel/series/all",
				},
				{
					nested: false,
					icon: <MdAddToPhotos />,
					name: "add series",
					link: "/admin-panel/series/add",
				},
			],
		},
		// episodes-(all, addEpisodes)
		{
			nested: true,
			icon: <MdVideoLibrary />,
			name: "episodes",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiPlayList2Fill />,
					name: "all",
					link: "/admin-panel/episodes/all",
				},
				{
					nested: false,
					icon: <MdAddToPhotos />,
					name: "add episodes",
					link: "/admin-panel/episodes/add",
				},
			],
		},
		// collections-(all, addCollections)
		{
			nested: true,
			icon: <BsCollectionPlayFill />,
			name: "collections",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiPlayList2Fill />,
					name: "all",
					link: "/admin-panel/collections/all",
				},
				{
					nested: false,
					icon: <MdAddToPhotos />,
					name: "add collection",
					link: "/admin-panel/collections/add",
				},
			],
		},
		// pages-(all, addPages)
		{
			nested: true,
			icon: <ImNewspaper />,
			name: "pages",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiPlayList2Fill />,
					name: "all",
					link: "/admin-panel/pages/all",
				},
				{
					nested: false,
					icon: <MdAddToPhotos />,
					name: "add page",
					link: "/admin-panel/pages/add",
				},
			],
		},
		// persons-(all, addpersons),
		{
			nested: true,
			icon: <BsPersonLinesFill />,
			name: "persons",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiPlayList2Fill />,
					name: "all",
					link: "/admin-panel/persons/all",
				},
				{
					nested: false,
					icon: <MdAddToPhotos />,
					name: "add person",
					link: "/admin-panel/persons/add",
				},
			],
		},
		// genres
		{
			nested: false,
			icon: <CgPathDivide />,
			name: "genres",
			link: "/admin-panel/genres",
			nestedMenu: [],
		},
		// comments
		{
			nested: false,
			icon: <MdComment />,
			name: "comments",
			link: "/admin-panel/comments",
			nestedMenu: [],
		},
		// reports
		{
			nested: false,
			icon: <MdReport />,
			name: "reports",
			link: "/admin-panel/reports",
			nestedMenu: [],
		},
		// users-(all, adduser)
		{
			nested: true,
			icon: <HiUsers />,
			name: "users",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiPlayList2Fill />,
					name: "all",
					link: "/admin-panel/users/all",
				},
				{
					nested: false,
					icon: <MdAddToPhotos />,
					name: "add user",
					link: "/admin-panel/users/add",
				},
			],
		},
		// settings-( general, search Engine, advertisements)
		{
			nested: true,
			icon: <AiFillSetting />,
			name: "settings",
			link: "",
			nestedMenu: [
				{
					nested: false,
					icon: <RiListSettingsFill />,
					name: "general",
					link: "/admin-panel/settings/general",
				},
				{
					nested: false,
					icon: <TbVirusSearch />,
					name: "search engine",
					link: "/admin-panel/settings/search-engine",
				},
				{
					nested: false,
					icon: <RiAdvertisementFill />,
					name: "advertisements",
					link: "/admin-panel/settings/advertisements",
				},
			],
		},
	],
};

module.exports = tempConstant;
