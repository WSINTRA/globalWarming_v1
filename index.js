import React from 'react';
import {  AppRegistry } from 'react-360';
import IntroPage from './components/IntroPage';
import InfoPanel from './components/InfoPanel';
import PortalButton1 from './components/PortalButton1'
import PortalButton2 from './components/PortalButton2'

AppRegistry.registerComponent('PortalButton1', () => PortalButton1);
AppRegistry.registerComponent('PortalButton2', () => PortalButton2);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
AppRegistry.registerComponent('IntroPage', () => IntroPage);

