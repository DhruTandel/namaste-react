import Shimmer from "./pages/Shimmer";
import RestaurantCard,{RestaurantPromoted} from "./RestaurantCard";
import { useEffect, useState } from "react";
import useStatusOnline from "../utils/useStatusOnline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [input, setInput] = useState("");

  const onlineStatus=useStatusOnline();

  const RestaurantCardPromoted=RestaurantPromoted(RestaurantCard);


  useEffect(() => {
    // console.log("UseEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {

    const URL = "https://679096ddaf8442fd7376db31.mockapi.io/api/v1/restaurants-list/restaurants";
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
      <div className="filter flex gap-5 m-5">
        <button className="p-3 bg-custom-gray rounded-full" onClick={handleFilter}>
          top Rated Restaurant
        </button>
        <div className="search">
          <input
            type="text"
            className="border border-black mx-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="p-3 bg-custom-gray rounded-full" onClick={handleSearch}>
            Search
          </button>
        </div>
        
      </div>
      <div className="res-container flex gap-3 flex-wrap">
        {filteredRestaurant.map((card, index) => (
          card.promoted?<RestaurantCardPromoted key={card.id} resData={card}/>:<RestaurantCard  key={card.id} resData={card}/>
        ))}
      </div>
    </main>
  );
};
export default Body;
