import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import HomeButton from './HomeButton';
import ChatButton from './ChatButton';
import OptionButton from './OptionButton';
import Feed from './Feed';

export default function App() {
  return (
    <View style={styles.container}>
        
       <Feed/>
        <View style={ styles.bottomView} >
                  <HomeButton />

                  <ChatButton />

                  <OptionButton />
         </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  flexDirection: 'row',
    backgroundColor: '#ffff00',
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
