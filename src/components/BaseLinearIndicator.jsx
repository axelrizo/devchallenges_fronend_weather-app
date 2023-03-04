export const BaseLinearIndicator = ({ completedPercentage }) => {
  return (
    <div>
      <div className="text-xs flex justify-between font-bold text-gray-400 pb-1">
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className="bg-gray-200 h-2 rounded-3xl overflow-hidden">
        <div
          className="bg-yellow-200 h-full"
          style={{ width: `${completedPercentage}%` }}
        />
      </div>
      <p className="text-xs text-right font-bold text-gray-400 p-1">%</p>
    </div>
  );
};
