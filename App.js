import React from 'react';
import {Text, View} from 'react-native';
import SignUpScreen from './src/screens/AuthFlow/SignUpScreen';

const App = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    {/* <Text style={{fontSize: 30, 
    }}>Hello</Text> */}
    <SignUpScreen />
  </View>
);

export default App;
