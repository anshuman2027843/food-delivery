import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  
  const [data,setData] =  useState([]);
  const {url,token,currency} = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
      if (response.data && Array.isArray(response.data.data)) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch user orders:", error);
    }
  }

  useEffect(()=>{
    if (token) {
      fetchOrders();
    }
  },[token])

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {Array.isArray(data) && data.map((order,index)=>{
          const items = Array.isArray(order.items) ? order.items : [];
          return (
            <div key={index} className='my-orders-order'>
                <img src={assets.parcel_icon} alt="" />
                <p>{items.map((item,idx)=>{
                  if (idx === items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + ", "
                  }
                })}</p>
                <p>{currency}{order.amount}.00</p>
                <p>Items: {items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
