import React from 'react';

import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

export function ChatApp(props) {
  const chatProps = useMultiChatLogic(
    '616631b9-f321-4b45-bcac-c4eff1e568cf', 
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{height:"100vh"}}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style={{height:'100%'}}/>
    </div>
  )
}
export default ChatApp;