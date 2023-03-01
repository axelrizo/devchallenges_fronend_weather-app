import Icon from "@mdi/react";
import { BaseSearchBar } from "./BaseSearchBar";
import { BaseSelectList } from "./BaseSelectList";
import { mdiClose } from "@mdi/js";

export function SearchNavigationDrawer({ isOpenSearchMenu, onClickCloseNavigationDrawer }) {
	return (
		<aside
			className={`${isOpenSearchMenu ? '-translate-x-0' : '-translate-x-full'} w-full h-full transform transition-transform absolute top-0 left-0 bg-background-dark-blue`}
		>
			<div className="flex justify-end pb-3">
				<button className="p-4" onClick={onClickCloseNavigationDrawer}>
					<Icon className="w-6 h-6" path={mdiClose} />
				</button>
			</div>
			<BaseSearchBar />
			<div className="px-3 pt-10">
				<BaseSelectList />
			</div>
		</aside>
	);
}
