import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import style from "./BaseSearchBar.module.css";

export function BaseSearchBar() {
	return (
		<div className="flex gap-2 px-2">
			<label className={` ${style['search-bar__label']} relative flex-grow text-gray-400`}>
				<div className={`${style['search-bar__icon']} absolute top-0 flex items-center h-full left-3`}>
					<Icon className="w-6 h-6" path={mdiMagnify} />
				</div>
				<input
					className={`${style['search-bar__input']} w-full py-3 pr-2 border border-gray-200 bg-background-dark-blue pl-11 focus-visible:border-white focus-visible:outline-none`}
					placeholder="search location" />
			</label>
			<button className="px-5 bg-blue-800 hover:bg-blue-700">Search</button>
		</div>
	);
}
