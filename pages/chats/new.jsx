import AddNewComponent from '../../src/components/AddNewContact';

import LoginPage from '../../src/components/LoginPage';

export default ({isLogin}) => {
    if(isLogin)
        return <AddNewComponent />
    return <LoginPage />
}