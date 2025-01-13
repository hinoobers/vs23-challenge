import Header from "./components/Header"; 
import Meals from "./components/Meals";
import Modal from "./components/UI/Modal";
import { CartProvider } from "./store/CartContext";
import ReactDOM from "react-dom";
import { useState } from "react";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  }

  return (
    <CartProvider>
      {ReactDOM.createPortal(<Modal toggle={cartIsShown}></Modal>)}
    <Header modal={showCartHandler}>
      <h1>Food Order App</h1>
    </Header>
    <Meals></Meals>
    </CartProvider>
  );
}

export default App;
