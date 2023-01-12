import { useState } from "react";

import Form from "../../src/components/Form";
import PageWrapper from "../../src/layouts/PageWrapper";
import Modal from '../../src/components/Modal'
import ModalContent from "../../src/components/ModalContent";

import { SignUp, addRestaurantOwner } from "../../src/Firebase";

const fieldsGroups = [
    [{
        label: 'First Name',
        type: 'text',
        placeholder: 'firstName',
        name: 'firstName'
    }, {
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        name: 'lastName'
    }, {
        label: 'Email',
        type: 'email',
        placeholder: 'Enter email',
        name: 'email'
    },
    ], [{
        label: 'Restaurant Name',
        type: 'text',
        placeholder: 'Restaurant Name',
        name: 'restaurantName'
    }, {
        label: 'Restaurant License No.',
        type: 'text',
        placeholder: 'Restaurant License No.',
        name: 'license'
    },{
        label: 'Restaurant Image',
        type: 'file',
        placeholder: 'restaurantpic',
        name: 'restaurantImage'
    }], [
        {
            label: 'Phone no.',
            type: 'text',
            placeholder: 'xxxx-xxxxxxx',
            name: 'phNum'
        },
        {
            label: 'Address',
            type: 'text',
            placeholder: 'Address',
            name: 'address'
        }
    ],[
        {
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
            name: 'password'
        }, {
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
            name: 'repeatPassword'
        }
    ]
];

const Signup = () => {
    const [showModal, setShowModal] = useState(false);
    var modelValue = {
        title: 'Success',
        body: 'Signed Up SucceFully',
        linkTo: '/restaurant',
        btnTxt: 'Done'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.elements.repeatPassword.value == e.target.elements.password.value) {
            var data = {
                lastName: e.target.elements.lastName.value,
                firstName: e.target.elements.firstName.value,
                phNum: e.target.elements.phNum.value,
                email: e.target.elements.email.value,
                address: e.target.elements.address.value,
                restaurantName: e.target.elements.restaurantName.value,
                license: e.target.elements.license.value,
                restaurantImage: e.target.elements.restaurantImage.files[0],
            }
           await SignUp(e.target.elements.repeatPassword.value, data, addRestaurantOwner);
            setShowModal(true)
        } else {
            console.log('confirm password')
            modelValue = {
                title: 'Failure',
                body: 'Repeat Password Not Same',
                linkTo: '/restaurant/signup',
                btnTxt: 'Go Back'
            }
            setShowModal(true)
        }
       
    }

    return (
        <PageWrapper>
            <Form fieldsGroups={fieldsGroups} handleSubmit={handleSubmit} btnTxt='SignUp' />
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <ModalContent {...modelValue} />
            </Modal>
        </PageWrapper>
        
    );
}

export default Signup;