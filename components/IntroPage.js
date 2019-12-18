import React from 'react';
import styles from '../style/style';
import {
  Text,
  View,
  VrButton,
  asset,
  Image,
  Environment,
   NativeModules,
} from 'react-360';
const {AudioModule} = NativeModules;
const surfaceModule = NativeModules.surfaceModule;
import GazeButton from 'react-360-gaze-button';
import Portals from '../data/data'


AudioModule.playEnvironmental({
  source: asset('/audio/waterway.wav'),
  volume: 0.3, // play at 3/10 original volume
});

class IntroPage extends React.Component {


state = {
  gazed: false,
  portal: Portals.Intro
}

playAmbientMusic=()=>{
        AudioModule.playEnvironmental({
          source: asset('/audio/waterway.wav'),
          volume: 0.3, 
          });  
  }

setGazed=(Portals)=>{

this.playAmbientMusic()

Environment.setBackgroundImage(asset('powerStationLake.jpg'))
//Need to destroy the intro panel once the enter button is clicked
surfaceModule.destroyPanel([1]) //Takes an array of r360 _rootSurfaces
surfaceModule.powerStationInfo({...Portals, })
surfaceModule.lakeInfo({...Portals, })
surfaceModule.portalButtonGaze()

}

componentDidMount(){
  debugger
}

  render() {
   
    const { portal } = this.state
    return (

      <View style={styles.panel}>

        <View style={styles.titleBox}>
          <Text style={styles.title}>
            GLOBAL WARMING FACT FINDER
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
        duration={1000}
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