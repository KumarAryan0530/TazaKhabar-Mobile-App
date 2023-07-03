import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import loginBG from '../login_bg.jpg';
import appLogo from '../app_logo.jpg';
import backIcon from '../backIcon.png';

const height = Dimensions.get('screen').height;

function Profile({setScreen}) {
  return (
    <KeyboardAvoidingView>
      <View style={styles.backToProfile}>
        <Pressable onPress={() => setScreen('Home')}>
          <Image style={styles.profileToBackIcon} source={backIcon} />
        </Pressable>
      </View>
      <View style={styles.loginBG}>
        <ImageBackground source={loginBG}>
          <View style={styles.filter}>
            <Image style={styles.appLogo} source={appLogo} />

            <View style={styles.loginForm}>
              <Text style={styles.loginText}>PROFILE</Text>
              <View>
                <Text style={styles.formLabel}>Registered Name</Text>
                <Text
                  style={styles.formInput}
                  // placeholder="Enter Your Name"
                  // placeholderTextColor="#00000033"
                />
              </View>

              <View>
                <Text style={styles.formLabel}>Registered Email</Text>
                <Text
                  style={styles.formInput}
                  // placeholder="abc@xyz.com"
                  // placeholderTextColor="#00000033"
                />
              </View>
              <View style={styles.shareAndLogout}>
                <Pressable style={styles.formInput}>
                  {/* onPress={() => setScreen('auth')} */}
                  <Text style={styles.buttonText}>INVITE APP</Text>
                </Pressable>
                <Pressable
                  style={styles.formInput}
                  onPress={() => setScreen('auth')}>
                  <Text style={styles.buttonText}>LOG OUT</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backToProfile: {
    height: 50,
  },
  profileToBackIcon: {
    height: 45,
    width: 45,
  },

  filter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height,
    backgroundColor: '#000000ba',
  },
  loginText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 600,
    paddingBottom: 30,
  },
  loginForm: {
    padding: 30,
    width: '100%',
    backgroundColor: '#ffffffba',
    opacity: 0.5,
    borderRadius: 14,
    paddingBottom: '30%',
  },

  appLogo: {
    top: 0,
    height: 120,
    width: '100%',
    opacity: 0.5,
  },
  formLabel: {
    paddingLeft: 5,
    fontSize: 16,
    color: '#000000',
    fontWeight: 500,
  },
  formInput: {
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 5,
    borderRadius: 14,
    backgroundColor: '#fff',
    color: '#000',
    height: 50,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29A5FF',
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 700,
    textAlign: 'center',
    top: 12,
  },

  container: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 5,
  },
});

export default Profile;
