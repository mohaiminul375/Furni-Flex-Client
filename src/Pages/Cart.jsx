import { useContext } from "react";
import { CartContext } from "../Provider/CartProvider";


const Cart = () => {
    const {cart}=useContext(CartContext);
    return (
        <div>
            {cart.length}
        </div>
    );
};

export default Cart;