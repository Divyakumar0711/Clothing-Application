import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import React from 'react';
import CustomeHeader from '../../components/CustomeHeader';
import Colors from '../../utils/Colors';
import Constant from '../../utils/Constant';
import FontFamily from '../../utils/FontFamily';
import FontSize from '../../utils/FontSize';

const SignUpScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <CustomeHeader
        headerVisible={true}
        isLeftButtonEnabled={true}
        leftImage={require('../../assets/images/Arrow_Icon.png')}
        leftImageWidth={24}
        leftImageHeight={24}
      />

      <View style={styles.HeaderTextContainer}>
        <Text style={styles.HeaderText}>Sign Up</Text>
      </View>

       
      
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    backgroundColor: Colors.BACKGROUND,
  },
  HeaderTextContainer: {
    width: Dimensions.get('window').width,
    marginLeft: 14,
    marginTop: 30,
  },
  HeaderText: {
    fontFamily: FontFamily.MetropolisBold,
    fontSize: FontSize.ThreeFour,
    color: Colors.BLACK,
  },
});
