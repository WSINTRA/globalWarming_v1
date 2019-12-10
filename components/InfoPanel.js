import React from 'react';
import styles from '../style/style';
import {
  Text,
  View,
  VrButton,
  asset,
  Environment,
  Image
} from 'react-360';
import GazeButton from 'react-360-gaze-button';



class InfoPanel extends React.Component {
	state={
		 gazed: false,
		img: {
			name: 'info.png',
			width: 50,
			height: 50,
		},
		text: ""
	}

	onHoverText=()=>{
		this.setState({
			text: "Some information"
		})
	}
	OnHoverExit=()=>{
		this.setState({
					text: ""
				})
	}
	render(){
		let { img } = this.state;
	return (
		  <View style={styles.displayPanel}
           >

        <Image 
        hitSlop={70}
        onEnter={()=>this.onHoverText()} 
        	onExit={()=>this.OnHoverExit()}
        	source={asset(`${img.name}`)} style={{width: img.width, height: img.height}} />
        <View style={styles.infoBox}
         >
          <Text style={styles.infoText}>
            {this.state.text}
          </Text>
        </View>
      </View>
	)
	}
}

export default InfoPanel
