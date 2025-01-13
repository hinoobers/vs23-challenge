import { createContext } from "react";

const context = createContext();

const initial = {
    items: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            const ni = action.payload;
            const exist = state.items.find((item) => item.id === ni.id);

            if(exist) {
                const updated = state.items.map(item => item.id === ni.id ? {...item, quantity: item.quantity + 1} : item);
                return {...state, items: updated};
            } else {
                return {...state, items: [...state.items, {...ni, quantity: 1}]};
            }
        case "CLEAR":
            return {...state, items: []};
        default:
            return state;
    }
}   

export const provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initial);

    const addItem = (item) => {
        dispatch({type: "ADD_ITEM", payload: item});
    }

    const clear = () => {
        dispatch({type: "CLEAR"});
    }

    return (
        <context.Provider value={{state, addItem, clear}}>
            {children}
        </context.Provider>
    )
};

export default CartContext;