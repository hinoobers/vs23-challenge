import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Button from "./UI/Button";

const Cart = (props) => {
    const {items, clearCart} = useContext(CartContext);

    
    const format = (price) => {
        return new Intl.NumberFormat('et-EE', {
            style: 'currency',
            currency: 'EUR'
        }).format(price)
    }

    let total = 0;
    items.forEach((item) => {
        total += item.price * item.quantity;
    });

    console.log(total);

    return (
        <>
            <h2>Your cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className="cart-item">
                            <p>{item.name} - {item.quantity}</p>
                        </li>
                    ))}
                </ul>
            )}

            <p className="cart-total">{format(total)}</p>
            <div className="modal-actions">
                <Button textOnly={true} onClick={props.modal}>Close</Button>
                {items.length > 0 && (
                    // Display checkout only if there are > 0 items in the cart
                    <Button textOnly={false} onClick={clearCart}>Checkout</Button>
                )}
            </div>

        </>
    );
};

export default Cart;