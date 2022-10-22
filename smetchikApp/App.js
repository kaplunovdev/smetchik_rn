
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App=()  => {
 
  return (
    <View>
      <Text style={styles.titleApp}>Сметчик</Text>
    </View>
  
  );
};

const styles = StyleSheet.create({

  titleApp: {
    fontSize: 55,
    textAlign:'center'
    
  },


});

export default App;
