import Clear from "../assets/Clear.png";

export const ForecastCard = () => {
  return (
    <article className="px-5 py-5 bg-background-dark-blue">
      <h3 className="text-center pb-3">Tomorrow</h3>
      <img src={Clear} alt="weather image" className="h-16 mb-8 m-auto w-auto object-contain" />
      <p className="flex justify-between">
        <p>16&deg;C</p>
        <p className="text-gray-400">11&deg;C</p>
      </p>
    </article>
  )
}