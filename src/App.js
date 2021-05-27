import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {

  

  const [isOpenModal, setIsOpenModal]  = useState(false);


  const closeModal = () => {
    setIsOpenModal(false);
  }

  const openModal = () => {
    setIsOpenModal(true);
  }

  

  return (
    
    <div>
      <button onClick={openModal}>
        Open Modal
      </button>
      < Modal 
        
        
      href={"http://www.google.cl"}

      isOpen={isOpenModal}
      closeModal={closeModal} 
      
      
      /> 
     
    </div>
    
  
  );

}

export default App;


