import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { id, name, cuisines, avgRating, costForTwo, deliveryTime, Image } = props.resData;

  return (
    <Link to={`/home/body/restaurant/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="relative h-auto w-64 border-2 border-solid border-black p-1 m-3 bg-gray-100 rounded-xl hover:scale-95 transition-all">
        
        {props.isPromoted && (
          <label className="absolute top-2 left-2 bg-black text-white rounded-lg p-1 z-10">
            Promoted
          </label>
        )}

        <img className="w-full p-1 box-border h-52 bg-cover rounded-xl"
          src={Image}
          alt="food-image"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
        <h5>{deliveryTime + " mins"}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    </Link>
  );
};

export const RestaurantPromoted = (RestaurantCard) => {
  return (props) => {

    return <RestaurantCard {...props} isPromoted={true} />;
  };
};

export default RestaurantCard;


