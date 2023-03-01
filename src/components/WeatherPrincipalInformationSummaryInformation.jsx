import Icon from "@mdi/react";
import { mdiCircle, mdiMapMarker } from "@mdi/js";
import cloudBackground from "../assets/Cloud-background.png";
import HeavyCloud from "../assets/HeavyCloud.png";

export function WeatherPrincipalInformationSummaryInformation() {
	return (
		<main className="flex flex-col items-center text-gray-400">
			<div className="relative flex items-center justify-center h-80">
				<img
					src={cloudBackground}
					alt="cloud-background"
					className="absolute top-0 w-auto transform -translate-x-1/2 left-1/2 opacity-5 h-80 max-w-none"
				/>
				<img
					src={HeavyCloud}
					alt="heavy-cloud"
					className="relative object-contain w-36 h-44"
				/>
			</div>
			<div className="relative flex flex-col items-center -mt-6">
				<p className="relative flex items-center pb-6 text-gray-200 text-9xl">15
					<span className="relative block text-5xl text-gray-400 uppercase top-5">
						&deg;C
					</span>
				</p>
				<p className="text-4xl capitalize pb-7">shower</p>
				<p className="flex items-center pb-8">
					Today
					<Icon className="w-1 h-1 mx-4" path={mdiCircle} />
					Fri. 5 Jun
				</p>
				<p className="flex items-center pb-28">
					<Icon className="w-6 h-6 mr-1" path={mdiMapMarker} />
					<span className="block">Helsinki</span>
				</p>
			</div>
		</main>
	)
}