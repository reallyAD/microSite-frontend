import React from 'react';
import ResusableButton from '../../../components/ReusableButton';

function ConfirmationModal({ 
  isOpen, 
  title, 
  message, 
  confirmText = "Confirm", 
  cancelText = "Cancel", 
  onConfirm, 
  onCancel,
  confirmButtonColor = "red" 
}) {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-lg p-6 max-w-sm mx-4 shadow-xl">
        <h3 className="text-xl font-semibold font-bold text-white mb-4">{title}</h3>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-2 gap-x-4">
          <ResusableButton
            text={cancelText} 
            onClick={onCancel} 
            color={"lightGray"} 
            width={80} 
            height={40} 
            disabled={false}
            />
    
          <ResusableButton
            text={confirmText} 
            onClick={onConfirm} 
            color={"red"} 
            width={80} 
            height={40} 
            disabled={false}
            />
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;