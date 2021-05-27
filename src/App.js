import React, {useState , useEffect, useRef } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {

  
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }



  let modalRef = useRef()

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
    
    <div>
      <button onClick={openModal}>
        Open Modal
      </button>
      < Modal 
      isOpen={isOpenModal}
      closeModal={closeModal} 
      />  
     
    </div>
    
  
  );

}

export default App;


