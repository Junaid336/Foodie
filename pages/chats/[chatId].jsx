import  Chat from '../../src/components/Chat';

const chat = ({isLogin, chatId}) => {
    if(isLogin)
        {
            if(chatId)
                {
                    return <Chat chatId={chatId} />
                }
            return <div>no chat</div>
        }

    return <div>Login First</div>
}

chat.getInitialProps = ({query}) => {
    return {
        chatId: query.chatId
    }
}

export default chat;