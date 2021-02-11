import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {FilledButton, FilledInput, TextButton} from '../components';

import {useDispatch} from 'react-redux';
import {login} from '../redux/authReducer';
import {ScrollView} from 'react-native-gesture-handler';

const Tension = () => {
  const LogoAnime = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(LogoAnime, {
      toValue: 1,
      duration: 500,
      delay: 300,
      useNativeDriver: true,
    }).start();
  });
  return LogoAnime;
};

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const dologin = () => dispatch(login());
  const LogoAnime = Tension();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffff',
      }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          width: '100%',
          //justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '45%',
            //backgroundColor: 'orange',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: LogoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-600, 0],
                  }),
                },
              ],
              width: '95%',
              justifyContent: 'center',
              alignSelf: 'center',
              //backgroundColor: 'white',
            }}>
            <Image
              source={require('../assets/logos/bus_logo.png')}
              style={{height: '95%', width: '95%', resizeMode: 'contain'}}
            />
          </Animated.View>
        </View>
        <ScrollView style={{width: '90%'}}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: LogoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [600, 0],
                  }),
                },
              ],
              width: '95%',
              borderRadius: 12,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <FilledInput place="Username" />
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: LogoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [600, 0],
                  }),
                },
              ],
              width: '95%',
              borderRadius: 12,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <FilledInput place="Email" />
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: LogoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-600, 0],
                  }),
                },
              ],
              width: '95%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <FilledInput place="Password" />
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: LogoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-600, 0],
                  }),
                },
              ],
              width: '95%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <FilledInput place="Confirm Password" />
          </Animated.View>
        </ScrollView>
        <Animated.View
          style={{
            transform: [
              {
                translateY: LogoAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                }),
              },
            ],
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <FilledButton title="SignUp" onPress={() => dologin()} />
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
};

export {SignUp};
const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
