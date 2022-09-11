import Chats from "../../src/components/Chats"

export default ({isLogin}) => {
    if(isLogin)
        return <Chats />
    return <div>Login First</div>
}