// import React from 'react';
// import portals from './data/data';
// import { asset, Environment } from 'react-360';

// const State={
// 	portalName: portals.Intro.name,
// 	infoPanel: portals.Intro.infoPanel
// }

// const listeners = new Set();

// function updateComponents(){
// 	for(const cb of listeners.values() ){
// 		debugger
// 		cb();
// 	}
// }

// export function changePortal(roomSelection){

// 	let roomName = roomSelection;
// 	State.portalName = roomName;
// 	State.infoPanel = portals[`${roomName}`].infoPanel

// 	updateComponents();
// }

// export function connect(Component){
// 	return class Wrapper extends React.Component {
// 		state={
// 			portalName: State.portalName,
// 			infoPanel: State.infoPanel
// 		}
// 		_listener=()=>{
// 			this.setState({
// 			portalName: State.portalName,
// 			infoPanel: State.infoPanel
// 			})
// 		}

// 		componentDidMount(){
// 			listeners.add(this._listeners)
// 		}

// 		render(){
// 			return <Component 
// 			{...this.props}
// 			portalName={this.state.portalName}
// 			infoPanel={this.state.infoPanel}
// 			/>
// 		}
// 	}
// }
