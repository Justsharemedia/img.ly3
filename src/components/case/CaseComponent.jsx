'use client';

import CreativeEditorSDK from '@cesdk/cesdk-js';
import React, { useEffect, useRef, useState } from 'react';

const CaseComponent = () => {
  const cesdkContainer = useRef(null);
  /** @type {[import("@cesdk/cesdk-js").default, Function]} cesdk */
  const [video, setVideo] = useState(null);


  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const videoPath = queryParams.get('video_path');
  
    if (videoPath) {
      // Decode the videoPath to get the original URL
      const decodedVideoPath = decodeURIComponent(videoPath);
      setVideo({ 
        full: decodedVideoPath
      });
    }
  }, []);
  
  useEffect(() => {
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
    if (video && cesdkContainer.current) {
      CreativeEditorSDK.create(cesdkContainer.current, config).then(
        async (instance) => {
          cesdk = instance;
          const engine = cesdk.engine;
          const layout = 'Horizontal';
    
          // Create a scene optimized for video editing
          let scene = engine.scene.createVideo();
    
          // Create a page and set its dimensions
          const page = engine.block.create('page');
          await engine.block.appendChild(scene, page);
          await engine.block.setWidth(page, 1080);
          await engine.block.setHeight(page, 1080);

          engine.block.setDuration(page, 60);
           
          // Create a solid color fill for the page
          const solidColor = engine.block.createFill('color');

          // Set the color value to black
          const rgbaBlack = { r: 0, g: 0, b: 0, a: 1 }; // Black color with full opacity
          engine.block.setColor(solidColor, 'fill/color/value', rgbaBlack);

          // Set the fill of the page block to the solid color fill
          engine.block.setFill(page, solidColor);

          // Load the selected video into the scene as a block
          const selectedVideoURL = video ? video.full : null;
          console.log("Selected Video URL:", selectedVideoURL); // Add this line
    
          if (selectedVideoURL) {
            // Create a graphic block for the video
            const videoBlock = engine.block.create('graphic');
            engine.block.setShape(videoBlock, engine.block.createShape('rect'));
            const videoFill = engine.block.createFill('video');
            engine.block.setString(
              videoFill,
              'fill/video/fileURI',
              selectedVideoURL
            );
            engine.block.setFill(videoBlock, videoFill);

            // Set duration of the video block
            engine.block.setDuration(videoBlock, 60); 

            // Set position and mode for x and y coordinates
            engine.block.setPositionX(videoBlock, 0);
            engine.block.setPositionXMode(videoBlock, 'Absolute'); // or 'Percent' or 'Auto'
            engine.block.setPositionY(videoBlock, 236.25);
            engine.block.setPositionYMode(videoBlock, 'Absolute'); // or 'Percent' or 'Auto'

            // Set width and height of the video block
            engine.block.setWidth(videoBlock, 1080);
            engine.block.setWidthMode(videoBlock, 'Absolute'); // or 'Percent' or 'Auto'
            engine.block.setHeight(videoBlock, 607.5);
            engine.block.setHeightMode(videoBlock, 'Absolute'); // or 'Percent' or 'Auto'

            // Append the video block to the page
            await engine.block.appendChild(page, videoBlock);
          }
    
          // Zoom the scene's camera on the page
          engine.scene.zoomToBlock(page);
    
 
        }
      );
    }
    
    return () => {
      if (cesdk) {
        cesdk.dispose();
      }
    };
    
  }, [cesdkContainer, video]);

  return (
    <div style={cesdkWrapperStyle}>
      <div ref={cesdkContainer} style={cesdkStyle}></div>
    </div>
  );
};  

const caseAssetPath = (path, caseId = 'start-with-video') =>
  `${process.env.NEXT_PUBLIC_URL_HOSTNAME}${process.env.NEXT_PUBLIC_URL}/cases/${caseId}${path}`;

// Sample videos are taken from pexels.com:
// https://www.pexels.com/video/person-decorating-dessert-with-kiwi-7930811/
// https://www.pexels.com/video/close-up-video-of-an-opened-pomegranate-7033913/
// https://www.pexels.com/video/a-young-an-squeezing-an-orange-6975806/


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