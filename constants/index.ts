import { IconType } from "react-icons";
import { FaRegClock } from "react-icons/fa6";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineTranslate } from "react-icons/md";

export interface INavLink {
    id: string;
    title: string;
}

export const navLinks: INavLink[] = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "contact",
		title: "Contact Us",
	},
]

export interface ISideBarLink {
	id: number;
	title: string;
	route: string;
	icon: IconType;
}

export const sideBarLinks: ISideBarLink[] = [
	{
		id: 1,
		title: "Recents",
		route: "/recents",
		icon: FaRegClock,
	},
	{
		id: 2,
		title: "Contacts",
		route: "/contacts",
		icon: HiChatBubbleLeftRight,
	},
	{
		id: 3,
		title: "Search",
		route: "/search",
		icon: HiMiniMagnifyingGlass,
	},
	{
		id: 4,
		title: "Translate",
		route: "/translate",
		icon: MdOutlineTranslate,
	}
]
