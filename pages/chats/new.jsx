import AddNewComponent from '../../src/components/AddNewContact';

import LoginPage from '../../src/components/LoginPage';

 const New = ({isLogin}) => {
    if(isLogin)
        return <AddNewComponent />
    return <LoginPage />
}

export default New;