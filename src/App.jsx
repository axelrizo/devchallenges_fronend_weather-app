import { AsidePrincipal } from "./components/AsidePrincipal";
import { ForecastCards } from "./components/ForecastCards";
import { TodayHightlightsList } from "./components/TodayHightlightsList";

function App() {
  return (
    <div className="overflow-x-hidden text-gray-200 font-raleway bg-background-dark-blue-2">
      <AsidePrincipal />
      <ForecastCards />
      <section className="py-14 px-6">
        <h2 className="text-2xl font-bold pb-8">Today's Highlights</h2>
        <TodayHightlightsList />
      </section>
    </div>
  );
}

export default App;

