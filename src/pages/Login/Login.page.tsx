import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { DipCoreLogo, NriBlueLogo } from '../../assets';

const Login = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../../../assets/PNG/login-vector.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <DipCoreLogo />
    </ImageBackground>
    <View style={styles.formContainer}>
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Enter your username" />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter your username" />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 9,
          color: '#8C8C8C',
          fontSize: 12,
          fontFamily: theme.fontFamily.primary,
        }}
      >
        Create an account
      </Text>
    </View>
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 38,
      }}
    >
      <NriBlueLogo />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    minHeight: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginHorizontal: 30,
  },
  label: {
    color: '#1C3180',
    fontSize: 16,
    fontFamily: theme.fontFamily.primary,
  },
  input: {
    height: 50,
    marginTop: 9,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 4,
    padding: 10,
    fontFamily: theme.fontFamily.primary,
  },
  buttonContainer: {
    backgroundColor: '#1C3180',
    height: 50,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: theme.fontFamily.primary,
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Login;
