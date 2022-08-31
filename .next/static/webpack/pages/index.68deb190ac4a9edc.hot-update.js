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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActivityHighlight\": function() { return /* binding */ ActivityHighlight; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/ActivityInfoModal */ \"./src/components/modals/ActivityInfoModal.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ActivityHighlight = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)(), 2), isInfoModalOpen = ref[0], setIsInfoModalOpen = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)(), 2), isMouseOver = ref1[0], setIsMouseOver = ref1[1];\n    var activity = {\n        image: \"/images/gardens.jpg\",\n        title: \"Soak up some sun\",\n        blurb: \"Go for a stroll and find somewhere nice to read\",\n        icons: [\n            \"/images/sun.png\",\n            \"/images/walking-the-dog.png\",\n            \"/images/open-book.png\", \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                onClick: setIsInfoModalOpen.on,\n                borderRadius: \"lg\",\n                overflow: \"hidden\",\n                w: \"120%\",\n                spacing: \"0\",\n                onMouseEnter: setIsMouseOver.on,\n                onMouseLeave: setIsMouseOver.off,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                        opacity: isMouseOver ? 0.8 : 1,\n                        transition: \"all .1s\",\n                        src: activity.image,\n                        maxH: \"100%\",\n                        w: \"100%\",\n                        objectFit: \"cover\",\n                        \"no-repeat\": true\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                        p: \"3\",\n                        textAlign: \"center\",\n                        bg: isMouseOver ? \"neutral.sheer\" : \"neutral.light\",\n                        transition: \"all .1s\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                justify: \"center\",\n                                w: \"100%\",\n                                children: activity.icons.map(function(icon) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                                        src: icon,\n                                        maxW: \"12\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                children: activity.blurb\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__.ActivityInfoModal, {\n                isOpen: isInfoModalOpen,\n                onClose: setIsInfoModalOpen.off,\n                activity: activity\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ActivityHighlight, \"d/+xSzrREdPCTyr7ojE7BLfFAMk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean\n    ];\n});\n_c = ActivityHighlight;\nvar _c;\n$RefreshReg$(_c, \"ActivityHighlight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdHlIaWdobGlnaHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBVTBCO0FBSWM7QUFFakMsSUFBTU0saUJBQWlCLEdBQUcsV0FBTTs7SUFDckMsSUFBOENILEdBQVksb0ZBQVpBLDREQUFVLEVBQUUsTUFBbkRJLGVBQWUsR0FBd0JKLEdBQVksR0FBcEMsRUFBRUssa0JBQWtCLEdBQUlMLEdBQVksR0FBaEI7SUFDMUMsSUFBc0NBLElBQVksb0ZBQVpBLDREQUFVLEVBQUUsTUFBM0NNLFdBQVcsR0FBb0JOLElBQVksR0FBaEMsRUFBRU8sY0FBYyxHQUFJUCxJQUFZLEdBQWhCO0lBRWxDLElBQU1RLFFBQVEsR0FBRztRQUNmQyxLQUFLLEVBQUUscUJBQXFCO1FBQzVCQyxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCQyxLQUFLLEVBQUUsaURBQWlEO1FBQ3hEQyxLQUFLLEVBQUU7WUFDTCxpQkFBaUI7WUFDakIsNkJBQTZCO1lBQzdCLHVCQUF1QjtTQUN4QjtLQUNGO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDZixvREFBTTtnQkFDTGdCLE9BQU8sRUFBRVIsa0JBQWtCLENBQUNTLEVBQUU7Z0JBQzlCQyxZQUFZLEVBQUMsSUFBSTtnQkFDakJDLFFBQVEsRUFBQyxRQUFRO2dCQUNqQkMsQ0FBQyxFQUFDLE1BQU07Z0JBQ1JDLE9BQU8sRUFBQyxHQUFHO2dCQUNYQyxZQUFZLEVBQUVaLGNBQWMsQ0FBQ08sRUFBRTtnQkFDL0JNLFlBQVksRUFBRWIsY0FBYyxDQUFDYyxHQUFHOztrQ0FFaEMsOERBQUN2QixpREFBRzt3QkFDRndCLE9BQU8sRUFBRWhCLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQzt3QkFDOUJpQixVQUFVLEVBQUMsU0FBUzt3QkFDcEJDLEdBQUcsRUFBRWhCLFFBQVEsQ0FBQ0MsS0FBSzt3QkFDbkJnQixJQUFJLEVBQUMsTUFBTTt3QkFDWFIsQ0FBQyxFQUFDLE1BQU07d0JBQ1JTLFNBQVMsRUFBQyxPQUFPO3dCQUNqQkMsV0FBUzs7Ozs7NkJBQ1Q7a0NBQ0YsOERBQUM5QixvREFBTTt3QkFDTCtCLENBQUMsRUFBQyxHQUFHO3dCQUNMQyxTQUFTLEVBQUMsUUFBUTt3QkFDbEJDLEVBQUUsRUFBRXhCLFdBQVcsR0FBRyxlQUFlLEdBQUcsZUFBZTt3QkFDbkRpQixVQUFVLEVBQUMsU0FBUzs7MENBRXBCLDhEQUFDdEIsb0RBQU07Z0NBQUM4QixPQUFPLEVBQUMsUUFBUTtnQ0FBQ2QsQ0FBQyxFQUFDLE1BQU07MENBQzlCVCxRQUFRLENBQUNJLEtBQUssQ0FBQ29CLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lEQUN2Qiw4REFBQ25DLGlEQUFHO3dDQUFDMEIsR0FBRyxFQUFFUyxJQUFJO3dDQUFFQyxJQUFJLEVBQUMsSUFBSTs7Ozs7NkNBQUc7aUNBQzdCLENBQUM7Ozs7O3FDQUNLOzBDQUNULDhEQUFDbkMsa0RBQUk7MENBQUVTLFFBQVEsQ0FBQ0csS0FBSzs7Ozs7cUNBQVE7Ozs7Ozs2QkFDdEI7Ozs7OztxQkFDRjswQkFFVCw4REFBQ1Qsd0VBQWlCO2dCQUNoQmlDLE1BQU0sRUFBRS9CLGVBQWU7Z0JBQ3ZCZ0MsT0FBTyxFQUFFL0Isa0JBQWtCLENBQUNnQixHQUFHO2dCQUMvQmIsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFDbEI7O29CQUNELENBQ0g7Q0FDSCxDQUFDO0dBekRXTCxpQkFBaUI7O1FBQ2tCSCx3REFBVTtRQUNsQkEsd0RBQVU7OztBQUZyQ0csS0FBQUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjdGl2aXR5L3dpbmRvdy9BY3Rpdml0eUhpZ2hsaWdodC50c3g/MzJiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgVlN0YWNrLFxuICBIZWFkaW5nLFxuICBJbWcsXG4gIFRleHQsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgdXNlQm9vbGVhbixcbiAgSFN0YWNrLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWN0aXZpdHlJbmZvTW9kYWwsXG4gIEFjdGl2aXR5RGF0YSxcbn0gZnJvbSBcIi4uLy4uL21vZGFscy9BY3Rpdml0eUluZm9Nb2RhbFwiO1xuXG5leHBvcnQgY29uc3QgQWN0aXZpdHlIaWdobGlnaHQgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0luZm9Nb2RhbE9wZW4sIHNldElzSW5mb01vZGFsT3Blbl0gPSB1c2VCb29sZWFuKCk7XG4gIGNvbnN0IFtpc01vdXNlT3Zlciwgc2V0SXNNb3VzZU92ZXJdID0gdXNlQm9vbGVhbigpO1xuXG4gIGNvbnN0IGFjdGl2aXR5ID0ge1xuICAgIGltYWdlOiBcIi9pbWFnZXMvZ2FyZGVucy5qcGdcIixcbiAgICB0aXRsZTogXCJTb2FrIHVwIHNvbWUgc3VuXCIsXG4gICAgYmx1cmI6IFwiR28gZm9yIGEgc3Ryb2xsIGFuZCBmaW5kIHNvbWV3aGVyZSBuaWNlIHRvIHJlYWRcIixcbiAgICBpY29uczogW1xuICAgICAgXCIvaW1hZ2VzL3N1bi5wbmdcIixcbiAgICAgIFwiL2ltYWdlcy93YWxraW5nLXRoZS1kb2cucG5nXCIsXG4gICAgICBcIi9pbWFnZXMvb3Blbi1ib29rLnBuZ1wiLFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFZTdGFja1xuICAgICAgICBvbkNsaWNrPXtzZXRJc0luZm9Nb2RhbE9wZW4ub259XG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICB3PVwiMTIwJVwiXG4gICAgICAgIHNwYWNpbmc9XCIwXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtzZXRJc01vdXNlT3Zlci5vbn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtzZXRJc01vdXNlT3Zlci5vZmZ9XG4gICAgICA+XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBvcGFjaXR5PXtpc01vdXNlT3ZlciA/IDAuOCA6IDF9XG4gICAgICAgICAgdHJhbnNpdGlvbj1cImFsbCAuMXNcIlxuICAgICAgICAgIHNyYz17YWN0aXZpdHkuaW1hZ2V9XG4gICAgICAgICAgbWF4SD1cIjEwMCVcIlxuICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgbm8tcmVwZWF0XG4gICAgICAgIC8+XG4gICAgICAgIDxWU3RhY2tcbiAgICAgICAgICBwPVwiM1wiXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBiZz17aXNNb3VzZU92ZXIgPyBcIm5ldXRyYWwuc2hlZXJcIiA6IFwibmV1dHJhbC5saWdodFwifVxuICAgICAgICAgIHRyYW5zaXRpb249XCJhbGwgLjFzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIU3RhY2sganVzdGlmeT1cImNlbnRlclwiIHc9XCIxMDAlXCI+XG4gICAgICAgICAgICB7YWN0aXZpdHkuaWNvbnMubWFwKChpY29uKSA9PiAoXG4gICAgICAgICAgICAgIDxJbWcgc3JjPXtpY29ufSBtYXhXPVwiMTJcIiAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPFRleHQ+e2FjdGl2aXR5LmJsdXJifTwvVGV4dD5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L1ZTdGFjaz5cblxuICAgICAgPEFjdGl2aXR5SW5mb01vZGFsXG4gICAgICAgIGlzT3Blbj17aXNJbmZvTW9kYWxPcGVufVxuICAgICAgICBvbkNsb3NlPXtzZXRJc0luZm9Nb2RhbE9wZW4ub2ZmfVxuICAgICAgICBhY3Rpdml0eT17YWN0aXZpdHl9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJWU3RhY2siLCJJbWciLCJUZXh0IiwidXNlQm9vbGVhbiIsIkhTdGFjayIsIkFjdGl2aXR5SW5mb01vZGFsIiwiQWN0aXZpdHlIaWdobGlnaHQiLCJpc0luZm9Nb2RhbE9wZW4iLCJzZXRJc0luZm9Nb2RhbE9wZW4iLCJpc01vdXNlT3ZlciIsInNldElzTW91c2VPdmVyIiwiYWN0aXZpdHkiLCJpbWFnZSIsInRpdGxlIiwiYmx1cmIiLCJpY29ucyIsIm9uQ2xpY2siLCJvbiIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwidyIsInNwYWNpbmciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvZmYiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInNyYyIsIm1heEgiLCJvYmplY3RGaXQiLCJuby1yZXBlYXQiLCJwIiwidGV4dEFsaWduIiwiYmciLCJqdXN0aWZ5IiwibWFwIiwiaWNvbiIsIm1heFciLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/activity/window/ActivityHighlight.tsx\n"));

/***/ })

});