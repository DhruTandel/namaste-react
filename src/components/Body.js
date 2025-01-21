import Shimmer from "./pages/Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import useStatusOnline from "../utils/useStatusOnline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [input, setInput] = useState("");

  

  const onlineStatus=useStatusOnline();

  useEffect(() => {
    console.log("UseEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {

    const URL = "https://678d18b7f067bf9e24e94168.mockapi.io/api/v1/restaurants/restaurant-list";
    try {
      const data = await fetch(URL);
      const text = await data.json(); // Fetch raw response
      console.log(text); // Log response
      setListOfRestaurant(text);
      setFilteredRestaurant(text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleFilter = () => {
    const filteredList = listOfRestaurant.filter((res) => res.avgRating>4.3);
    console.log(filteredList)

    setFilteredRestaurant(filteredList);
  };
  const handleSearch = () => {
    // console.log(input)
    const filteredSearch = listOfRestaurant.filter((res) =>
      res.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    console.log(input);
    setFilteredRestaurant(filteredSearch);
  };

  if(onlineStatus===false)return <h1>You'r Internet Connection goes off</h1>

  if(listOfRestaurant.length===0)return <Shimmer/>
  return (
    <main className="main">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          top Rated Restaurant
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((card, index) => (
          <RestaurantCard key={index} resData={card} />
     
        ))}
      </div>
    </main>
  );
};
export default Body;
