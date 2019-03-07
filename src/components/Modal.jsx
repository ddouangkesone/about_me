import React from 'react';

const Modal = ({ handleModal, image }) => {
  return (
    <div className="modal fixed h-100 w-100 z-2 pa5 flex items-center justify-center">
      <div className="h-100 w-100 bg-near-black absolute o-80" onClick={() => { handleModal() }} />
      <img className="w-100 w-33-l z-3" src={image} />
    </div>
  )
}

export default Modal;