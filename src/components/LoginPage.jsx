import React from 'react';

import Image from 'next/image'

import {signIn} from '../Firebase';

const LoginPage = () => {
    return(
        <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'absolute',
            left: '50%',
            top: '35%',
            transform: 'translate(-50%, -50%)'
         }}
        >
            <Image
             src="/images/loginUser.png"
             responsive alt="" 
             width={185} 
             height={200}
             />
            <button
             onClick={()=>signIn()}
             style={{
                marginTop: '2rem',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.25rem',
                border: '5px solid #1976d2',
                cursor: 'pointer'
             }}
            >
                <Image
                 src='/images/googleIcon.png' 
                 alt="" 
                 width={28} 
                 height={28}
                />
                <span
                 style={{
                    marginLeft: '0.5rem',
                    fontStyle: 'Roboto',
                    fontWeight: '400',
                    fontSize: '20px'
                }}>
                    Login With Google
                </span>
            </button>
        </div>
    );
}

export default LoginPage;