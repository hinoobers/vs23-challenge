import { useEffect, useRef } from "react"

const Modal = (props) => {
    const modal = useRef(null);

    useEffect(() => {
        if(props.tpggle) {
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