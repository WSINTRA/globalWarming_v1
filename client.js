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
  
  portalButton = new Surface(
    300,
    300,
    Surface.SurfaceShape.Flat
  )
  portalButton.setAngle(
    3,
    0.1
    )

  lakePanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )
  lakePanel.setAngle(
    1, /* yaw angle */
    0 /* pitch angle */
  );

  plasticBottlePanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )
  plasticBottlePanel.setAngle(
    1,
    -0.6
  );
}

class surfaceModule extends Module{

  constructor(){
    super('surfaceModule');
  }

  resizeSurface(width, height, id){

    switch(id){
      case "Portal_1":
      return powerStationPanel.resize(width, height)
      case "Portal_2":
      return lakePanel.resize(width, height)
      case "Portal_3":
      return plasticBottlePanel.resize(width, height)
    }
  }

  powerStationInfo(props){
    r360.renderToSurface(
    r360.createRoot('InfoPanel', { id:"Portal_1", panel:props }),
    powerStationPanel
  )}

  lakeInfo(props){
    r360.renderToSurface(
    r360.createRoot('InfoPanel', { id:"Portal_2", panel:props }),
    lakePanel
  )}

  portalButtonGaze(props){
    r360.renderToSurface(
    r360.createRoot('PortalButton', {id:"Button", panel:props }),
    portalButton
  )}

  plasticBottleInfo(props){
    r360.renderToSurface(
      r360.createRoot('InfoPanel',{id:"Portal_3", panel:props} ),
      plasticBottlePanel
    )
  }

  destroyPanel(somePanel){
   for (let i = somePanel.length - 1; i >= 0; i--) {
     r360.detachRoot(somePanel[i])
   }
  }

}

window.React360 = {init};
