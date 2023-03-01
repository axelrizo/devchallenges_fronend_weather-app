import { BaseSelectListItem } from "./BaseSelectListItem";

export function BaseSelectList() {
	return (
		<ul className="flex flex-col gap-1" >
			<BaseSelectListItem />
		</ul>
	);
}
