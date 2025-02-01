import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://679096ddaf8442fd7376db31.mockapi.io/api/v1/restaurants-list/restaurants/${id}`
    );
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
