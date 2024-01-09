import React, {useState} from 'react';
import {View, Text, Image, Dimensions, TextInput} from 'react-native';

const SignUpScreen = () => {
  const [name, setName] = useState();

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? 44 : 44,
          flexDirection: 'row',
          marginLeft: 8,
          marginTop: Platform.OS === 'ios' ? 40 : 0,
        }}>
        <View
          style={{
            height: 24,
            width: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/Arrow_Icon.png')}
            style={{width: 24, height: 24}}
          />
        </View>
      </View>

      <View style={{marginTop: 30, marginLeft: 14}}>
        <Text
          style={{
            color: '#222222',
            fontSize: 34,
            fontFamily: 'Metropolis-SemiBold',
          }}>
          Sign Up
        </Text>
      </View>

      <View
        style={{
          marginTop: 73,
          width: Dimensions.get('window').width - 32,
          marginLeft: 16,
          marginRight: 16,
          height: 64,
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
        }}>
        <View style={{marginTop: 14, marginLeft: 20}}>
          <Text
            style={{
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              color: '#9B9B9B',
            }}>
            Name
          </Text>
          <View style={{marginTop: 4}}>
            <TextInput
              style={{
                fontFamily: 'Metropolis-Regular',
                fontSize: 14,
                color: '#2D2D2D',
              }}
              onChange={name => setName(name)}
            />
          </View>
          <Text>{name}</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
