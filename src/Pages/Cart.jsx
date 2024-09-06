import { useContext, useState } from "react";
import { CartContext } from "../Provider/CartProvider";

const Cart = () => {
    const [increase,setIncrease]=useState();
    console.log(increase)
  const { cart, updateQuantity } = useContext(CartContext);
  //   handle quantity
  
  return (
    <section className="mt-10">
      {/* <h2></h2> */}
      <div className="grid gap-6">
        {/* cart products */}
        <div className="md:col-start-1  md:col-end-8">
          <h2 className="text-3xl font-bold">An Overview of your order</h2>
          {/* cart products */}
          <div className="mt-10 ">
            {cart?.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#ECECEC] rounded-md p-5 border-b border-white"
              >
                <div className="flex gap-5">
                  {/* quantity manage */}
                  <div className="flex flex-row items-center gap-3">
                    <span
                    onClick={()=>updateQuantity(item._id,item.quantity-1)}
                    className="text-2xl cursor-pointer">-</span>
                    <input
                      className="w-5 h-10 flex justify-center items-center"
                      value={item.quantity}
                    />
                    <span
                      onClick={()=>updateQuantity(item._id,item.quantity+1)}
                      className="text-2xl cursor-pointer"
                    >
                      +
                    </span>
                  </div>
                  <img className="w-32" src={item.img} alt="" />
                  <h3 className="text-[#434343] text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <h2 className="font-semibold text-end text-xl">
                    €{item.offer_price}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* order details */}
        <div className="md:col-start-9 md:col-end-13">
          <h2 className="text-3xl font-bold">Order Details</h2>
          <div className="mt-10 p-4 space-y-4 bg-[#ECECEC] rounded-md text-[#656565]">
            <div className="flex justify-between">
              <h4 className="text-xl">Subtotal</h4>
              <h4 className="text-xl">€</h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-xl">Shipping Fees</h4>
              <h4 className="text-xl">Free</h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-xl">Estimated Tax</h4>
              <h4 className="text-xl">€0</h4>
            </div>
            <hr className="border-2 border-white" />
            <div className="text-black font-bold text-2xl flex justify-between">
              <h2>Total</h2>
              <h2>€</h2>
            </div>
          </div>
          <button className="w-full text-center text-white bg-black mt-4 py-3 font-semibold rounded-md">
            GO TO CHECKOUT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
