import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic
} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const ChatProps = useMultiChatLogic(
        '98f642b4-b1d1-4db4-be1d-7b1d0dfd2229',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{height: '100vh' } }>
            <MultiChatSocket {...ChatProps} />
            <MultiChatWindow {...ChatProps} style={{height: '100vh' }}/>
        </div>
    )
}

export default ChatsPage;
