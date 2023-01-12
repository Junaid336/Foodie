import React from 'react';
import ModalPortal from './ModalPortal';

const Modal = ({ children, open, onClose }) => {
    return (
        <ModalPortal>
            {open ? (
                <div>
                    {children}
                    <button onClick={onClose} > Close </button>
                </div>
            ) : null}
        </ModalPortal>
    );
}

export default Modal;
