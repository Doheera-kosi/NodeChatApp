// // import React from "react";
// import PropTypes from "prop-types";
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//     const ChatProps = useMultiChatLogic(
//         '98f642b4-b1d1-4db4-be1d-7b1d0dfd2229',
//         props.user.username,
//         props.user.secret
//     );
//     return (
//         <div style={{height: '100vh' } }>
//             <MultiChatSocket {...ChatProps} />
//             <MultiChatWindow {...ChatProps} style={{height: '100vh' }}/>
//         </div>
//     )
// }

// ChatsPage.propTypes = {
//   user: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     secret: PropTypes.string.isRequired
//   }).isRequired
// };

// export default ChatsPage;

// import React from "react";
import PropTypes from "prop-types";
import { PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh' } }>
            <PrettyChatWindow
                projectId="98f642b4-b1d1-4db4-be1d-7b1d0dfd2229"
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired
  }).isRequired
};

export default ChatsPage;
