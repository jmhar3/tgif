"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/activity/window/ActivityHighlight.tsx":
/*!**************************************************************!*\
  !*** ./src/components/activity/window/ActivityHighlight.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActivityHighlight\": function() { return /* binding */ ActivityHighlight; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/ActivityInfoModal */ \"./src/components/modals/ActivityInfoModal.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ActivityHighlight = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)(), 2), isInfoModalOpen = ref[0], setIsInfoModalOpen = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)(), 2), isMouseOver = ref1[0], setIsMouseOver = ref1[1];\n    var activity = {\n        image: \"/images/gardens.jpg\",\n        title: \"Soak up some sun\",\n        blurb: \"Go for a stroll and find somewhere nice to read\",\n        icons: [\n            \"/images/sun.png\",\n            \"/images/walking-the-dog.png\",\n            \"/images/open-book.png\", \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                onClick: setIsInfoModalOpen.on,\n                borderRadius: \"lg\",\n                overflow: \"hidden\",\n                w: \"120%\",\n                spacing: \"0\",\n                onMouseEnter: setIsMouseOver.on,\n                onMouseLeave: setIsMouseOver.off,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                        p: \"3\",\n                        align: \"flex-end\",\n                        justify: \"flex-start\",\n                        bg: \"url(\".concat(activity.image, \") center/cover no-repeat\"),\n                        // opacity={isMouseOver ? 0.5 : 1}\n                        w: \"100%\",\n                        _before: {\n                            opacity: 0.5\n                        },\n                        minH: \"150px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                            src: \"/images/reload.png\",\n                            maxW: \"9\"\n                        }, void 0, false, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                        p: \"3\",\n                        h: \"100%\",\n                        textAlign: \"center\",\n                        bg: isMouseOver ? \"neutral.sheer\" : \"neutral.light\",\n                        transition: \"all .1s\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                justify: \"center\",\n                                w: \"100%\",\n                                children: activity.icons.map(function(icon) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                                        src: icon,\n                                        maxW: \"12\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                children: activity.blurb\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__.ActivityInfoModal, {\n                isOpen: isInfoModalOpen,\n                onClose: setIsInfoModalOpen.off,\n                activity: activity\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ActivityHighlight, \"d/+xSzrREdPCTyr7ojE7BLfFAMk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean\n    ];\n});\n_c = ActivityHighlight;\nvar _c;\n$RefreshReg$(_c, \"ActivityHighlight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdHlIaWdobGlnaHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBVTBCO0FBSWM7QUFFakMsSUFBTU0saUJBQWlCLEdBQUcsV0FBTTs7SUFDckMsSUFBOENILEdBQVksb0ZBQVpBLDREQUFVLEVBQUUsTUFBbkRJLGVBQWUsR0FBd0JKLEdBQVksR0FBcEMsRUFBRUssa0JBQWtCLEdBQUlMLEdBQVksR0FBaEI7SUFDMUMsSUFBc0NBLElBQVksb0ZBQVpBLDREQUFVLEVBQUUsTUFBM0NNLFdBQVcsR0FBb0JOLElBQVksR0FBaEMsRUFBRU8sY0FBYyxHQUFJUCxJQUFZLEdBQWhCO0lBRWxDLElBQU1RLFFBQVEsR0FBRztRQUNmQyxLQUFLLEVBQUUscUJBQXFCO1FBQzVCQyxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCQyxLQUFLLEVBQUUsaURBQWlEO1FBQ3hEQyxLQUFLLEVBQUU7WUFDTCxpQkFBaUI7WUFDakIsNkJBQTZCO1lBQzdCLHVCQUF1QjtTQUN4QjtLQUNGO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDZixvREFBTTtnQkFDTGdCLE9BQU8sRUFBRVIsa0JBQWtCLENBQUNTLEVBQUU7Z0JBQzlCQyxZQUFZLEVBQUMsSUFBSTtnQkFDakJDLFFBQVEsRUFBQyxRQUFRO2dCQUNqQkMsQ0FBQyxFQUFDLE1BQU07Z0JBQ1JDLE9BQU8sRUFBQyxHQUFHO2dCQUNYQyxZQUFZLEVBQUVaLGNBQWMsQ0FBQ08sRUFBRTtnQkFDL0JNLFlBQVksRUFBRWIsY0FBYyxDQUFDYyxHQUFHOztrQ0FFaEMsOERBQUN4QixvREFBTTt3QkFDTHlCLENBQUMsRUFBQyxHQUFHO3dCQUNMQyxLQUFLLEVBQUMsVUFBVTt3QkFDaEJDLE9BQU8sRUFBQyxZQUFZO3dCQUNwQkMsRUFBRSxFQUFFLE1BQUssQ0FBaUIsTUFBd0IsQ0FBdkNqQixRQUFRLENBQUNDLEtBQUssRUFBQywwQkFBd0IsQ0FBQzt3QkFDbkQsa0NBQWtDO3dCQUNsQ1EsQ0FBQyxFQUFDLE1BQU07d0JBQ1JTLE9BQU8sRUFBRTs0QkFBQ0MsT0FBTyxFQUFFLEdBQUc7eUJBQUM7d0JBQ3ZCQyxJQUFJLEVBQUMsT0FBTztrQ0FFWiw0RUFBQzlCLGlEQUFHOzRCQUFDK0IsR0FBRyxFQUFDLG9CQUFvQjs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7Ozs7O2lDQUFHOzs7Ozs2QkFDbEM7a0NBQ1QsOERBQUNqQyxvREFBTTt3QkFDTHlCLENBQUMsRUFBQyxHQUFHO3dCQUNMUyxDQUFDLEVBQUMsTUFBTTt3QkFDUkMsU0FBUyxFQUFDLFFBQVE7d0JBQ2xCUCxFQUFFLEVBQUVuQixXQUFXLEdBQUcsZUFBZSxHQUFHLGVBQWU7d0JBQ25EMkIsVUFBVSxFQUFDLFNBQVM7OzBDQUVwQiw4REFBQ2hDLG9EQUFNO2dDQUFDdUIsT0FBTyxFQUFDLFFBQVE7Z0NBQUNQLENBQUMsRUFBQyxNQUFNOzBDQUM5QlQsUUFBUSxDQUFDSSxLQUFLLENBQUNzQixHQUFHLENBQUMsU0FBQ0MsSUFBSTt5REFDdkIsOERBQUNyQyxpREFBRzt3Q0FBQytCLEdBQUcsRUFBRU0sSUFBSTt3Q0FBRUwsSUFBSSxFQUFDLElBQUk7Ozs7OzZDQUFHO2lDQUM3QixDQUFDOzs7OztxQ0FDSzswQ0FDVCw4REFBQy9CLGtEQUFJOzBDQUFFUyxRQUFRLENBQUNHLEtBQUs7Ozs7O3FDQUFROzs7Ozs7NkJBQ3RCOzs7Ozs7cUJBQ0Y7MEJBRVQsOERBQUNULHdFQUFpQjtnQkFDaEJrQyxNQUFNLEVBQUVoQyxlQUFlO2dCQUN2QmlDLE9BQU8sRUFBRWhDLGtCQUFrQixDQUFDZ0IsR0FBRztnQkFDL0JiLFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQ2xCOztvQkFDRCxDQUNIO0NBQ0gsQ0FBQztHQTdEV0wsaUJBQWlCOztRQUNrQkgsd0RBQVU7UUFDbEJBLHdEQUFVOzs7QUFGckNHLEtBQUFBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdHlIaWdobGlnaHQudHN4PzMyYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFZTdGFjayxcbiAgSGVhZGluZyxcbiAgSW1nLFxuICBUZXh0LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIHVzZUJvb2xlYW4sXG4gIEhTdGFjayxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7XG4gIEFjdGl2aXR5SW5mb01vZGFsLFxuICBBY3Rpdml0eURhdGEsXG59IGZyb20gXCIuLi8uLi9tb2RhbHMvQWN0aXZpdHlJbmZvTW9kYWxcIjtcblxuZXhwb3J0IGNvbnN0IEFjdGl2aXR5SGlnaGxpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBbaXNJbmZvTW9kYWxPcGVuLCBzZXRJc0luZm9Nb2RhbE9wZW5dID0gdXNlQm9vbGVhbigpO1xuICBjb25zdCBbaXNNb3VzZU92ZXIsIHNldElzTW91c2VPdmVyXSA9IHVzZUJvb2xlYW4oKVxuXG4gIGNvbnN0IGFjdGl2aXR5ID0ge1xuICAgIGltYWdlOiBcIi9pbWFnZXMvZ2FyZGVucy5qcGdcIixcbiAgICB0aXRsZTogXCJTb2FrIHVwIHNvbWUgc3VuXCIsXG4gICAgYmx1cmI6IFwiR28gZm9yIGEgc3Ryb2xsIGFuZCBmaW5kIHNvbWV3aGVyZSBuaWNlIHRvIHJlYWRcIixcbiAgICBpY29uczogW1xuICAgICAgXCIvaW1hZ2VzL3N1bi5wbmdcIixcbiAgICAgIFwiL2ltYWdlcy93YWxraW5nLXRoZS1kb2cucG5nXCIsXG4gICAgICBcIi9pbWFnZXMvb3Blbi1ib29rLnBuZ1wiLFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFZTdGFja1xuICAgICAgICBvbkNsaWNrPXtzZXRJc0luZm9Nb2RhbE9wZW4ub259XG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICB3PVwiMTIwJVwiXG4gICAgICAgIHNwYWNpbmc9XCIwXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtzZXRJc01vdXNlT3Zlci5vbn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtzZXRJc01vdXNlT3Zlci5vZmZ9XG4gICAgICA+XG4gICAgICAgIDxWU3RhY2tcbiAgICAgICAgICBwPVwiM1wiXG4gICAgICAgICAgYWxpZ249XCJmbGV4LWVuZFwiXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgIGJnPXtgdXJsKCR7YWN0aXZpdHkuaW1hZ2V9KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0YH1cbiAgICAgICAgICAvLyBvcGFjaXR5PXtpc01vdXNlT3ZlciA/IDAuNSA6IDF9XG4gICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgIF9iZWZvcmU9e3tvcGFjaXR5OiAwLjV9fVxuICAgICAgICAgIG1pbkg9XCIxNTBweFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1nIHNyYz1cIi9pbWFnZXMvcmVsb2FkLnBuZ1wiIG1heFc9XCI5XCIgLz5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDxWU3RhY2tcbiAgICAgICAgICBwPVwiM1wiXG4gICAgICAgICAgaD1cIjEwMCVcIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgYmc9e2lzTW91c2VPdmVyID8gXCJuZXV0cmFsLnNoZWVyXCIgOiBcIm5ldXRyYWwubGlnaHRcIn1cbiAgICAgICAgICB0cmFuc2l0aW9uPVwiYWxsIC4xc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SFN0YWNrIGp1c3RpZnk9XCJjZW50ZXJcIiB3PVwiMTAwJVwiPlxuICAgICAgICAgICAge2FjdGl2aXR5Lmljb25zLm1hcCgoaWNvbikgPT4gKFxuICAgICAgICAgICAgICA8SW1nIHNyYz17aWNvbn0gbWF4Vz1cIjEyXCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDxUZXh0PnthY3Rpdml0eS5ibHVyYn08L1RleHQ+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9WU3RhY2s+XG5cbiAgICAgIDxBY3Rpdml0eUluZm9Nb2RhbFxuICAgICAgICBpc09wZW49e2lzSW5mb01vZGFsT3Blbn1cbiAgICAgICAgb25DbG9zZT17c2V0SXNJbmZvTW9kYWxPcGVuLm9mZn1cbiAgICAgICAgYWN0aXZpdHk9e2FjdGl2aXR5fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiVlN0YWNrIiwiSW1nIiwiVGV4dCIsInVzZUJvb2xlYW4iLCJIU3RhY2siLCJBY3Rpdml0eUluZm9Nb2RhbCIsIkFjdGl2aXR5SGlnaGxpZ2h0IiwiaXNJbmZvTW9kYWxPcGVuIiwic2V0SXNJbmZvTW9kYWxPcGVuIiwiaXNNb3VzZU92ZXIiLCJzZXRJc01vdXNlT3ZlciIsImFjdGl2aXR5IiwiaW1hZ2UiLCJ0aXRsZSIsImJsdXJiIiwiaWNvbnMiLCJvbkNsaWNrIiwib24iLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInciLCJzcGFjaW5nIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib2ZmIiwicCIsImFsaWduIiwianVzdGlmeSIsImJnIiwiX2JlZm9yZSIsIm9wYWNpdHkiLCJtaW5IIiwic3JjIiwibWF4VyIsImgiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwibWFwIiwiaWNvbiIsImlzT3BlbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/activity/window/ActivityHighlight.tsx\n"));

/***/ })

});