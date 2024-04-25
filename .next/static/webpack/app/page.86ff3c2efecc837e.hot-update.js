"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/case/CaseComponent.jsx":
/*!***********************************************!*\
  !*** ./src/components/case/CaseComponent.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _cesdk_cesdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cesdk/cesdk-js */ \"(app-pages-browser)/./node_modules/@cesdk/cesdk-js/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CaseComponent = ()=>{\n    _s();\n    const cesdkContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    /** @type {[import(\"@cesdk/cesdk-js\").default, Function]} cesdk */ const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const config = {\n            role: \"Adopter\",\n            theme: \"dark\",\n            callbacks: {\n                onExport: \"download\",\n                onUpload: \"local\"\n            },\n            ui: {\n                elements: {\n                    panels: {\n                        settings: true\n                    },\n                    navigation: {\n                        action: {\n                            export: {\n                                show: true\n                            }\n                        }\n                    }\n                }\n            },\n            license: \"jCLo9ijJ7UF_1RO1zc5pj89hzyghMHMTyAcByL_VU62Lx3J2-FrY9tu-TgQTGW98\"\n        };\n        let cesdk;\n        if (video && cesdkContainer.current) {\n            _cesdk_cesdk_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(cesdkContainer.current, config).then(async (instance)=>{\n                cesdk = instance;\n                const engine = cesdk.engine;\n                const layout = \"Horizontal\";\n                // Create a scene optimized for video editing\n                let scene = engine.scene.createVideo();\n                // Create a page and set its dimensions\n                const page = engine.block.create(\"page\");\n                await engine.block.appendChild(scene, page);\n                await engine.block.setWidth(page, 1080);\n                await engine.block.setHeight(page, 1080);\n                engine.block.setDuration(page, 60);\n                // Create a solid color fill for the page\n                const solidColor = engine.block.createFill(\"color\");\n                // Set the color value to black\n                const rgbaBlack = {\n                    r: 0,\n                    g: 0,\n                    b: 0,\n                    a: 1\n                }; // Black color with full opacity\n                engine.block.setColor(solidColor, \"fill/color/value\", rgbaBlack);\n                // Set the fill of the page block to the solid color fill\n                engine.block.setFill(page, solidColor);\n                // Load the selected video into the scene as a block\n                const selectedVideoURL = video ? video.full : null;\n                console.log(\"Selected Video URL:\", selectedVideoURL); // Add this line\n                if (selectedVideoURL) {\n                    // Create a graphic block for the video\n                    const videoBlock = engine.block.create(\"graphic\");\n                    engine.block.setShape(videoBlock, engine.block.createShape(\"rect\"));\n                    const videoFill = engine.block.createFill(\"video\");\n                    engine.block.setString(videoFill, \"fill/video/fileURI\", selectedVideoURL);\n                    engine.block.setFill(videoBlock, videoFill);\n                    // Set duration of the video block\n                    engine.block.setDuration(videoBlock, 60);\n                    // Set position and mode for x and y coordinates\n                    engine.block.setPositionX(videoBlock, 0);\n                    engine.block.setPositionXMode(videoBlock, \"Absolute\"); // or 'Percent' or 'Auto'\n                    engine.block.setPositionY(videoBlock, 236.25);\n                    engine.block.setPositionYMode(videoBlock, \"Absolute\"); // or 'Percent' or 'Auto'\n                    // Set width and height of the video block\n                    engine.block.setWidth(videoBlock, 1080);\n                    engine.block.setWidthMode(videoBlock, \"Absolute\"); // or 'Percent' or 'Auto'\n                    engine.block.setHeight(videoBlock, 607.5);\n                    engine.block.setHeightMode(videoBlock, \"Absolute\"); // or 'Percent' or 'Auto'\n                    // Append the video block to the page\n                    await engine.block.appendChild(page, videoBlock);\n                }\n                // Zoom the scene's camera on the page\n                engine.scene.zoomToBlock(page);\n            });\n        }\n        return ()=>{\n            if (cesdk) {\n                cesdk.dispose();\n            }\n        };\n    }, [\n        cesdkContainer,\n        video\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gap-sm flex h-full w-full flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: selectResourceWrapper,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"h4\",\n                        children: \"Select Video\"\n                    }, void 0, false, {\n                        fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            ...videoSelectionWrapper,\n                            ...video || {}\n                        },\n                        children: VIDEO_URLS.map((someVideo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setVideo(someVideo),\n                                style: videoButtonStyle,\n                                \"data-cy\": \"start-with-video-\".concat(index),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: someVideo.thumbUri,\n                                    style: {\n                                        ...videoStyle,\n                                        ...video === someVideo && videoActiveState || {}\n                                    },\n                                    alt: someVideo.alt\n                                }, void 0, false, {\n                                    fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, someVideo.full, false, {\n                                fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: cesdkWrapperStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: cesdkContainer,\n                    style: cesdkStyle\n                }, void 0, false, {\n                    fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/justinwells/Desktop/IMG.LY3/src/components/case/CaseComponent.jsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CaseComponent, \"rJg5As2Pq/daIskd/s9Qv2BzcKA=\");\n_c = CaseComponent;\nconst caseAssetPath = function(path) {\n    let caseId = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : \"start-with-video\";\n    return \"\".concat(\"http://localhost:3000\").concat(\"\", \"/cases/\").concat(caseId).concat(path);\n};\n// Sample videos are taken from pexels.com:\n// https://www.pexels.com/video/person-decorating-dessert-with-kiwi-7930811/\n// https://www.pexels.com/video/close-up-video-of-an-opened-pomegranate-7033913/\n// https://www.pexels.com/video/a-young-an-squeezing-an-orange-6975806/\nconst VIDEO_URLS = [\n    {\n        full: \"https://firebasestorage.googleapis.com/v0/b/jsm-video.appspot.com/o/prod_videos%2FBasinger%20Designer.mp4?alt=media&token=b8a3701e-d85a-408d-b5c6-e8427032e4b2\",\n        thumbUri: \"https://i.vimeocdn.com/video/1835017255-9587b13ee3a19cad7a6f2dc4dc8e84e889bb7dbedeb3c135e3bfc4c030414d45-d_450x252?r=pad\",\n        alt: \"Basinger Designer\",\n        author: {\n            name: \"Just Share Media\",\n            url: \"https://www.justsharemedia.com\"\n        }\n    },\n    {\n        full: \"https://firebasestorage.googleapis.com/v0/b/jsm-video.appspot.com/o/prod_videos%2Fbeautiful_roofs_prod.mp4?alt=media&token=a97b4fa2-9ea5-49b3-87e7-568adfe468f6\",\n        thumbUri: \"https://i.vimeocdn.com/video/1835022214-da2d324fab1eef5f8ebb14989063415380bcdb28f37aab1639143f7c092ce48f-d_450x252?r=pad\",\n        alt: \"Person Decorating Dessert With Kiwi\",\n        author: {\n            name: \"Just Share Media\",\n            url: \"https://www.justsharemedia.com\"\n        }\n    },\n    {\n        full: \"https://firebasestorage.googleapis.com/v0/b/jsm-video.appspot.com/o/prod_videos%2Fclinton_prod.mp4?alt=media&token=cb42f0c3-6629-4ae7-a275-336f5b091654\",\n        thumbUri: \"https://i.vimeocdn.com/video/1835000277-d050c1cba9e85136e1fe77d8ae46ea891b947bc2b6960db7448bc16d8fc6d8ad-d_450x252?r=pad\",\n        alt: \"Clinton\",\n        author: {\n            name: \"Just Share Media\",\n            url: \"https://www.justsharemedia.com\"\n        }\n    }\n];\nconst cesdkStyle = {\n    position: \"absolute\",\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0\n};\nconst cesdkWrapperStyle = {\n    position: \"relative\",\n    minHeight: \"610\",\n    overflow: \"hidden\",\n    flexGrow: 1,\n    display: \"flex\",\n    borderRadius: \"0.75rem\",\n    boxShadow: \"0px 0px 2px rgba(22, 22, 23, 0.25), 0px 4px 6px -2px rgba(22, 22, 23, 0.12), 0px 2px 2.5px -2px rgba(22, 22, 23, 0.12), 0px 1px 1.75px -2px rgba(22, 22, 23, 0.12)\"\n};\nconst selectResourceWrapper = {\n    width: \"150px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    gap: \"1rem\"\n};\nconst videoSelectionWrapper = {\n    display: \"flex\",\n    flexDirection: \"column\",\n    gap: \"1rem\"\n};\nconst videoStyle = {\n    width: \"100%\",\n    borderRadius: \"6px\",\n    objectFit: \"cover\",\n    cursor: \"pointer\"\n};\nconst videoButtonStyle = {\n    height: \"100%\",\n    boxShadow: \"0px 4px 6px -2px rgba(22, 22, 23, 0.12), 0px 2px 2.5px -2px rgba(22, 22, 23, 0.12), 0px 1px 1.75px -2px rgba(22, 22, 23, 0.12)\",\n    filter: \"drop-shadow(0px 0px 2px rgba(22, 22, 23, 0.25))\"\n};\nconst videoActiveState = {\n    outline: \"2px solid #471aff\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CaseComponent);\nvar _c;\n$RefreshReg$(_c, \"CaseComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Nhc2UvQ2FzZUNvbXBvbmVudC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVnRDtBQUNXO0FBRTNELE1BQU1LLGdCQUFnQjs7SUFDcEIsTUFBTUMsaUJBQWlCSCw2Q0FBTUEsQ0FBQztJQUM5QixnRUFBZ0UsR0FDaEUsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQTtJQUVsQ0YsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxTQUFTO1lBQ2JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxXQUFXO2dCQUNUQyxVQUFVO2dCQUNWQyxVQUFVO1lBQ1o7WUFDQUMsSUFBSTtnQkFDRkMsVUFBVTtvQkFDUkMsUUFBUTt3QkFDTkMsVUFBVTtvQkFDWjtvQkFDQUMsWUFBWTt3QkFDVkMsUUFBUTs0QkFDTkMsUUFBUTtnQ0FDTkMsTUFBTTs0QkFDUjt3QkFDRjtvQkFDRjtnQkFDRjtZQUNGO1lBQ0FDLFNBQVNDLGtFQUErQjtRQUMxQztRQUNBLElBQUlHO1FBQ0osSUFBSXBCLFNBQVNELGVBQWVzQixPQUFPLEVBQUU7WUFDbkM1Qix1REFBaUJBLENBQUM2QixNQUFNLENBQUN2QixlQUFlc0IsT0FBTyxFQUFFbkIsUUFBUXFCLElBQUksQ0FDM0QsT0FBT0M7Z0JBQ0xKLFFBQVFJO2dCQUNSLE1BQU1DLFNBQVNMLE1BQU1LLE1BQU07Z0JBQzNCLE1BQU1DLFNBQVM7Z0JBRWYsNkNBQTZDO2dCQUM3QyxJQUFJQyxRQUFRRixPQUFPRSxLQUFLLENBQUNDLFdBQVc7Z0JBRXBDLHVDQUF1QztnQkFDdkMsTUFBTUMsT0FBT0osT0FBT0ssS0FBSyxDQUFDUixNQUFNLENBQUM7Z0JBQ2pDLE1BQU1HLE9BQU9LLEtBQUssQ0FBQ0MsV0FBVyxDQUFDSixPQUFPRTtnQkFDdEMsTUFBTUosT0FBT0ssS0FBSyxDQUFDRSxRQUFRLENBQUNILE1BQU07Z0JBQ2xDLE1BQU1KLE9BQU9LLEtBQUssQ0FBQ0csU0FBUyxDQUFD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QmtDLFNBQVM7SUFDVEksZUFBZTtJQUNmQyxLQUFLO0FBQ1A7QUFDQSxNQUFNM0IsYUFBYTtJQUNqQnlCLE9BQU87SUFDUEYsY0FBYztJQUNkSyxXQUFXO0lBQ1hDLFFBQVE7QUFDVjtBQUNBLE1BQU1sQyxtQkFBbUI7SUFDdkJtQyxRQUFRO0lBQ1JOLFdBQ0U7SUFDRk8sUUFBUTtBQUNWO0FBQ0EsTUFBTTlCLG1CQUFtQjtJQUN2QitCLFNBQVM7QUFDWDtBQUVBLCtEQUFlaEgsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXNlL0Nhc2VDb21wb25lbnQuanN4Pzg5NGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgQ3JlYXRpdmVFZGl0b3JTREsgZnJvbSAnQGNlc2RrL2Nlc2RrLWpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENhc2VDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNlc2RrQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICAvKiogQHR5cGUge1tpbXBvcnQoXCJAY2VzZGsvY2VzZGstanNcIikuZGVmYXVsdCwgRnVuY3Rpb25dfSBjZXNkayAqL1xuICBjb25zdCBbdmlkZW8sIHNldFZpZGVvXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICByb2xlOiAnQWRvcHRlcicsXG4gICAgICB0aGVtZTogJ2RhcmsnLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uRXhwb3J0OiAnZG93bmxvYWQnLFxuICAgICAgICBvblVwbG9hZDogJ2xvY2FsJ1xuICAgICAgfSxcbiAgICAgIHVpOiB7XG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgcGFuZWxzOiB7XG4gICAgICAgICAgICBzZXR0aW5nczogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgIGV4cG9ydDoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpY2Vuc2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xJQ0VOU0VcbiAgICB9O1xuICAgIGxldCBjZXNkaztcbiAgICBpZiAodmlkZW8gJiYgY2VzZGtDb250YWluZXIuY3VycmVudCkge1xuICAgICAgQ3JlYXRpdmVFZGl0b3JTREsuY3JlYXRlKGNlc2RrQ29udGFpbmVyLmN1cnJlbnQsIGNvbmZpZykudGhlbihcbiAgICAgICAgYXN5bmMgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgY2VzZGsgPSBpbnN0YW5jZTtcbiAgICAgICAgICBjb25zdCBlbmdpbmUgPSBjZXNkay5lbmdpbmU7XG4gICAgICAgICAgY29uc3QgbGF5b3V0ID0gJ0hvcml6b250YWwnO1xuICAgIFxuICAgICAgICAgIC8vIENyZWF0ZSBhIHNjZW5lIG9wdGltaXplZCBmb3IgdmlkZW8gZWRpdGluZ1xuICAgICAgICAgIGxldCBzY2VuZSA9IGVuZ2luZS5zY2VuZS5jcmVhdGVWaWRlbygpO1xuICAgIFxuICAgICAgICAgIC8vIENyZWF0ZSBhIHBhZ2UgYW5kIHNldCBpdHMgZGltZW5zaW9uc1xuICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlbmdpbmUuYmxvY2suY3JlYXRlKCdwYWdlJyk7XG4gICAgICAgICAgYXdhaXQgZW5naW5lLmJsb2NrLmFwcGVuZENoaWxkKHNjZW5lLCBwYWdlKTtcbiAgICAgICAgICBhd2FpdCBlbmdpbmUuYmxvY2suc2V0V2lkdGgocGFnZSwgMTA4MCk7XG4gICAgICAgICAgYXdhaXQgZW5naW5lLmJsb2NrLnNldEhlaWdodChwYWdlLCAxMDgwKTtcblxuICAgICAgICAgIGVuZ2luZS5ibG9jay5zZXREdXJhdGlvbihwYWdlLCA2MCk7XG4gICAgICAgICAgIFxuICAgICAgICAgIC8vIENyZWF0ZSBhIHNvbGlkIGNvbG9yIGZpbGwgZm9yIHRoZSBwYWdlXG4gICAgICAgICAgY29uc3Qgc29saWRDb2xvciA9IGVuZ2luZS5ibG9jay5jcmVhdGVGaWxsKCdjb2xvcicpO1xuXG4gICAgICAgICAgLy8gU2V0IHRoZSBjb2xvciB2YWx1ZSB0byBibGFja1xuICAgICAgICAgIGNvbnN0IHJnYmFCbGFjayA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMSB9OyAvLyBCbGFjayBjb2xvciB3aXRoIGZ1bGwgb3BhY2l0eVxuICAgICAgICAgIGVuZ2luZS5ibG9jay5zZXRDb2xvcihzb2xpZENvbG9yLCAnZmlsbC9jb2xvci92YWx1ZScsIHJnYmFCbGFjayk7XG5cbiAgICAgICAgICAvLyBTZXQgdGhlIGZpbGwgb2YgdGhlIHBhZ2UgYmxvY2sgdG8gdGhlIHNvbGlkIGNvbG9yIGZpbGxcbiAgICAgICAgICBlbmdpbmUuYmxvY2suc2V0RmlsbChwYWdlLCBzb2xpZENvbG9yKTtcblxuICAgICAgICAgIC8vIExvYWQgdGhlIHNlbGVjdGVkIHZpZGVvIGludG8gdGhlIHNjZW5lIGFzIGEgYmxvY2tcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFZpZGVvVVJMID0gdmlkZW8gPyB2aWRlby5mdWxsIDogbnVsbDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIFZpZGVvIFVSTDpcIiwgc2VsZWN0ZWRWaWRlb1VSTCk7IC8vIEFkZCB0aGlzIGxpbmVcbiAgICBcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWaWRlb1VSTCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgZ3JhcGhpYyBibG9jayBmb3IgdGhlIHZpZGVvXG4gICAgICAgICAgICBjb25zdCB2aWRlb0Jsb2NrID0gZW5naW5lLmJsb2NrLmNyZWF0ZSgnZ3JhcGhpYycpO1xuICAgICAgICAgICAgZW5naW5lLmJsb2NrLnNldFNoYXBlKHZpZGVvQmxvY2ssIGVuZ2luZS5ibG9jay5jcmVhdGVTaGFwZSgncmVjdCcpKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvRmlsbCA9IGVuZ2luZS5ibG9jay5jcmVhdGVGaWxsKCd2aWRlbycpO1xuICAgICAgICAgICAgZW5naW5lLmJsb2NrLnNldFN0cmluZyhcbiAgICAgICAgICAgICAgdmlkZW9GaWxsLFxuICAgICAgICAgICAgICAnZmlsbC92aWRlby9maWxlVVJJJyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRWaWRlb1VSTFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVuZ2luZS5ibG9jay5zZXRGaWxsKHZpZGVvQmxvY2ssIHZpZGVvRmlsbCk7XG5cbiAgICAgICAgICAgIC8vIFNldCBkdXJhdGlvbiBvZiB0aGUgdmlkZW8gYmxvY2tcbiAgICAgICAgICAgIGVuZ2luZS5ibG9jay5zZXREdXJhdGlvbih2aWRlb0Jsb2NrLCA2MCk7IFxuXG4gICAgICAgICAgICAvLyBTZXQgcG9zaXRpb24gYW5kIG1vZGUgZm9yIHggYW5kIHkgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGVuZ2luZS5ibG9jay5zZXRQb3NpdGlvblgodmlkZW9CbG9jaywgMCk7XG4gICAgICAgICAgICBlbmdpbmUuYmxvY2suc2V0UG9zaXRpb25YTW9kZSh2aWRlb0Jsb2NrLCAnQWJzb2x1dGUnKTsgLy8gb3IgJ1BlcmNlbnQnIG9yICdBdXRvJ1xuICAgICAgICAgICAgZW5naW5lLmJsb2NrLnNldFBvc2l0aW9uWSh2aWRlb0Jsb2NrLCAyMzYuMjUpO1xuICAgICAgICAgICAgZW5naW5lLmJsb2NrLnNldFBvc2l0aW9uWU1vZGUodmlkZW9CbG9jaywgJ0Fic29sdXRlJyk7IC8vIG9yICdQZXJjZW50JyBvciAnQXV0bydcblxuICAgICAgICAgICAgLy8gU2V0IHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIHZpZGVvIGJsb2NrXG4gICAgICAgICAgICBlbmdpbmUuYmxvY2suc2V0V2lkdGgodmlkZW9CbG9jaywgMTA4MCk7XG4gICAgICAgICAgICBlbmdpbmUuYmxvY2suc2V0V2lkdGhNb2RlKHZpZGVvQmxvY2ssICdBYnNvbHV0ZScpOyAvLyBvciAnUGVyY2VudCcgb3IgJ0F1dG8nXG4gICAgICAgICAgICBlbmdpbmUuYmxvY2suc2V0SGVpZ2h0KHZpZGVvQmxvY2ssIDYwNy41KTtcbiAgICAgICAgICAgIGVuZ2luZS5ibG9jay5zZXRIZWlnaHRNb2RlKHZpZGVvQmxvY2ssICdBYnNvbHV0ZScpOyAvLyBvciAnUGVyY2VudCcgb3IgJ0F1dG8nXG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgdmlkZW8gYmxvY2sgdG8gdGhlIHBhZ2VcbiAgICAgICAgICAgIGF3YWl0IGVuZ2luZS5ibG9jay5hcHBlbmRDaGlsZChwYWdlLCB2aWRlb0Jsb2NrKTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgLy8gWm9vbSB0aGUgc2NlbmUncyBjYW1lcmEgb24gdGhlIHBhZ2VcbiAgICAgICAgICBlbmdpbmUuc2NlbmUuem9vbVRvQmxvY2socGFnZSk7XG4gICAgXG4gXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY2VzZGspIHtcbiAgICAgICAgY2VzZGsuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gIH0sIFtjZXNka0NvbnRhaW5lciwgdmlkZW9dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLXNtIGZsZXggaC1mdWxsIHctZnVsbCBmbGV4LXJvd1wiPlxuICAgICAgPGRpdiBzdHlsZT17c2VsZWN0UmVzb3VyY2VXcmFwcGVyfT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImg0XCI+U2VsZWN0IFZpZGVvPC9oMz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi52aWRlb1NlbGVjdGlvbldyYXBwZXIsXG4gICAgICAgICAgICAuLi4odmlkZW8gfHwge30pXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtWSURFT19VUkxTLm1hcCgoc29tZVZpZGVvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWRlbyhzb21lVmlkZW8pfVxuICAgICAgICAgICAgICBzdHlsZT17dmlkZW9CdXR0b25TdHlsZX1cbiAgICAgICAgICAgICAga2V5PXtzb21lVmlkZW8uZnVsbH1cbiAgICAgICAgICAgICAgZGF0YS1jeT17YHN0YXJ0LXdpdGgtdmlkZW8tJHtpbmRleH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtzb21lVmlkZW8udGh1bWJVcml9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIC4uLnZpZGVvU3R5bGUsXG4gICAgICAgICAgICAgICAgICAuLi4oKHZpZGVvID09PSBzb21lVmlkZW8gJiYgdmlkZW9BY3RpdmVTdGF0ZSkgfHwge30pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhbHQ9e3NvbWVWaWRlby5hbHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17Y2VzZGtXcmFwcGVyU3R5bGV9PlxuICAgICAgICA8ZGl2IHJlZj17Y2VzZGtDb250YWluZXJ9IHN0eWxlPXtjZXNka1N0eWxlfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgY2FzZUFzc2V0UGF0aCA9IChwYXRoLCBjYXNlSWQgPSAnc3RhcnQtd2l0aC12aWRlbycpID0+XG4gIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9IT1NUTkFNRX0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH0vY2FzZXMvJHtjYXNlSWR9JHtwYXRofWA7XG5cbi8vIFNhbXBsZSB2aWRlb3MgYXJlIHRha2VuIGZyb20gcGV4ZWxzLmNvbTpcbi8vIGh0dHBzOi8vd3d3LnBleGVscy5jb20vdmlkZW8vcGVyc29uLWRlY29yYXRpbmctZGVzc2VydC13aXRoLWtpd2ktNzkzMDgxMS9cbi8vIGh0dHBzOi8vd3d3LnBleGVscy5jb20vdmlkZW8vY2xvc2UtdXAtdmlkZW8tb2YtYW4tb3BlbmVkLXBvbWVncmFuYXRlLTcwMzM5MTMvXG4vLyBodHRwczovL3d3dy5wZXhlbHMuY29tL3ZpZGVvL2EteW91bmctYW4tc3F1ZWV6aW5nLWFuLW9yYW5nZS02OTc1ODA2L1xuY29uc3QgVklERU9fVVJMUyA9IFtcbiAge1xuICAgIGZ1bGw6ICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2pzbS12aWRlby5hcHBzcG90LmNvbS9vL3Byb2RfdmlkZW9zJTJGQmFzaW5nZXIlMjBEZXNpZ25lci5tcDQ/YWx0PW1lZGlhJnRva2VuPWI4YTM3MDFlLWQ4NWEtNDA4ZC1iNWM2LWU4NDI3MDMyZTRiMicsXG4gICAgdGh1bWJVcmk6ICdodHRwczovL2kudmltZW9jZG4uY29tL3ZpZGVvLzE4MzUwMTcyNTUtOTU4N2IxM2VlM2ExOWNhZDdhNmYyZGM0ZGM4ZTg0ZTg4OWJiN2RiZWRlYjNjMTM1ZTNiZmM0YzAzMDQxNGQ0NS1kXzQ1MHgyNTI/cj1wYWQnLFxuICAgIGFsdDogJ0Jhc2luZ2VyIERlc2lnbmVyJyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdKdXN0IFNoYXJlIE1lZGlhJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lmp1c3RzaGFyZW1lZGlhLmNvbSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBmdWxsOiAnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9qc20tdmlkZW8uYXBwc3BvdC5jb20vby9wcm9kX3ZpZGVvcyUyRmJlYXV0aWZ1bF9yb29mc19wcm9kLm1wND9hbHQ9bWVkaWEmdG9rZW49YTk3YjRmYTItOWVhNS00OWIzLTg3ZTctNTY4YWRmZTQ2OGY2JyxcbiAgICB0aHVtYlVyaTogJ2h0dHBzOi8vaS52aW1lb2Nkbi5jb20vdmlkZW8vMTgzNTAyMjIxNC1kYTJkMzI0ZmFiMWVlZjVmOGViYjE0OTg5MDYzNDE1MzgwYmNkYjI4ZjM3YWFiMTYzOTE0M2Y3YzA5MmNlNDhmLWRfNDUweDI1Mj9yPXBhZCcsXG4gICAgYWx0OiAnUGVyc29uIERlY29yYXRpbmcgRGVzc2VydCBXaXRoIEtpd2knLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0p1c3QgU2hhcmUgTWVkaWEnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuanVzdHNoYXJlbWVkaWEuY29tJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGZ1bGw6ICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2pzbS12aWRlby5hcHBzcG90LmNvbS9vL3Byb2RfdmlkZW9zJTJGY2xpbnRvbl9wcm9kLm1wND9hbHQ9bWVkaWEmdG9rZW49Y2I0MmYwYzMtNjYyOS00YWU3LWEyNzUtMzM2ZjViMDkxNjU0JyxcbiAgICB0aHVtYlVyaTogJ2h0dHBzOi8vaS52aW1lb2Nkbi5jb20vdmlkZW8vMTgzNTAwMDI3Ny1kMDUwYzFjYmE5ZTg1MTM2ZTFmZTc3ZDhhZTQ2ZWE4OTFiOTQ3YmMyYjY5NjBkYjc0NDhiYzE2ZDhmYzZkOGFkLWRfNDUweDI1Mj9yPXBhZCcsXG4gICAgYWx0OiAnQ2xpbnRvbicsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnSnVzdCBTaGFyZSBNZWRpYScsXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5qdXN0c2hhcmVtZWRpYS5jb20nXG4gICAgfVxuICB9XG5dO1xuXG5jb25zdCBjZXNka1N0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICBsZWZ0OiAwXG59O1xuXG5jb25zdCBjZXNka1dyYXBwZXJTdHlsZSA9IHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG1pbkhlaWdodDogJzYxMCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgZmxleEdyb3c6IDEsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYm9yZGVyUmFkaXVzOiAnMC43NXJlbScsXG4gIGJveFNoYWRvdzpcbiAgICAnMHB4IDBweCAycHggcmdiYSgyMiwgMjIsIDIzLCAwLjI1KSwgMHB4IDRweCA2cHggLTJweCByZ2JhKDIyLCAyMiwgMjMsIDAuMTIpLCAwcHggMnB4IDIuNXB4IC0ycHggcmdiYSgyMiwgMjIsIDIzLCAwLjEyKSwgMHB4IDFweCAxLjc1cHggLTJweCByZ2JhKDIyLCAyMiwgMjMsIDAuMTIpJ1xufTtcblxuY29uc3Qgc2VsZWN0UmVzb3VyY2VXcmFwcGVyID0ge1xuICB3aWR0aDogJzE1MHB4JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgZ2FwOiAnMXJlbSdcbn07XG5cbmNvbnN0IHZpZGVvU2VsZWN0aW9uV3JhcHBlciA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgZ2FwOiAnMXJlbSdcbn07XG5jb25zdCB2aWRlb1N0eWxlID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIGN1cnNvcjogJ3BvaW50ZXInXG59O1xuY29uc3QgdmlkZW9CdXR0b25TdHlsZSA9IHtcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGJveFNoYWRvdzpcbiAgICAnMHB4IDRweCA2cHggLTJweCByZ2JhKDIyLCAyMiwgMjMsIDAuMTIpLCAwcHggMnB4IDIuNXB4IC0ycHggcmdiYSgyMiwgMjIsIDIzLCAwLjEyKSwgMHB4IDFweCAxLjc1cHggLTJweCByZ2JhKDIyLCAyMiwgMjMsIDAuMTIpJyxcbiAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMHB4IDBweCAycHggcmdiYSgyMiwgMjIsIDIzLCAwLjI1KSknXG59O1xuY29uc3QgdmlkZW9BY3RpdmVTdGF0ZSA9IHtcbiAgb3V0bGluZTogJzJweCBzb2xpZCAjNDcxYWZmJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzZUNvbXBvbmVudDsiXSwibmFtZXMiOlsiQ3JlYXRpdmVFZGl0b3JTREsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2FzZUNvbXBvbmVudCIsImNlc2RrQ29udGFpbmVyIiwidmlkZW8iLCJzZXRWaWRlbyIsImNvbmZpZyIsInJvbGUiLCJ0aGVtZSIsImNhbGxiYWNrcyIsIm9uRXhwb3J0Iiwib25VcGxvYWQiLCJ1aSIsImVsZW1lbnRzIiwicGFuZWxzIiwic2V0dGluZ3MiLCJuYXZpZ2F0aW9uIiwiYWN0aW9uIiwiZXhwb3J0Iiwic2hvdyIsImxpY2Vuc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTElDRU5TRSIsImNlc2RrIiwiY3VycmVudCIsImNyZWF0ZSIsInRoZW4iLCJpbnN0YW5jZSIsImVuZ2luZSIsImxheW91dCIsInNjZW5lIiwiY3JlYXRlVmlkZW8iLCJwYWdlIiwiYmxvY2siLCJhcHBlbmRDaGlsZCIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0RHVyYXRpb24iLCJzb2xpZENvbG9yIiwiY3JlYXRlRmlsbCIsInJnYmFCbGFjayIsInIiLCJnIiwiYiIsImEiLCJzZXRDb2xvciIsInNldEZpbGwiLCJzZWxlY3RlZFZpZGVvVVJMIiwiZnVsbCIsImNvbnNvbGUiLCJsb2ciLCJ2aWRlb0Jsb2NrIiwic2V0U2hhcGUiLCJjcmVhdGVTaGFwZSIsInZpZGVvRmlsbCIsInNldFN0cmluZyIsInNldFBvc2l0aW9uWCIsInNldFBvc2l0aW9uWE1vZGUiLCJzZXRQb3NpdGlvblkiLCJzZXRQb3NpdGlvbllNb2RlIiwic2V0V2lkdGhNb2RlIiwic2V0SGVpZ2h0TW9kZSIsInpvb21Ub0Jsb2NrIiwiZGlzcG9zZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwic2VsZWN0UmVzb3VyY2VXcmFwcGVyIiwiaDMiLCJ2aWRlb1NlbGVjdGlvbldyYXBwZXIiLCJWSURFT19VUkxTIiwibWFwIiwic29tZVZpZGVvIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwidmlkZW9CdXR0b25TdHlsZSIsImRhdGEtY3kiLCJpbWciLCJzcmMiLCJ0aHVtYlVyaSIsInZpZGVvU3R5bGUiLCJ2aWRlb0FjdGl2ZVN0YXRlIiwiYWx0IiwiY2VzZGtXcmFwcGVyU3R5bGUiLCJyZWYiLCJjZXNka1N0eWxlIiwiY2FzZUFzc2V0UGF0aCIsInBhdGgiLCJjYXNlSWQiLCJORVhUX1BVQkxJQ19VUkxfSE9TVE5BTUUiLCJORVhUX1BVQkxJQ19VUkwiLCJhdXRob3IiLCJuYW1lIiwidXJsIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJtaW5IZWlnaHQiLCJvdmVyZmxvdyIsImZsZXhHcm93IiwiZGlzcGxheSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIndpZHRoIiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm9iamVjdEZpdCIsImN1cnNvciIsImhlaWdodCIsImZpbHRlciIsIm91dGxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/case/CaseComponent.jsx\n"));

/***/ })

});