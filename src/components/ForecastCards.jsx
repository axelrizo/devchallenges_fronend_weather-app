import { ForecastCard } from "./ForecastCard"
import styles from "./ForecastCards.module.css";

export const ForecastCards = () => {
  return (
    <div className={styles["forecast-cards"] + ""} >
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
  )
}
