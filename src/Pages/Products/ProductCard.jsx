import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ item }) => {
  console.log(item);
  const{name,img,description,offer_price,original_price,offer_percentage
  }=item;
  return (
    <div className="card bg-base-100 border border-[#F1F1F1] w-96 shadow-xl">
      <figure className="p-8">
        <img
        className="object-cover w-full object-center"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl">{name}</h2>
        <div className="flex justify-between items-center text-center">
            <p className="text-xl font-bold">€{offer_price}.00</p>
            <p className="text-xl font-medium text-[#ABABAB] line-through ">€{original_price}.00</p>
            <p className="text-xl font-semibold text-[#B92E2E]">{offer_percentage} OFF</p>
        </div>
        <p className="text-[#838383] my-3 text-base">{description}</p>
        <div className="card-actions">
          <button className="w-full text-lg flex justify-center items-center font-semibold py-2 bg-black text-white rounded-md"><FaCartPlus/> Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
