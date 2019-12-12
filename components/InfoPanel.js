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


class InfoPanel extends React.Component {
	state={
		gazed: false,
		img: {
			name: 'info.png',
			width: 100,
			height: 100,
		},
		text: ""
	}

_changeSurfaceDimension(width, height, id){
	surfaceModule.resizeSurface(width, height, id)
}

	onHoverText=(props)=>{
		
		let text = props.panel[`${props.id}`].infoText
		let title = props.panel[`${props.id}`].name
		
		
		this.setState({
			text: text,
			title: title,
			img: {
				name: 'info.png',
				width:0,
				height:0
			}
		})

		switch(props.id){
		      case "Portal_1":
		      return this._changeSurfaceDimension(900,900, props.id)
		      case "Portal_2":
		      return this._changeSurfaceDimension(1000,900, props.id)
		    }
	}
	OnHoverExit=(props)=>{
		this._changeSurfaceDimension(100,100, props.id)
		this.setState({
					text: "",
					img: {
							name: 'info.png',
							width:100,
							height:100
						}
				})
	}
	render(){
		let { img } = this.state;
		
	return (
		  <View style={styles.displayPanel} >
		        <Image 
		        hitSlop={1800}
		        onEnter={()=>this.onHoverText(this.props)} 
	        	onExit={()=>this.OnHoverExit(this.props)}
	        	source={asset(`${img.name}`)} 
	        	style={{width: img.width, height: img.height}} 
		        />
	        <View style={styles.infoBox}>
	          <Text style={styles.infoText}>
	          {this.state.title + "\n"}
	            {this.state.text}
	          </Text>
	        </View>
      </View>
	)
	}
}

export default InfoPanel
