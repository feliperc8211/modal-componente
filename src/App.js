import React, {useState } from 'react';
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


