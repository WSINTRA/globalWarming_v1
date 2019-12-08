import React from 'react';
import styles from './style/style'
import {
  AppRegistry,
  Text,
  View,
  VrButton
} from 'react-360';

export default class globalWarming_v1 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            GLOBAL WARMING 
            </Text>
            <Text style={styles.title}>
            INTERACTIVE QUIZ
          </Text>
        </View>
         <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Take a look around & stare at the enter box when your ready!
        </Text>
        <VrButton style={styles.enterButton}>
        <Text style={styles.enterButtonText}>ENTER</Text>
        </VrButton>
        </View>
      </View>
    );
  }
};


AppRegistry.registerComponent('globalWarming_v1', () => globalWarming_v1);
