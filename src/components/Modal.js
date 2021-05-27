import React, { useRef, useEffect} from 'react'
import './Modal.css'




const Modal = ({ isOpen, closeModal, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    
    const modalRef = useRef()

    useEffect (() => {
        let handler = (event) =>{
        if (!modalRef.current.contains(event.target)) {
        setIsOpenModal(false);
        }
        
      }
      document.addEventListener("mousedown", handler);
  
      return () =>{
        document.removeEventListener("mousedown", handler)
      }
    });


    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
           
             <div ref={modalRef} className="modal__dialog" onClick={handleModalDialogClick}>
                <div className="modal-header">
                    <h1>Modal</h1>
                </div>
                <div className="modal-body">
                    {children}

                    
            <hr></hr>
            <a href="http://www.google.cl"> click aqui </a>
            
            

                </div>
                 
                <div className="modal-footer">
                    <button onClick={closeModal}>
                        Cerrar
                    </button>
                </div>
               
            </div>
            
        </div>
    );
}


export default Modal;