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

const surfaceModule = NativeModules.surfaceModule;




class PortalButton extends React.Component {


state = {
  gazed: false,
}
setGazed=()=>{
	console.log("destroy ")
	
surfaceModule.destroyPanel([11,21,31])//These are the panel numbers from r360 _rootSurfaces
Environment.setBackgroundImage(asset('spillway.jpg'))

}
  render() {
   
    return (

      <View>
       <View style={styles.portalButton}>
        
        <GazeButton 
        duration={3000}
        onClick={()=>this.setGazed()}
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