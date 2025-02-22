import Shimmer from "./pages/Shimmer";
import RestaurantCard, { RestaurantPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import useStatusOnline from "../utils/useStatusOnline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [input, setInput] = useState("");

  const onlineStatus = useStatusOnline();

  const RestaurantCardPromoted = RestaurantPromoted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const URL =
      "https://679096ddaf8442fd7376db31.mockapi.io/api/v1/restaurants-list/restaurants";
    try {
      const data = await fetch(URL);
      const text = await data.json();
      setListOfRestaurant(text);
      setFilteredRestaurant(text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurant.filter((res) => res.avgRating > 4.3);
    console.log(filteredList);

    setFilteredRestaurant(filteredList);
  };
  const handleSearch = () => {
    const filteredSearch = listOfRestaurant.filter((res) =>
      res.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    console.log(input);
    setFilteredRestaurant(filteredSearch);
  };

  if (onlineStatus === false)
    return <h1>You'r Internet Connection goes off</h1>;

  if (listOfRestaurant.length === 0) return <Shimmer />;
  return (
    <main className="main max-w-[1200px] w-full mx-auto px-4">
  
    <div className="container mx-auto mr-3 mt-24 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <button className="p-3 gradient bg-gradient-to-l to-blue-400 from-blue-700 text-white rounded-xl hover:to-blue-700 hover:from-blue-400 transform transition-transform duration-300 font-semibold" onClick={handleFilter}>
        Top Rated Restaurant
      </button>
      <div className="search flex items-center gap-2">
        <input
          type="text"
          className="border border-black px-3 py-2 rounded-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="p-3 gradient bg-gradient-to-l to-blue-400 from-blue-700 text-white rounded-xl hover:to-blue-700 hover:from-blue-400 transform transition-transform duration-300 font-semibold" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredRestaurant.map((card) =>
          card.promoted ? (
            <RestaurantCardPromoted key={card.id} resData={card} />
          ) : (
            <RestaurantCard key={card.id} resData={card} />
          )
        )}
      </div>
    </div>
  </main>
  
  
  );
};
export default Body;
