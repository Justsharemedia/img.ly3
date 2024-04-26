'use client';

import CreativeEditorSDK from '@cesdk/cesdk-js';
import React, { useEffect, useRef } from 'react';

const CaseComponent = () => {
  const cesdkContainer = useRef(null);

  useEffect(() => {
    const getVideoPathFromUrl = () => {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const encodedVideoPath = params.get('video_path'); // Get the encoded video path from the URL parameter
      if (encodedVideoPath) {
        const decodedOnce = decodeURIComponent(encodedVideoPath); // First decoding
        const fullyDecodedVideoPath = decodeURIComponent(decodedOnce); // Second decoding because of double encoding
        console.log('Encoded Video Path:', encodedVideoPath);
        console.log('Decoded Video Path:', fullyDecodedVideoPath);
        return fullyDecodedVideoPath;
      }
      return null; // Return null if video_path is not provided
    };
  
    const videoPath = getVideoPathFromUrl();
    console.log('Final Video Path used:', videoPath);
  
    console.log('License Key:', process.env.NEXT_PUBLIC_LICENSE);

    const config = {
      role: 'Adopter',
      theme: 'dark',
      callbacks: {
        onExport: 'download',
        onUpload: 'local'
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
          const engine = cesdk.engine;
          const layout = 'Horizontal';
    
          let scene = engine.scene.createVideo();
          const page = engine.block.create('page');
          await engine.block.appendChild(scene, page);
          await engine.block.setWidth(page, 1080);
          await engine.block.setHeight(page, 1080);
  
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
  borderRadius: '0.75rem',
  boxShadow:
    '0px 0px 2px rgba(22, 22, 23, 0.25), 0px 4px 6px -2px rgba(22, 22, 23, 0.12), 0px 2px 2.5px -2px rgba(22, 22, 23, 0.12), 0px 1px 1.75px -2px rgba(22, 22, 23, 0.12)'
};


export default CaseComponent;