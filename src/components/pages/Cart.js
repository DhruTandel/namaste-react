import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    return <h1 className="text-center mt-24">Your cart is empty!</h1>;
  }

  const dispatch=useDispatch()

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

  return (
    <>
      <div className="text-center mt-24">
        <button className="m-2 p-2 text-white bg-black rounded-lg " onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {cartItems.map((item,indx)=>{
        return  <div key={indx} className="w-6/12 bg-gray-100 m-auto p-3 cursor-pointer text-bold flex justify-between">
        <h1 className="text-2xl">{item.name}</h1>
        <img className="w-32" src={item.Image} alt="Image"/>
      </div>
      })}
      
    </>
  );
};

export default Cart;
