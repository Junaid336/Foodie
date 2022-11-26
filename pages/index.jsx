import Image from 'next/image';

import LoginPage from '../src/components/LoginPage';

const Index = ({isLogin}) => {

    return (
        <>  
            {
                isLogin
                ? <Image
                 src='/images/messaging.jpg'
                 layout='fill'
                 alt=''
                 />
                : <div>
                    <LoginPage />
                </div>
            }
            
        </>
    );
}

export default Index;