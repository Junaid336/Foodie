import Form from "../../src/components/Form";

const fieldsGroups = [
    [{
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name'
    }, {
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name'
    }, {
        label: 'Email',
        type: 'text',
        placeholder: 'Enter email'
    },
    ], [{
        label: 'Restaurant Name',
        type: 'text',
        placeholder: 'Restaurant Name'
    }, {
        label: 'Restaurant Lisence No.',
        type: 'text',
        placeholder: 'Restaurant Lisence No.'
    }, {
        label: 'Phone no.',
        type: 'text',
        placeholder: 'xxxx-xxxxxxx'
    }
    ], [
        {
            label: 'Password',
            type: 'password',
            placeholder: 'Password'
        }, {
            label: 'Password',
            type: 'password',
            placeholder: 'Password'
        }
    ]
];

const Signup = () => {

    return (
        <Form fieldsGroups={fieldsGroups} btnTxt='SignUp' />
    );
}

export default Signup;