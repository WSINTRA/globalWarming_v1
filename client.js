import React from 'react';
import {ReactInstance, Module, Surface} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";///////////
import WebVRPolyfill from 'webvr-polyfill';    ////// this is for mobile web browsing
const polyfill = new WebVRPolyfill();          //////////


function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
     nativeModules: [        ////// Use this to create connection between client and render
      new surfaceModule(),   //////
    ],
    cursorVisibility: "visible",
    ...options,
  });
  r360.controls.addRaycaster(SimpleRaycaster);
  r360.compositor.setCursorVisibility('visible');
  // Render your app content to the default cylinder surface
  surface = r360.getDefaultSurface();
  IntroPage = r360.renderToSurface(
    r360.createRoot('IntroPage'),
    surface
  );
  r360.compositor.setBackground(r360.getAssetURL('mess.jpg'));

    powerStationPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  powerStationPanel.setAngle(
    4.5, /* yaw angle */
    0.3 /* pitch angle */
  );
}

class surfaceModule extends Module{

  constructor(){
    super('surfaceModule');
  }

  resizeSurface(width, height, id){
    if (id==="powerStation"){
      powerStationPanel.resize(width, height)
    }
  }
  powerStation(props){
    r360.renderToSurface(
    r360.createRoot('InfoPanel', { id:"powerStation", panel:props }),
    powerStationPanel
  )}

  destroyPanel(somePanel){
    r360.detachRoot(window[somePanel]) //evaluates the incoming string to its value
  }

}

window.React360 = {init};
