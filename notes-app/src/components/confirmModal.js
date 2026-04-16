import React from 'react';

function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <center>
    <div className="modal-overlay">
        <div className="modal-content">
            <p>{message}</p>
            <div className="modal-buttons">
                <button className="confirm-btn" onClick={onConfirm}>Yes</button>
                <button className="cancel-btn" onClick={onCancel}>No</button>
            </div>
        </div>
    </div>
    </center>
  );
}

export default ConfirmModal;