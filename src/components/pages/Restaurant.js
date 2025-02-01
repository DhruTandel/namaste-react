import React, { useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Restaurant = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const dispatch=useDispatch();

  const handleData=(name,Image)=>{
    dispatch(addItem({name,Image}))
  }

  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <Shimmer />;

  const { name, Image } = resInfo;

  return (
    <>
      <div className="w-6/12 bg-gray-100 m-auto p-3 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <h3>Recommended</h3>
          <span>▼</span>
        </div>
        {toggle && (
          <div className="my-4 flex justify-between">
            <h2>{name}</h2>
            <div className="relative">
            <img className="w-28 " src={Image} alt="image" />
            <button className="absolute top-0 mx-7 p-1 bg-black text-white rounded-lg" onClick={()=>handleData(name,Image)}>Add +</button>
            </div>
           
          </div>
        )}
      </div>
    </>
  );
};

export default Restaurant;
