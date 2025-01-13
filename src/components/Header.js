import { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { CartContext } from '../store/CartContext';

const Header = () => {
    const { items } = useContext(CartContext);
    //console.log(items.length);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={() => {}}>Cart ({items.length})</Button>
            </nav>
        </header>
    )
}

export default Header