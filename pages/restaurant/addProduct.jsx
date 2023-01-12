import React, { useState } from "react";
import Form from "../../src/components/Form";

import PageWrapper from "../../src/layouts/PageWrapper";
import Modal from '../../src/components/Modal'
import ModalContent from "../../src/components/ModalContent";

import { addNewProduct } from "../../src/Firebase";


const fieldsGroups = [
    [{
        label: 'Product Name',
        type: 'text',
        placeholder: 'Product Name',
        name: 'productName'
    },{
        label: 'Price',
        type: 'number',
        placeholder: 'Price',
        name: 'price'
    }, {
        label: 'Category',
        type: 'text',
        placeholder: 'Enter Category',
        name: 'category'
        }, {
            label: 'Type',
            type: 'text',
            placeholder: 'light, heavy',
            name: 'type'
        }
    ], [{
        label: 'Product Image',
        type: 'file',
        placeholder: 'Produc Image',
        name: 'productImage'
    }, {
            label: 'Description',
            type: 'textArea',
            placeholder: 'Description',
            name: 'description'
        }
    ]
];

const AddProduct = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            productName: e.target.elements.productName.value,
            price: e.target.elements.price.value,
            category: e.target.elements.category.value,
            type: e.target.elements.type.value,
            imageFile: e.target.elements.productImage.files[0],
            description: e.target.elements.description.value,
        }

        addNewProduct(data)
        setShowModal(true)
    }

    return (
        <PageWrapper>
        <Form fieldsGroups={fieldsGroups} btnTxt='AddProduct' handleSubmit={handleSubmit} />
        <Modal open={showModal} onClose={() => setShowModal(false)}>
            <ModalContent title='Success' body='Item Added Successfully' linkTo='/restaurant' btnTxt='Done' />
        </Modal>
        </PageWrapper>
    );
}

export default AddProduct;