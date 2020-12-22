import React from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import BG from '../assets/images/BG.gif';
import BG1 from '../assets/images/BG1.gif';
import BG2 from '../assets/images/BG2.gif';



const ChatRoomScreen = () => {

    const route = useRoute();

    //console.log(route.params)

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG2} imageStyle={{ opacity: 0.5 }}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox/>
        </ImageBackground>

    );
}

export default ChatRoomScreen;