import React from 'react';
import {ReactInstance, Module, Surface} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";///////////
// import WebVRPolyfill from 'webvr-polyfill';

// const polyfill = new WebVRPolyfill();


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
  
  // Render your app content to the default cylinder surface
  surface = r360.getDefaultSurface();

  IntroPage = r360.renderToSurface(
    r360.createRoot('IntroPage'),
    surface
  );


  r360.compositor.setBackground(r360.getAssetURL('mess.jpg'));
  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(SimpleRaycaster);

  powerStationPanel = new Surface(
    140,
    140,
    Surface.SurfaceShape.Flat
  )

  powerStationPanel.setAngle(
    
  -1.99,0.29,0
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
    140,
    140,
    Surface.SurfaceShape.Flat
  )
  lakePanel.setAngle(
    1, /* yaw angle */
    0 /* pitch angle */
  );

  plasticBottlePanel = new Surface(
    140,
    140,
    Surface.SurfaceShape.Flat
  )
  plasticBottlePanel.setAngle(
    1,
    -0.6
  );

  cementInfoPanel = new Surface(
    140,
    140,
      Surface.SurfaceShape.Flat
  )
  cementInfoPanel.setAngle(
    -0.4,
    0.2
  );

  portalButton2 = new Surface(
    440,
    100,
    Surface.SurfaceShape.Flat
  )
  portalButton2.setAngle(
   -0.4,
    0.5
    )

  constructionInfoPanel = new Surface(
    140,
    140,
    Surface.SurfaceShape.Flat
    )
  constructionInfoPanel.setAngle(
    
    3, 0.1, 0.05
    )
  constructionInfoPanel2 = new Surface(
    140,
    140,
    Surface.SurfaceShape.Flat
    )
  constructionInfoPanel2.setAngle(
    0.6, -0.1
    )
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
      case "Portal_4":
      return cementInfoPanel.resize(width, height)
      case "Portal_5":
      return constructionInfoPanel.resize(width, height)
      case "Portal_6":
      return constructionInfoPanel2.resize(width, height)
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
    r360.createRoot('PortalButton1', {id:"Button", panel:props }),
    portalButton
  )}

  plasticBottleInfo(props){
    r360.renderToSurface(
      r360.createRoot('InfoPanel',{id:"Portal_3", panel:props} ),
      plasticBottlePanel
    )
  }
  cementPanel(props){
    r360.renderToSurface(
      r360.createRoot('InfoPanel',{id:"Portal_4", panel:props} ),
      cementInfoPanel
    )
  }
  clickForCementButton(props){
    r360.renderToSurface(
    r360.createRoot('PortalButton2', {id:"Button2", panel:props }),
    portalButton2
    )
  }
  constructionInfo(props){
     r360.renderToSurface(
    r360.createRoot('InfoPanel', {id:"Portal_5", panel:props }),
    constructionInfoPanel
    )
  }
  constructionInfo2(props){
     r360.renderToSurface(
    r360.createRoot('InfoPanel', {id:"Portal_6", panel:props }),
    constructionInfoPanel2
    )
  }

  destroyPanel(somePanel){
   for (let i = somePanel.length - 1; i >= 0; i--) {
     r360.detachRoot(somePanel[i])
   }
  }

}

window.React360 = {init};
