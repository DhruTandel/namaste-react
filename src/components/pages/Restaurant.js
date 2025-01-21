import React, { useState,useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const Restaurant = () => {

  const {id}=useParams();
  const resInfo=useRestaurantMenu(id);


  if(resInfo===null)return <Shimmer/>

  const {name,avgRating,costForTwo,cuisines,deliveryTime}=resInfo

  return (
    <>
        <div className='menu'>
        <h1>Restaurant Name: {name}</h1>
        <h3>Menu:{cuisines.join(", ")}</h3>
        <h3>AvgRating :{avgRating}</h3>
        <h3>Cost for two :{costForTwo}</h3>
        <h3>Delivery Time:{deliveryTime}</h3>
        </div>
    </>
  )
}

export default Restaurant
