import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';
import Colors from './constants/Colors'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';


import { withAuthenticator, Authenticator } from 'aws-amplify-react-native'

import SignIn from './components/CustomAuth/CustomSignIn';
import SignUp from './components/CustomAuth/CustomSignUp';
import ForgotPassword from './components/CustomAuth/CustomForgotPassword';
import ConfirmSignUp from './components/CustomAuth/CustomConfirmSignUp';
import ChangePassword from './components/CustomAuth/CustomChangePassword';


// import Amplify from 'aws-amplify'
// import config from './aws-exports'
// Amplify.configure(config)

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



// function Home(props) {
//   return (
//     <View>
//       <Text>Welcome</Text>
//       <Button title="Sign Out" onPress={() => Auth.signOut()} />
//     </View>
//   );
// }

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]


function MainApp(props) {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  //run this snippet only when App is first mounted
  useEffect( () => {
    const fetchUser = async () => {
      // get Authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser( { bypassCache: true}); 
      //console.log(userInfo);

      if (userInfo) {
      // get the user from Backend with the user SUB from Auth
        const userData = await API.graphql(
          graphqlOperation(
            getUser, 
            { id: userInfo.attributes.sub }
          )
        )

        if(userData.data.getUser) {
          console.log("User is already registered in database")
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.attributes.given_name,
          email: userInfo.attributes.email,
          birthdate: userInfo.attributes.birthdate,
          phoneNumber: userInfo.attributes.phone_number,
          //name: userData.username,
          imageUri: getRandomImage(),
          status: 'Hey, I am using LoopCoco',
        }

        await API.graphql(
          graphqlOperation(
            createUser,
            { input: newUser }
          )
        )

      //if there is no user in DB with the id, then create one

      }

    }
    fetchUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.container2} >
        <Navigation colorScheme={colorScheme} />
        <StatusBar  translucent={false}/>
      </SafeAreaProvider>
    );
  }
}


const AuthScreens = (props) => {
  //console.log('props', props.authState);
  switch (props.authState) {
    case 'signIn':
      return <SignIn {...props} />;
    case 'signUp':
      return <SignUp {...props} />;
    case 'forgotPassword':
      return <ForgotPassword {...props} />;
    case 'confirmSignUp':
      return <ConfirmSignUp {...props} />;
    case 'changePassword':
      return <ChangePassword {...props} />;
    case 'signedIn':
      return  <MainApp {...props}/>;
    default:
      return <></>;
  }
};


const App = (props) => {

  if(props.authState === 'signedIn') {
    return (
      <SafeAreaView style={styles.container}>
          <MainApp/>
      </SafeAreaView>
    ); 
  } 
  else {   
    return (
      <SafeAreaView style={styles.container}>
        <Authenticator
          usernameAttributes="email"
          hideDefault={true}
          authState="signUp"> 
          <AuthScreens />
        </Authenticator>
      </SafeAreaView>
    ); 
  } 
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: { 
    flex: 1,
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light.tint,
    marginTop: Platform.OS === "android" ? -20 : StatusBar.currentHeight,

    },
});

export default App;
//export default withAuthenticator(MainApp)
//export default withAuthenticator(App)

