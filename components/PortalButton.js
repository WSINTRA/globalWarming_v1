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

const surfaceModule = NativeModules.surfaceModule;




class PortalButton extends React.Component {


state = {
  gazed: false,
  portal: Portals.Intro
}
setGazed=(Portals)=>{
	console.log("destroy ", Portals)
	
surfaceModule.destroyPanel([11,21,31])//These are the panel numbers from r360 _rootSurfaces
Environment.setBackgroundImage(asset('spillway.jpg'))
surfaceModule.plasticBottleInfo({...Portals})

}
  render() {
   const { portal } = this.state
    return (

      <View>
       <View style={styles.portalButton}>
        
        <GazeButton 
        duration={3000}
        onClick={()=>this.setGazed(Portals)}
        render={ (remainingTime, isGazed) => (
          <View>
            <Text style={styles.portalButtonText}>
            {  `ENTER NEXT PORTAL IN ${remainingTime}ms` }
            </Text>
          </View> ) }
        /></View>
      </View>
    )
  }
}

export default PortalButton;