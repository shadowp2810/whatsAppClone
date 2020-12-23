import React from 'react';
import { View, Text } from 'react-native';
import { Message } from "../../types";
import moment from "moment";
import styles from './styles';

export type ChatMessageProps =  {
    message: Message;
    myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message, myId } = props;

    const isMymessage = () => {
        return message.user.id === myId;
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMymessage() ? '#FDC12A' : 'white',
                    marginLeft: isMymessage() ? 50 : 0,
                    marginRight: isMymessage() ? 0 : 50,

                }
            
            ]}>
                {!isMymessage() && <Text style={styles.name}>{message.user.name}</Text> }
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;