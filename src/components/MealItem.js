import Button from "./UI/Button"
import { useContext } from 'react'
import { CartContext } from '../store/CartContext';

const MealItem = (props) => {
    const {addItem } = useContext(CartContext);
    console.log(context);

    const format = (price) => {
        return new Intl.NumberFormat('et-EE', {
            style: 'currency',
            currency: 'EUR'
        }).format(price)
    }
    return (
        <li>
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p>{format(props.meal.price)}</p>
                    <p>{props.meal.description}</p>
                </div>
                <p>
                <Button textOnly={false} onClick={() => {}}>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem