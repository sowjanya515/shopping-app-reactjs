// src/components/Dashboard.js
import React from 'react';
import CardItem from './cardItem';



function Dashboard({searchItem}) {
    const data = [
        { name:'shirt',image: 'https://via.placeholder.com/150', price: 20 },
        { name:'dress',image: 'https://via.placeholder.com/150', price: 40 },
        { name:'lehanga',image: 'https://via.placeholder.com/150', price: 60 },
      ];
      
      const filterdData= searchItem?data?.filter(item=>{
        return(
          item?.name===searchItem
        )
      }):data
  return (
    <div className="d-flex flex-wrap">
      {filterdData?.map((item, index) => (
        <CardItem key={index} image={item.image} price={item.price} name={item.name}/>
      ))}
    </div>
  );
}

export default Dashboard;
