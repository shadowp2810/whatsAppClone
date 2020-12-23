import React, {useEffect, useState} from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native';
import {
    API,
    Auth,
    graphqlOperation,
} from 'aws-amplify';

import { messagesByChatRoom } from '../src/graphql/queries';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import BG from '../assets/images/BG.gif';
import BG1 from '../assets/images/BG1.gif';
import BG2 from '../assets/images/BG2.gif';



const ChatRoomScreen = () => {

    const [messages, setMessages] = useState([]);
    const [myId, setMyId] = useState( null );

    const route = useRoute();
    console.log(route.params.id)

    useEffect(() => {
        const fetchMessages = async () => {
            const messagesData = await API.graphql(
                graphqlOperation(
                    messagesByChatRoom, {
                        chatRoomID: route.params.id,
                        sortDirection: "DESC"
                    }
                )
            )

            setMessages(messagesData.data.messagesByChatRoom.items);
            console.log(messagesData);
        }
        fetchMessages();
    }, [])

    useEffect(() => {
        const getMyId = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyId(userInfo.attributes.sub);
        }
        getMyId();
    }, [])

    //console.log(route.params)

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG2} imageStyle={{ opacity: 0.5 }}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
                inverted
            />
            <InputBox chatRoomID={route.params.id} />
        </ImageBackground>

    );
}

export default ChatRoomScreen;