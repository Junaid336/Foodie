import React, { useState } from "react";

import PageWrapper from "../src/layouts/PageWrapper";
import Modal from "../src/components/Modal";
import ModalContent from "../src/components/ModalContent";


const Second = () => {

    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <> 
           <PageWrapper>
                <div>
                    <button onClick={() => setModalOpen(true)}>Open Modal</button>
                    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                        <ModalContent title='Success' body='Item Added Successfully' linkTo='/restaurant' btnTxt='Done' />
                        <button onClick={() => setModalOpen(false)}>Close Modal</button>
                    </Modal>
                </div>
           </PageWrapper>
        </>
    );
}

export default Second;