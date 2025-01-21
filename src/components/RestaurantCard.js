import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { id,name, cuisines, avgRating, costForTwo, deliveryTime,image} =
    props.resData;

  return (
    <Link to={`/restaurant/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
   
    <div className="res-card">
      <img
      src={image}
      alt="food-image"
    />
      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h5>{deliveryTime + " mins"}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
    </Link>
  );
};
export default RestaurantCard;
