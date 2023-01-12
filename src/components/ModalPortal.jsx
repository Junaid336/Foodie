import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';

const ModalPortal = ({ children }) => {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const modalRoot = document.getElementById("modal-root");
        if (modalRoot) {
            setContainer(modalRoot);
        }
    }, []);

    if (!container) {
        return null;
    }
    return createPortal(children, container);
}

export default ModalPortal;
