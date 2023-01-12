import Form from "../src/components/Form";

const fieldsGroups = [
    [{
        label: 'Email',
        type: 'text',
        placeholder: 'Enter email',
        name: 'email'
    }, {
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        name: 'password'
        }
    ]
];

const Signin= () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.email.value)
        console.log(e.target.elements.password.value)
    }

    return(
        <div style={{
            paddingTop: '5rem',
            paddingBottom: '5rem'
        }}>
            <Form fieldsGroups={fieldsGroups} btnTxt='SignIn' handleSubmit={handleSubmit} />
        </div>
    );
}

export default Signin;