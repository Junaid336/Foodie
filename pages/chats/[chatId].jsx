import  Chat from '../../src/components/Chat';
import LoginPage from '../../src/components/LoginPage';
import NoContent from '../../src/components/NoContent';

const chat = ({isLogin, chatId}) => {
    if(isLogin)
        {
            if(chatId)
                {
                    return <Chat chatId={chatId} />
                }
            return <NoContent text='Chat Not Found' />
        }

    return <LoginPage />
}

chat.getInitialProps = ({query}) => {
    return {
        chatId: query.chatId
    }
}

export default chat;