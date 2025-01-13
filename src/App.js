import Header from "./components/Header"; 
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";

const App = () => {
 return (
    <CartProvider>
    <Header>
      <h1>Food Order App</h1>
    </Header>
    <Meals></Meals>
    </CartProvider>
  );
}

export default App;
