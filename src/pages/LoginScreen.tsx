import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/validators';
import { Navigation } from '../types';
import { StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import axios from 'axios';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {

  let emailDefault = navigation.getParam('email', {});

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    /*const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    let r = axios.get("https://api-test.waynimovil.com/authenticate?email=" + email.value + "&password=" + password.value).then(
      function (res) {
        if (res.data.status != "error") {
        
          let token = res.data.token;

          axios({
            method: 'get',
            url: 'https://api-test.waynimovil.com/account',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }).then(function (response) {

            let userMD = response.data[0];

            navigation.navigate('Dashboard', {
              user: userMD,
              token: token
            });

          }).catch(function (error) {
              console.log(error);
          });

        } else {
          console.log(res.data.messages);
        }
      }).catch(function (err) {
        console.log("Algo paso en la llamada");
      });
    
    if (!email.value)
        email.value = emailDefault;
    */
    /*
    
    let r = axios.get("https://api-test.waynimovil.com/authenticate?email=" + email.value + "&password=" + password.value).then(
      function (res) {
        if (res.data.status != "error") {
          console.log("Este es el Token de Acceso:", res.data.token);
        } else {
          console.log(res.data.messages);
        }
      }).catch(function (err) {
        console.log("Algo paso en la llamada");
      });*/

    let User = {
      name: "Martín",
      last_name: "Rivas",
      email: email.value
    }

    navigation.navigate('NavAuth', {
      user: User,
      token: '123'
    });
    
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Ingresar</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>¿No recuerdo la contraseña?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Ingreso a ORT
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿Aun no estas registrado?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
