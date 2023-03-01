import { ForecastCard } from "./ForecastCard"
import styles from "./ForecastCards.module.css";

export const ForecastCards = () => {
  console.log(styles);
  return (
    <div className={styles["forecast-cards"] + " bg-gray-800"} >
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
      <ForecastCard className={"bg-gray-500"} />
    </div>
  )
}
