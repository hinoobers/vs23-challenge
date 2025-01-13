import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Button from "./UI/Button";

const Cart = (props) => {
    const {items, clear} = useContext(CartContext);

    
    const format = (price) => {
        return new Intl.NumberFormat('et-EE', {
            style: 'currency',
            currency: 'EUR'
        }).format(price)
    }

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
            <p className="cart-total">{format(items.reduce((s, n) => (s.price * s.quantity) + (n.price * n.quantity)))}</p>
            {items.length > 0 && (
                <div className="modal-actions">
                    <Button textOnly={true} onClick={props.modal}>Close</Button>
                    <Button textOnly={false}>Checkout</Button>
                </div>
            )}
        </>
    );
};

export default Cart;