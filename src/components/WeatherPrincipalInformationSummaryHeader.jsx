import { mdiCrosshairsGps } from "@mdi/js";
import Icon from "@mdi/react";

export function WeatherPrincipalInformationSummaryHeader({ onClickOpenNavigationDrawer }) {
	return (
		<header className="pt-4 px-3 flex items-center justify-between">
			<button
				onClick={onClickOpenNavigationDrawer}
				className="bg-gray-500 px-5 py-2.5 leading-tight"
			>
				Search for places
			</button>
			<button className="bg-gray-500 rounded-full p-2">
				<Icon className="w-5 h-5" path={mdiCrosshairsGps} />
			</button>
		</header>
	);
}
