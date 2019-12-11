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
import Portals from '../data/data'

class IntroPage extends React.Component {


state = {
  gazed: false,
  portal: Portals.Intro
}

setGazed=(Portals)=>{

Environment.setBackgroundImage(asset('powerStationLake.jpg'))

//Need to destroy the intro panel once the enter button is clicked
surfaceModule.destroyPanel('IntroPage')
surfaceModule.powerStation({...Portals.Portal_1})
}

  render() {
   
    const { portal } = this.state
    return (

      <View style={styles.panel}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            GLOBAL WARMING 
            </Text>
            <Text style={styles.title}>
            {portal.name}
          </Text>
        </View>
         <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {portal.infoText}
        </Text>
        <GazeButton 
        duration={3000}
        onClick={()=>this.setGazed(Portals)}
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