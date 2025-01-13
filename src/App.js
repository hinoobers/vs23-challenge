import Header from "./components/Header"; 
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  }

 return (
    <CartProvider>
    <Header modal={showCartHandler}>
      <h1>Food Order App</h1>
    </Header>
    <Meals></Meals>
    </CartProvider>
  );
}

export default App;
