import React, { useContext } from "react";
import { FurnitureContext } from "../../Provider/FurnitureProvider";
import { FadeLoader, PacmanLoader } from "react-spinners";
import ProductCard from "./ProductCard";

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
  return (
    <section>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {/* <p>{furniture.length}</p> */}
        {furniture?.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Products;
