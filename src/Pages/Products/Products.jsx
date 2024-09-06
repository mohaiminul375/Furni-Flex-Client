import React, { useContext } from "react";
import { FurnitureContext } from "../../Provider/FurnitureProvider";
import { FadeLoader, PacmanLoader } from "react-spinners";

const Products = () => {
  const { furniture, isLoading } = useContext(FurnitureContext);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#1E99F5" height="50" width="40" />
      </div>
    );
  }
  console.log(furniture);
  return <div></div>;
};

export default Products;
