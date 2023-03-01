import { useState } from "react";
import { SearchNavigationDrawer } from "./SearchNavigationDrawer";
import { WeatherPrincipalInformationSummary } from "./WeatherPrincipalInformationSummary";

export function AsidePrincipal() {
	const [isOpenSearchMenu, setIsOpenSearchMenu] = useState(false)

	return (
		<aside className="bg-background-dark-blue relative h-full min-h-screen">
			<WeatherPrincipalInformationSummary
				onClickOpenNavigationDrawer={() => setIsOpenSearchMenu(true)}
			/>
			<SearchNavigationDrawer
				isOpenSearchMenu={isOpenSearchMenu}
				onClickCloseNavigationDrawer={() => setIsOpenSearchMenu(false)}
			/>
		</aside>
	);
}
