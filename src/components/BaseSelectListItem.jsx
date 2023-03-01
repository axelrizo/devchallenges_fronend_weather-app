import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import styles from "./BaseSelectListItem.module.css";

export function BaseSelectListItem() {
	return (
		<li>
			<button className={`${styles.list} flex w-full items-center justify-between px-3 py-5 border border-transparent hover:border-gray-600`}>
				<p>London</p>
				<Icon className={`${styles.list__icon} w-6 h-6 text-gray-600`} path={mdiChevronRight} />
			</button>
		</li>
	);
}
