import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';

import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFea from 'react-native-vector-icons/Feather';
import IconSli from 'react-native-vector-icons/SimpleLineIcons';

const SignInScreen = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to Jajan!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Input
            leftIcon={<IconFa name="user-o" color="#05375a" size={20} />}
            placeholder="Your Email"
            autoCapitalize="none"
          />
        </View>
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <Input
            leftIcon={<IconSli name="lock" color="#05375a" size={20} />}
            placeholder="Your Password"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => alert('Good Job!')}>
          <Text style={styles.textSign}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.signInBtn,
            {
              borderWidth: 1,
              borderColor: 'grey',
              marginTop: 15,
              backgroundColor: 'white',
            },
          ]}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={[styles.textSign, {color: '#009387'}]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  // textInput: {
  //   flex: 1,
  //   marginTop: Platform.OS === 'android' ? 0 : -12,
  //   paddingLeft: 10,
  //   color: '#05375a',
  // },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  signInBtn: {
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: '#009387',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
