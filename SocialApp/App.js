import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import HomeButton from './HomeButton';
import ChatButton from './ChatButton';
import SettingButton from './SettingButton';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.font}> Insert Feed Here </Text>

        <View style={ styles.bottomView} >
                  <HomeButton />

                  <ChatButton />

                  <SettingButton />
         </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  flexDirection: 'row',
  //  backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0


  },

  bottomView:{
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#6495ed',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0


  },

  font: {
    fontSize: 24
  }
});
