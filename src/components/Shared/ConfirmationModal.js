import React from 'react';

const ConfirmationModal = ({title,message,closeModal,successAction,modalData}) => {
    return (
        <div className=' '>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="confirm-modal" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box z-40 w-96">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action ">
      <label onClick={()=>successAction(modalData)} htmlFor="confirm-modal" className="btn btn-info">Delete</label>
      <button className='btn btn-outline' onClick={closeModal}>Cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;