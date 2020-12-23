import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, 
        NativeSyntheticEvent, 
        TextInputChangeEventData, } from 'react-native';

import {
    API, 
    Auth, 
    graphqlOperation,
} from 'aws-amplify';

import { createMessage } from '../../src/graphql/mutations';

import { MaterialCommunityIcons, FontAwesome5, 
            Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';


const InputBox = (props) => {

    const { chatRoomID } = props;

    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        }
        fetchUser();
    }, [])

    const onMicrophonePress = () => {
        console.warn('Microphone');
    }

    const onSendPress = async () => {
        console.warn(`Sending: ${message}`);

        try {
            await API.graphql(
                graphqlOperation(
                    createMessage, {
                        input: {
                            content: message,
                            userID: myUserId,
                            chatRoomID,
                        }
                    }
                )
            )
        } catch(e) {
            console.log(e);
        }
        
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
                <TextInput 
                    placeholder={"Type a message"}
                    style={styles.textInput} 
                    multiline 
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icons}/>
                {!message 
                    &&
                     <Fontisto name="camera" size={24} color="grey" style={styles.icons}/> }

            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message 
                        ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                        : <MaterialIcons name="send" size={28} color="white" />
                    }
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;
