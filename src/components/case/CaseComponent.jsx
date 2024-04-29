'use client';

import CreativeEditorSDK from '@cesdk/cesdk-js';
import React, { useEffect, useRef } from 'react';

const CaseComponent = () => {
  const cesdkContainer = useRef(null);
  let engine;

  useEffect(() => {
    const getVideoPathFromUrl = () => {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const videoPath = params.get('video_path'); 
      console.log('Video Path used:', videoPath);
      return videoPath; 
    };
  
    const videoPath = getVideoPathFromUrl();
    console.log('Final Video Path used:', videoPath);

    const params = new URLSearchParams(window.location.search);
    const customer_id = params.get('customer_id');
    console.log('Got the customer_ID', customer_id)
  
    console.log('License Key:', process.env.NEXT_PUBLIC_LICENSE);


    const config = {
      role: 'Adopter',
      theme: 'dark',
      baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.25.0/assets',
         core: {
             baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.25.0/assets/core/'
        },
        callbacks: {
          onUnsupportedBrowser: () => {
            window.alert(
              'Your current browser is not supported.\nPlease use one of the following:\n\n- Mozilla Firefox 86 or newer\n- Apple Safari 14.1 or newer\n- Microsoft Edge 88 or newer\n- Google Chrome 88 or newer'
            );
          },
          onExport: async (scene) => {
            console.info('Export callback!');
        
            const data = {
              timestamp: new Date().toISOString(), 
              customer_id: customer_id, 
              callback_type: 'export',
              callback_message: 'User triggered export'
            };
        
            try {
              const response = await fetch('https://justin-16657.bubbleapps.io/version-test/api/1.1/wf/editor_update_user', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
              });
        
              if (!response.ok) {
                throw new Error('Failed to update user in Bubble.');
              }
  
              // Continue with video export logic
              const mimeType = 'video/mp4';
              const progressCallback = (renderedFrames, encodedFrames, totalFrames) => {
                console.log(
                  'Rendered',
                  renderedFrames,
                  'frames and encoded',
                  encodedFrames,
                  'frames out of',
                  totalFrames
                );
              };
              const blob = await engine.block.exportVideo(
                page,
                mimeType,
                progressCallback,
                {}
              );

              const anchor = document.createElement('a');
              anchor.href = URL.createObjectURL(blob);
              anchor.download = 'exported-video.mp4';
              anchor.click();
            } catch (error) {
              console.error('Error:', error);
            }
          },
          onBack: () => {
            window.alert('Back callback!');
          },
          onClose: () => {
            window.alert('Close callback!');
          },
          onSave: (scene) => {
            window.alert('Save callback!');
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
              export: {
                show: true
              }
            }
          }
        }
      },
      license: process.env.NEXT_PUBLIC_LICENSE
    };
  
    let cesdk;
    if (cesdkContainer.current) {
      CreativeEditorSDK.create(cesdkContainer.current, config).then(
        async (instance) => {
          cesdk = instance;
          engine = cesdk.engine;
          const layout = 'Horizontal';
    
          let scene = engine.scene.createVideo();
          const page = engine.block.create('page');
          await engine.block.appendChild(scene, page);
          await engine.block.setWidth(page, 1080);
          await engine.block.setHeight(page, 1080);

          cesdk.engine.editor.setSettingBool('page/title/show', false);
          await cesdk.addDefaultAssetSources();
          await cesdk.addDemoAssetSources({ sceneMode: 'Video' });
  
          engine.block.setDuration(page, 60);
           
          const solidColor = engine.block.createFill('color');
          const rgbaBlack = { r: 0, g: 0, b: 0, a: 1 };
          engine.block.setColor(solidColor, 'fill/color/value', rgbaBlack);
          engine.block.setFill(page, solidColor);
  
          if (videoPath) {
            const videoBlock = engine.block.create('graphic');
            engine.block.setShape(videoBlock, engine.block.createShape('rect'));
            const videoFill = engine.block.createFill('video');
            engine.block.setString(videoFill, 'fill/video/fileURI', videoPath);
            engine.block.setFill(videoBlock, videoFill);
  
            engine.block.setDuration(videoBlock, 60);
            engine.block.setPositionX(videoBlock, 0);
            engine.block.setPositionXMode(videoBlock, 'Absolute');
            engine.block.setPositionY(videoBlock, 236.25);
            engine.block.setPositionYMode(videoBlock, 'Absolute');
            engine.block.setWidth(videoBlock, 1080);
            engine.block.setWidthMode(videoBlock, 'Absolute');
            engine.block.setHeight(videoBlock, 607.5);
            engine.block.setHeightMode(videoBlock, 'Absolute');
  
            await engine.block.appendChild(page, videoBlock);
          }
    
          engine.scene.zoomToBlock(page);
        }
      );
    }
  
    return () => {
      if (cesdk) {
        cesdk.dispose();
      }
    };
  
  }, [cesdkContainer]);
  

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
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

const cesdkWrapperStyle = {
  position: 'relative',
  minHeight: '610',
  overflow: 'hidden',
  flexGrow: 1,
  display: 'flex',
  boxShadow:
    '0px 0px 2px rgba(22, 22, 23, 0.25), 0px 4px 6px -2px rgba(22, 22, 23, 0.12), 0px 2px 2.5px -2px rgba(22, 22, 23, 0.12), 0px 1px 1.75px -2px rgba(22, 22, 23, 0.12)'
};


export default CaseComponent;