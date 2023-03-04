import { mdiNavigation } from "@mdi/js";
import Icon from "@mdi/react";

export const WindStatusIndicator = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <div className="p-1 bg-slate-600 rounded-full">
        <Icon className="h-3 w-3" path={mdiNavigation} />
      </div>
      WSW
    </div>
  );
};
