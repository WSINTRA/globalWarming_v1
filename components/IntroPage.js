import React from 'react';
import styles from '../style/style';
import {
  Text,
  View,
  VrButton,
  asset,
  Environment,
   NativeModules,
} from 'react-360';
const surfaceModule = NativeModules.surfaceModule;
import GazeButton from 'react-360-gaze-button';



class IntroPage extends React.Component {

state = {
  gazed: false,
  portal: "INTERACTIVE QUIZ"
}

setGazed=()=>{
Environment.setBackgroundImage(asset('powerStationLake.jpg'))
surfaceModule.powerStation()
//Need to destroy the intro panel once the enter button is clicked
surfaceModule.destroyPanel('IntroPage')
}

  render() {
    const { gazed, portal } = this.state
    
    return (

      <View style={styles.panel}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            GLOBAL WARMING 
            {console.log("HERE", this.props)}
            </Text>
            <Text style={styles.title}>
            {portal}
          </Text>
        </View>
         <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Take a look around & stare at the enter box when your ready!
        </Text>
        <GazeButton 
        duration={3000}
        onClick={this.setGazed}
        render={ (remainingTime, isGazed) => (
          <View style={styles.enterButton}>
            <Text style={styles.enterButtonText}>
            {  `ENTER BY STARING FOR ${remainingTime}ms` }
            </Text>
          </View> ) }
        /></View>
      </View>
    )
  }
}

export default IntroPage;