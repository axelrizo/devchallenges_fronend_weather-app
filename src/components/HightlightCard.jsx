export const HightlightCard = ({ children, title, data, measure }) => {
  return (
    <div className="bg-background-dark-blue">
      <h3 className="text-center">{title}</h3>
      <p className="text-7xl font-bold text-center">
        {data}
        <span className="text-4xl font-medium relative bottom-2 left-1">
          {measure}
        </span>
      </p>
      {children}
    </div>
  );
};
