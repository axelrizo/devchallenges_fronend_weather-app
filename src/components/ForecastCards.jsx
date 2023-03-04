import { ForecastCard } from "./ForecastCard";
import styles from "./ForecastCards.module.css";

export const ForecastCards = () => {
  return (
    <div
      className={
        styles["forecast-cards"] + " gap-x-8 gap-y-7 justify-center grid"
      }
    >
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
};
