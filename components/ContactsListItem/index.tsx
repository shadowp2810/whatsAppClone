import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { User } from '../../types';
import styles from './styles';

import {API, graphqlOperation, Auth } from "aws-amplify";
import { createChatRoom, createChatRoomUser } from '../../src/graphql/mutations';


export type ContactsListItemProps = {
    user: User;

}

const ContactsListItem = (props: ContactsListItemProps) => {

    const { user } = props;

    const navigation = useNavigation();

    const onClick = async () => {
    //     console.warn(`Clicked on ${user.name}`)
    //     navigation.navigate('ChatRoom', { 

    //     })
    // 

        try {

            //1. Create a new Chat Room
            const newChatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom, {
                        input: { }
                    }

                )
            )

            if(!newChatRoomData.data) {
                console.log(" Failed to create a chat room");
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom; 

            //console.log(newChatRoom);

            //2. Add `user` to the Chat Room
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                        input: {
                            userID: user.id,
                            chatRoomID: newChatRoom.id,
                        }

                    }
                )
            )

            //3. Add authenticated user to the Chat Room
            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                        input: {
                            userID: userInfo.attributes.sub,
                            chatRoomID: newChatRoom.id,
                        }

                    }
                )
            )

            navigation.navigate('ChatRoom', { 
                id: newChatRoom.id,
                name: "Hardcoded name",
            })

        } catch (e) {
            console.log(e);
        }

        
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style = {styles.container}> 
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
};



export default ContactsListItem;