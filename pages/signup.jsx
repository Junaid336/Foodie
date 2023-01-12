import Form from "../src/components/Form";

import { SignUp, createCart, addCustomer } from "../src/Firebase";

const fieldsGroups = [
    [  {
            label: 'First Name',
            type: 'text',
            placeholder: 'First Name',
            name:'firstName'
        }, {
            label: 'Last Name',
            type: 'text',
            placeholder: 'Last Name',
            name: 'lastName'
        }
    ], [
        {
            label: 'Email',
            type: 'text',
            placeholder: 'Enter email',
            name: 'email'
        }, {
            label: 'Phone no.',
            type: 'text',
            placeholder: 'xxxx-xxxxxxx',
            name:'phNum'
        }
    ], [
        {
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
            name: 'password'
        }, {
            label: 'Confirm Password',
            type: 'password',
            placeholder: 'Password',
            name: 'repeatPassword'
        }
    ]
];

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.elements.repeatPassword.value == e.target.elements.password.value){
            var data = {
                lastName: e.target.elements.lastName.value,
                firstName: e.target.elements.firstName.value,
                phNum: e.target.elements.phNum.value,
                email: e.target.elements.email.value,
            }
            SignUp(e.target.elements.repeatPassword.value, data, addCustomer, createCart)
        } else {
            console.log('confirm password')
        }
       
    }

    return (
        <Form fieldsGroups={fieldsGroups} btnTxt='SignUp' handleSubmit={handleSubmit} />
    );
}

export default Signup;