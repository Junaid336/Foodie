import Form from "../../src/components/Form";

const fieldsGroups = [
    [{
        label: 'Email',
        type: 'text',
        placeholder: 'Enter email'
    }, {
        label: 'Password',
        type: 'password',
        placeholder: 'Password'
    }
    ]
];

const Signin = () => {
    return (
        <div style={{
            paddingTop: '5rem',
            paddingBottom: '5rem'
        }}>
            <Form fieldsGroups={fieldsGroups} btnTxt='SignIn' />
        </div>
    );
}

export default Signin;