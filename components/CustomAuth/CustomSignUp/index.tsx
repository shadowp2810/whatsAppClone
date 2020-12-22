import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, 
} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';


import useForm from '../useForm';
import {validateEmail, validatePassword, validateUsername, validateBirthDate, validateGivenName, validatePhoneNumber} from '../validation';

import {FormStyles} from '../styles/FormStyles';
import data from '../../../data/countriesData';
import styles from './styles';





export default function SignUp(props) {
  const initialValues = {preferred_username: '', email: '', password: '', phone_number: '', birthdate: '', given_name: ''};
  const [error, setError] = React.useState();


  const {values, onSubmit, onChange, errors} = useForm(
    onSubmitSignup,
    initialValues,
    validateSignup,
  );

  async function onSubmitSignup() {
    const {email, preferred_username, password, phone_number, birthdate, given_name} = values;
    try {
      const user = await Auth.signUp({
        username: email,
        password,
        attributes: {
          preferred_username,
          given_name,
          birthdate,
          phone_number,
        },
      });
      props.onStateChange('confirmSignUp', user);
    } catch (error) {
      console.log('errror', error);
      setError(error.message);
    }
  }

  function validateSignup() {
    const errors = {};
    errors.email = validateEmail(values.email);
    errors.password = validatePassword(values.password);
    errors.username = validateUsername(values.preferred_username);
    errors.given_name = validateGivenName(values.given_name);
    errors.birthdate = validateBirthDate(values.birthdate);
    errors.phone_number = validatePhoneNumber(values.phone_number);

    return errors;
  }

  if (props.authState === 'signUp')
    return (
      <View style={FormStyles.container}>
        <View style={FormStyles.bgcontainer}>
          <Text style={FormStyles.title}>SIGN UP</Text>
          <View style={FormStyles.labelWrapper}>
            <Icon name="email" size={13} style={FormStyles.labelIcon} />
            <Text style={FormStyles.labelText}> Email </Text>
          </View>
          <TextInput
            style={FormStyles.textbox}
            autoCompleteType="email"
            onChangeText={(text) => onChange({name: 'email', value: text})}
            value={values.email}
            placeholder="Enter Email"
          />
          {errors.email && <Text style={FormStyles.error}>{errors.email}</Text>}

          <View style={FormStyles.labelWrapper}>
            <Icon name="lock" size={13} style={FormStyles.labelIcon} />
            <Text style={FormStyles.labelText}> Password</Text>
          </View>
          <TextInput
            style={FormStyles.textbox}
            autoCompleteType="password"
            onChangeText={(text) => onChange({name: 'password', value: text})}
            value={values.password}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          {errors.password && (
            <Text style={FormStyles.error}>{errors.password}</Text>
          )}

          <View style={FormStyles.labelWrapper}>
            <Icon name="lock" size={13} style={FormStyles.labelIcon} />
            <Text style={FormStyles.labelText}> First Name</Text>
          </View>
          <TextInput
            style={FormStyles.textbox}
            autoCompleteType="off"
            onChangeText={(text) => onChange({name: 'given_name', value: text})}
            value={values.given_name}
            placeholder="Enter First Name"
          />
          {errors.given_name && (
            <Text style={FormStyles.error}>{errors.given_name}</Text>
          )}

          <View style={FormStyles.labelWrapper}>
            <Icon name="lock" size={13} style={FormStyles.labelIcon} />
            <Text style={FormStyles.labelText}> Birth Date</Text>
          </View>
          <TextInput
            style={FormStyles.textbox}
            autoCompleteType="off"
            onChangeText={(text) => onChange({name: 'birthdate', value: text})}
            value={values.birthdate}
            placeholder="YYYY-MM-DD"
          />
          {errors.birthdate && (
            <Text style={FormStyles.error}>{errors.birthdate}</Text>
          )}

          <View style={FormStyles.labelWrapper}>
            <Icon name="lock" size={13} style={FormStyles.labelIcon} />
            <Text style={FormStyles.labelText}> Phone Number</Text>
          </View>
          <TextInput
            style={FormStyles.textbox}
            autoCompleteType="tel"
            onChangeText={(text) => onChange({name: 'phone_number', value: text})}
            value={values.phone_number}
            placeholder="Enter Phone Number"
          />
          {errors.phone_number && (
            <Text style={FormStyles.error}>{errors.phone_number}</Text>
          )}
          
          
          <TouchableOpacity style={FormStyles.button} onPress={onSubmitSignup}>
            <Text style={FormStyles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={FormStyles.formLinks}>
            <TouchableWithoutFeedback
              onPress={() => props.onStateChange('signIn', {})}>
              <Text style={FormStyles.linkText}>Sign In</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => props.onStateChange('confirmSignUp', {})}>
              <Text style={FormStyles.linkText}>Confirm code</Text>
            </TouchableWithoutFeedback>
          </View>
          {error && <Text style={FormStyles.error}>{error}</Text>}
        </View>
      </View>
    );
  else return <></>;
}