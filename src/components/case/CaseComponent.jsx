'use client';

import CreativeEditorSDK from '@cesdk/cesdk-js';
import React, { useEffect, useRef } from 'react';

const CaseComponent = () => {
  const cesdkContainer = useRef(null);
  let cesdk;
  let page;

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "https://justin-16657.bubbleapps.io") {
        console.error("Received message from unauthorized origin:", event.origin);
        return;
      }
      
      const { video_path, brand_logo, customer_id, video_id, video_location } = event.data;
      console.log("Received data via postMessage:", event.data);
      
      if (cesdkContainer.current && !cesdk) {
        initializeSDK(video_path, brand_logo, video_id, video_location, customer_id);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (cesdk) {
        cesdk.dispose();
        console.log("CESDK instance disposed");
      }
    };
  }, []);

  const initializeSDK = (videoPath, brandLogoUrl, videoId, videoLocation, customerId) => {
    console.log("Initializing SDK with data:", { videoPath, brandLogoUrl, videoId, videoLocation, customerId });
    CreativeEditorSDK.create(cesdkContainer.current, {
      role: 'Adopter',
      theme: 'dark',
      baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.25.0/assets',
      core: {
        baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.25.0/assets/core/'
      },
      callbacks: {
        onUnsupportedBrowser: () => {
          window.alert('Your current browser is not supported.\nPlease use one of the following:\n\n- Mozilla Firefox 86 or newer\n- Apple Safari 14.1 or newer\n- Microsoft Edge 88 or newer\n- Google Chrome 88 or newer');
        },
        onExport: async (scene) => {
          console.info('Export callback!');
          const data = {
            timestamp: new Date().toISOString(),
            customer_id: customerId,
            video_id: videoId,
            video_location: videoLocation,
            callback_type: 'export',
            callback_message: 'User triggered export'
          };

          fetch('https://justin-16657.bubbleapps.io/version-test/api/1.1/wf/editor_update_user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data => console.log('Success:', data));
        },
        onBack: () => window.alert('Back callback!'),
        onClose: () => window.alert('Close callback!'),
        onSave: (scene) => {
          window.alert('Save callback!');
          console.info(scene);
        },
        onDownload: (scene) => {
          window.alert('Download callback!');
          console.info(scene);
        },
      },
      ui: {
        elements: {
          panels: {
            settings: true
          },
          navigation: {
            action: {
              save: true,
              export: {
                show: true,
                format: ['video/mp4']
              },
            }
          }
        }
      },
      license: process.env.NEXT_PUBLIC_LICENSE
    }).then(async (instance) => {
      cesdk = instance;
      console.log("CESDK instance created:", cesdk);
      // Additional SDK setup can be performed here
    }).catch(error => {
      console.error("Error initializing CESDK:", error);
    });
  };

  // Setup editor with video and brand logo
  const setupEditor = (cesdk, videoPath, brandLogoUrl) => {
    const engine = cesdk.engine;
    let scene = engine.scene.createVideo();
    page = engine.block.create('page');
    engine.block.appendChild(scene, page);

    engine.block.setWidth(page, 1080);
    engine.block.setHeight(page, 1080);
    cesdk.engine.editor.setSettingBool('page/title/show', false);
    cesdk.addDefaultAssetSources();
    cesdk.addDemoAssetSources({ sceneMode: 'Video' });

    // Video setup
    const videoBlock = engine.block.create('graphic');
    engine.block.setShape(videoBlock, engine.block.createShape('rect'));
    const videoFill = engine.block.createFill('video');
    engine.block.setString(videoFill, 'fill/video/fileURI', videoPath);
    engine.block.setFill(videoBlock, videoFill);
    engine.block.setDuration(videoBlock, 60);
    engine.block.setPositionX(videoBlock, 0);
    engine.block.setPositionY(videoBlock, 236.25);
    engine.block.setWidth(videoBlock, 1080);
    engine.block.setHeight(videoBlock, 607.5);
    engine.block.appendChild(page, videoBlock);

    // Brand logo setup
    if (brandLogoUrl) {
      const logoBlock = engine.block.create('graphic');
      engine.block.setShape(logoBlock, engine.block.createShape('rect'));
      const logoFill = engine.block.createFill('image');
      engine.block.setString(logoFill, 'fill/image/fileURI', brandLogoUrl);
      engine.block.setFill(logoBlock, logoFill);
      engine.block.setPositionX(logoBlock, 10); 
      engine.block.setPositionY(logoBlock, 10); 
      engine.block.setWidth(logoBlock, 100); 
      engine.block.setHeight(logoBlock, 100); 
      engine.block.appendChild(page, logoBlock);
    }

    engine.scene.zoomToBlock(page);
  };

  return (
    <div className="gap-sm flex h-full w-full flex-row">
      <div style={cesdkWrapperStyle}>
        <div ref={cesdkContainer} style={cesdkStyle}></div>
      </div>
    </div>
  );
};

const cesdkStyle = {
  position: 'absolute',
  top: 0, right: 0, bottom: 0, left: 0
};

const cesdkWrapperStyle = {
  position: 'relative', minHeight: '610', overflow: 'hidden', flexGrow: 1, display: 'flex',
  boxShadow: '0px 0px 2px rgba(22, 22, 23, 0.25), 0px 4px 6px -2px rgba(22, 22, 23, 0.12), 0px 2px 2.5px -2px rgba(22, 22, 23, 0.12), 0px 1px 1.75px -2px rgba(22, 22, 23, 0.12)'
};

export default CaseComponent;