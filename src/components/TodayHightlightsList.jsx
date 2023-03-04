import { BaseLinearIndicator } from "./BaseLinearIndicator";
import { HightlightCard } from "./HightlightCard";
import { WindStatusIndicator } from "./WindStatusIndicator";

export function TodayHightlightsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8">
      <HightlightCard title="test" data="8" measure="mph">
        <div className="flex justify-center">
          <WindStatusIndicator />
        </div>
      </HightlightCard>
      <HightlightCard title="test" data="8" measure="%">
        <div className="px-12">
          <BaseLinearIndicator completedPercentage={50} />
        </div>
      </HightlightCard>
      <HightlightCard title="test" data="8" measure="miles" />
      <HightlightCard title="test" data="8" measure="mb" />
    </div>
  );
}
