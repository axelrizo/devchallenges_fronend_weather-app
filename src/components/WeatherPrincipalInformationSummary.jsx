import { WeatherPrincipalInformationSummaryHeader } from "./WeatherPrincipalInformationSummaryHeader";
import { WeatherPrincipalInformationSummaryInformation } from "./WeatherPrincipalInformationSummaryInformation";

export function WeatherPrincipalInformationSummary({ onClickOpenNavigationDrawer }) {
	return (
		<section>
			<WeatherPrincipalInformationSummaryHeader
				onClickOpenNavigationDrawer={onClickOpenNavigationDrawer}
			/>
			<WeatherPrincipalInformationSummaryInformation />
		</section>
	);
}

