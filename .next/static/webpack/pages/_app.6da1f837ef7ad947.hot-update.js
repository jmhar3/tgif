"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    var theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n        components: {\n            Heading: {\n                baseStyle: {\n                    color: \"accent.main\"\n                }\n            },\n            Button: {\n                baseStyle: {\n                    backgroundColor: \"neutral.main\"\n                }\n            },\n            Img: {\n                defaultProps: {\n                    maxW: \"9\"\n                }\n            }\n        },\n        styles: {\n            global: {\n                body: {\n                    bg: \"neutral.main\"\n                }\n            }\n        },\n        colors: {\n            neutral: {\n                sheer: \"rgba(255, 254, 253, 0.5)\",\n                light: \"#FFFEFD\",\n                main: \"#F9F8EF\",\n                cold: \"#82c2f5\",\n                coldSheer: \"RGBA(168, 217, 255, 0.1)\",\n                bold: \"#ECAD78\",\n                boldSheer: \"rgba(236, 173, 120, 0.25)\"\n            },\n            accent: {\n                main: \"#04601C\",\n                cold: \"#436F91\",\n                bold: \"#E10600\"\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, pageProps), void 0, false, {\n            fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/_app.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/_app.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBK0Q7QUFHL0QsU0FBU0UsS0FBSyxDQUFDLEtBQWtDLEVBQUU7UUFBbENDLFNBQVMsR0FBWCxLQUFrQyxDQUFoQ0EsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQWtDLENBQXJCQSxTQUFTO0lBQ25DLElBQU1DLEtBQUssR0FBR0osNkRBQVcsQ0FBQztRQUN4QkssVUFBVSxFQUFFO1lBQ1ZDLE9BQU8sRUFBRTtnQkFDUEMsU0FBUyxFQUFFO29CQUNUQyxLQUFLLEVBQUUsYUFBYTtpQkFDckI7YUFDRjtZQUNEQyxNQUFNLEVBQUU7Z0JBQ05GLFNBQVMsRUFBRTtvQkFDVEcsZUFBZSxFQUFFLGNBQWM7aUJBQ2hDO2FBQ0Y7WUFDREMsR0FBRyxFQUFFO2dCQUNKQyxZQUFZLEVBQUU7b0JBQ2JDLElBQUksRUFBRSxHQUFHO2lCQUNUO2FBQ0Q7U0FDRjtRQUNEQyxNQUFNLEVBQUU7WUFDTkMsTUFBTSxFQUFFO2dCQUNOQyxJQUFJLEVBQUU7b0JBQ0pDLEVBQUUsRUFBRSxjQUFjO2lCQUNuQjthQUNGO1NBQ0Y7UUFDREMsTUFBTSxFQUFFO1lBQ05DLE9BQU8sRUFBRTtnQkFDUEMsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakNDLEtBQUssRUFBRSxTQUFTO2dCQUNoQkMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZDLElBQUksRUFBRSxTQUFTO2dCQUNmQyxTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQ0MsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZDLFNBQVMsRUFBRSwyQkFBMkI7YUFDdkM7WUFDREMsTUFBTSxFQUFFO2dCQUNOTCxJQUFJLEVBQUUsU0FBUztnQkFDZkMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZFLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7S0FDRixDQUFDO0lBRUYscUJBQ0UsOERBQUMxQiw0REFBYztRQUFDSyxLQUFLLEVBQUVBLEtBQUs7a0JBQzFCLDRFQUFDRixTQUFTLHFGQUFLQyxTQUFTOzs7O2dCQUFJOzs7OztZQUNiLENBQ2pCO0NBQ0g7QUFqRFFGLEtBQUFBLEtBQUs7QUFtRGQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEhlYWRpbmc6IHtcbiAgICAgICAgYmFzZVN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6IFwiYWNjZW50Lm1haW5cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBCdXR0b246IHtcbiAgICAgICAgYmFzZVN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIm5ldXRyYWwubWFpblwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIEltZzoge1xuICAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBtYXhXOiBcIjlcIlxuICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBiZzogXCJuZXV0cmFsLm1haW5cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb2xvcnM6IHtcbiAgICAgIG5ldXRyYWw6IHtcbiAgICAgICAgc2hlZXI6ICdyZ2JhKDI1NSwgMjU0LCAyNTMsIDAuNSknLFxuICAgICAgICBsaWdodDogXCIjRkZGRUZEXCIsXG4gICAgICAgIG1haW46IFwiI0Y5RjhFRlwiLFxuICAgICAgICBjb2xkOiBcIiM4MmMyZjVcIixcbiAgICAgICAgY29sZFNoZWVyOiBcIlJHQkEoMTY4LCAyMTcsIDI1NSwgMC4xKVwiLFxuICAgICAgICBib2xkOiBcIiNFQ0FENzhcIixcbiAgICAgICAgYm9sZFNoZWVyOiAncmdiYSgyMzYsIDE3MywgMTIwLCAwLjI1KScsXG4gICAgICB9LFxuICAgICAgYWNjZW50OiB7XG4gICAgICAgIG1haW46IFwiIzA0NjAxQ1wiLFxuICAgICAgICBjb2xkOiBcIiM0MzZGOTFcIixcbiAgICAgICAgYm9sZDogXCIjRTEwNjAwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJleHRlbmRUaGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJjb21wb25lbnRzIiwiSGVhZGluZyIsImJhc2VTdHlsZSIsImNvbG9yIiwiQnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiSW1nIiwiZGVmYXVsdFByb3BzIiwibWF4VyIsInN0eWxlcyIsImdsb2JhbCIsImJvZHkiLCJiZyIsImNvbG9ycyIsIm5ldXRyYWwiLCJzaGVlciIsImxpZ2h0IiwibWFpbiIsImNvbGQiLCJjb2xkU2hlZXIiLCJib2xkIiwiYm9sZFNoZWVyIiwiYWNjZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});