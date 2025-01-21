import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://678d18b7f067bf9e24e94168.mockapi.io/api/v1/restaurants/restaurant-list/${id}`
    );
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
