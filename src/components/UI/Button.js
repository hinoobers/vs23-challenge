const Button = (props) => {	
    const textOnly = props.textOnly; // Whether we should apply CSS text-button, otherwise button;

    return <button onClick={props.onClick} className={textOnly ? "text-button" : "button"}>{props.children}</button>
}

export default Button