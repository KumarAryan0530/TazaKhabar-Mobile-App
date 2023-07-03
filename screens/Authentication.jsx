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

const height = Dimensions.get('screen').height;

function Authentication({setScreen}) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.loginBG}>
          <ImageBackground source={loginBG}>
            <View style={styles.filter}>
              <Image style={styles.appLogo} source={appLogo} />

              <View style={styles.loginForm}>
                <Text style={styles.loginText}>
                  {isLogin ? 'LOGIN' : 'SIGNUP'}
                </Text>
                {isLogin ? null : (
                  <View>
                    <Text style={styles.formLabel}>Name</Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder="Enter Your Name"
                      placeholderTextColor="#00000033"
                    />
                  </View>
                )}

                <View>
                  <Text style={styles.formLabel}>Email</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder="abc@xyz.com"
                    placeholderTextColor="#00000033"
                  />
                </View>

                <View>
                  <Text style={styles.formLabel}>Password</Text>
                  <TextInput
                    secureTextEntry={true}
                    style={styles.formInput}
                    placeholder="********"
                    placeholderTextColor="#00000033"
                  />
                </View>

                <Pressable
                  style={styles.button}
                  onPress={() => setScreen('Home')}>
                  <Text style={styles.buttonText}>
                    {isLogin ? 'LOGIN' : 'SIGNUP'}
                  </Text>
                </Pressable>

                <View style={styles.signUpHint}>
                  <Text style={styles.signUpHintText}>
                    {isLogin ? 'Don’t have an account?' : 'Have an account?'}
                  </Text>
                  <Pressable
                    style={styles.signUpHintButton}
                    onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.signUpHintButtonText}>
                      {isLogin ? 'Sign up' : ' Log in'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginBG: {
    height: height,
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
  },
  loginForm: {
    padding: 30,
    width: '100%',
    backgroundColor: '#ffffffba',
    opacity: 0.5,
    borderRadius: 14,
    paddingBottom: '40%',
  },
  appLogo: {
    height: 98,
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
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 700,
  },
  signUpHint: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 5,
  },
  signUpHintButton: {
    marginLeft: 5,
  },
  signUpHintButtonText: {
    color: '#1e90ff',
    fontWeight: '600',
  },
  signUpHintText: {
    color: '#00000088',
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

export default Authentication;
