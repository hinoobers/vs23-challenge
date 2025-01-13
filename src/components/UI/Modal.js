import { useEffect, useRef } from "react"

const Modal = (props) => {
    const modal = useRef(null);

    useEffect(() => {
        if(props.toggle) {
            modal.current.showModal();
        } else {
            modal.current.close();
        }
    }, [props.toggle]);
    return ( 
        <dialog ref={modal} className="modal"> 
            {props.children}
        </dialog>
        
    )
}

export default Modal