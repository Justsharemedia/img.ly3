'use client';

import CreativeEditorSDK from '@cesdk/cesdk-js';
import React, { useEffect, useRef, useState } from 'react';

const CaseComponent = () => {
  const cesdkContainer = useRef(null);
  const [cesdk, setCesdk] = useState(null);
  const [page, setPage] = useState(null);

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
    console.log('Got the customer_ID', customer_id);

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
        onExport: async () => {
          console.info('Export callback initiated.');
          if (cesdk && page) {
            const mimeType = 'video/mp4';
            const progressCallback = (renderedFrames, encodedFrames, totalFrames) => {
              console.log(`Progress: ${renderedFrames}/${encodedFrames}/${totalFrames}`);
            };
            try {
              const blob = await cesdk.engine.block.exportVideo(page, mimeType, progressCallback);
              const anchor = document.createElement('a');
              anchor.href = URL.createObjectURL(blob);
              anchor.download = 'exported-video.mp4';
              anchor.click();
            } catch (error) {
              console.error('Error exporting video:', error);
            }
          }

          // Notify Bubble app about the export event
          const data = {
            timestamp: new Date().toISOString(),
            customer_id: customer_id,
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
          .then(data => console.log('Success:', data))
          .catch((error) => console.error('Error:', error));
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
              export: {
                show: true
              }
            }
          }
        }
      },
      license: process.env.NEXT_PUBLIC_LICENSE
    };

    if (cesdkContainer.current) {
      CreativeEditorSDK.create(cesdkContainer.current, config).then(instance => {
        setCesdk(instance);
        const newPage = instance.engine.block.create('page');
        setPage(newPage);
        instance.engine.block.appendChild(newPage, instance.engine.block.create('video'));
        instance.engine.block.setWidth(newPage, 1080);
        instance.engine.block.setHeight(newPage, 1080);

        instance.engine.editor.setSettingBool('page/title/show', false);
        instance.addDefaultAssetSources();
        instance.addDemoAssetSources({ sceneMode: 'Video' });

        instance.engine.block.setDuration(newPage, 60);
        const solidColor = instance.engine.block.createFill('color');
        const rgbaBlack = { r: 0, g: 0, b: 0, a: 1 };
        instance.engine.block.setColor(solidColor, 'fill/color/value', rgbaBlack);
        instance.engine.block.setFill(newPage, solidColor);

        if (videoPath) {
          const videoBlock = instance.engine.block.create('graphic');
          instance.engine.block.setShape(videoBlock, instance.engine.block.createShape('rect'));
          const videoFill = instance.engine.block.createFill('video');
          instance.engine.block.setString(videoFill, 'fill/video/fileURI', videoPath);
          instance.engine.block.setFill(videoBlock, videoFill);

          instance.engine.block.setDuration(videoBlock, 60);
          instance.engine.block.setPositionX(videoBlock, 0);
          instance.engine.block.setPositionXMode(videoBlock, 'Absolute');
          instance.engine.block.setPositionY(videoBlock, 236.25);
          instance.engine.block.setPositionYMode(videoBlock, 'Absolute');
          instance.engine.block.setWidth(videoBlock, 1080);
          instance.engine.block.setHeight(videoBlock, 607.5);
          instance.engine.block.appendChild(newPage, videoBlock);
        }

        instance.engine.scene.zoomToBlock(newPage);
      });
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
  top: 0, right: 0, bottom: 0, left: 0
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
