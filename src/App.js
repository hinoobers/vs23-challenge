import Header from "./components/Header"; 
import Meals from "./components/Meals";
import Modal from "./components/UI/Modal";
import { CartContext, CartProvider } from "./store/CartContext";
import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  }

  return (
    <CartProvider>
      <Modal toggle={cartIsShown}>
        <Cart modal={showCartHandler}></Cart>
      </Modal>
    <Header modal={showCartHandler}>
      <h1>Food Order App</h1>
    </Header>
    <Meals></Meals>
    </CartProvider>
  );
}

export default App;
