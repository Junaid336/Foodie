import Chats from "../../src/components/Chats"
import LoginPage from '../../src/components/LoginPage';

const Index = ({isLogin}) => {
    if(isLogin)
        return <Chats />
    return <LoginPage />
}

export default Index;