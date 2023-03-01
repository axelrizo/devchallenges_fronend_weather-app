import { AsidePrincipal } from "./components/AsidePrincipal";
import { ForecastCards } from "./components/ForecastCards";

function App() {
  return (
    <div className="overflow-x-hidden text-gray-200 font-raleway bg-background-dark-blue-2">
      <AsidePrincipal />
      <ForecastCards />
    </div>
  )
}

export default App