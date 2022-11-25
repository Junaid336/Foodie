import Chats from "../../src/components/Chats"
import LoginPage from '../../src/components/LoginPage';

export default ({isLogin}) => {
    if(isLogin)
        return <Chats />
    return <LoginPage />
}