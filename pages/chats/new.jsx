import AddNewComponent from '../../src/components/AddNewContact';

export default ({isLogin}) => {
    if(isLogin)
        return <AddNewComponent />
    return <div>Login First</div>
}