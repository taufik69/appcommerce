import {
  Text,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SignUp} from './style';

const Registration = () => {
  return (
    <View>
      {/* Background Image */}
      <ImageBackground
        source={require('../../assets/image/login.jpg')}
        resizeMode="cover"
        style={SignUp.bodyImage}>
        {/* Dark Overlay */}
        <View style={SignUp.overlay}></View>
      </ImageBackground>

      {/* Text ABOVE the background */}
      <View style={SignUp.textContainer}>
        <View style={{flexDirection: 'column', flexGrow: 1, padding: 40}}>
          <Text style={SignUp.textStyle}>Create an account</Text>
          <Text> Enter your details below</Text>
          <View style={{gap: 30}}>
            <TextInput
              placeholder="Name"
              keyboardType="default"
              style={SignUp.input}
            />
            <TextInput
              placeholder="Email or Phone Number"
              keyboardType="default"
              style={SignUp.input}
            />

            <TextInput
              placeholder="Password"
              keyboardType="number-pad"
              style={SignUp.input}
            />
          </View>
          {/* button */}
          <View>
            <TouchableOpacity style={SignUp.createBtn}>
              <Text style={SignUp.createbtnText}>Create Account</Text>
            </TouchableOpacity>
          </View>
          {/* button */}
        </View>
      </View>
    </View>
  );
};

export default Registration;
