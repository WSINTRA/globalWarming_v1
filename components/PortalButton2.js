import React from 'react';
import styles from '../style/style';
import {
  Text,
  View,
  VrButton,
  asset,
  Environment,
  NativeModules,
  Image
} from 'react-360';
import GazeButton from 'react-360-gaze-button';
import Portals from '../data/data'
import RollPitchYaw from '../data/yawCalc'

const surfaceModule = NativeModules.surfaceModule;




class PortalButton2 extends React.Component {


state = {
  gazed: false,
  portal: Portals.Intro
}
setGazed=(Portals)=>{
	console.log("destroy ", Portals)
	
surfaceModule.destroyPanel([41,51,61])//These are the panel numbers from r360 _rootSurfaces
Environment.setBackgroundImage(asset('constructionSite.jpg'))
surfaceModule.constructionInfo({...Portals})
surfaceModule.constructionInfo2({...Portals})

}
  render() {
   const { portal } = this.state
    return (

      <View>
       <View style={styles.portalButton2}>
        
        <GazeButton 
        duration={3000}
        onClick={()=>this.setGazed(Portals)}
        render={ (remainingTime, isGazed) => (
          <View>
            <Text style={styles.portalButton2Text}>
            {  `Construction site in ${remainingTime}ms` }
            </Text>
          </View> ) }
        /></View>
      </View>
    )
  }
}

export default PortalButton2;