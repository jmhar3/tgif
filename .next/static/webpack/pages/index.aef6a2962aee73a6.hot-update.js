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

/***/ "./src/public/components/Warning.tsx":
/*!*******************************************!*\
  !*** ./src/public/components/Warning.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Warning\": function() { return /* binding */ Warning; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Warning = function(props) {\n    _s();\n    var _warning = props.warning, heading = _warning.heading, text = _warning.text, icon = _warning.icon, colourTheme = _warning.colourTheme;\n    //  neutral: {\n    //   sheer: 'rgba(255, 254, 253, 0.5)',\n    //   light: \"#FFFEFD\",\n    //   main: \"#F9F8EF\",\n    //   bold: \"#ECAD78\",\n    //   boldSheer: 'rgba(236, 173, 120, 0.25)',\n    // },\n    // accent: {\n    //   main: \"#04601C\",\n    //   bold: \"#FF2950\",\n    // },\n    var colourScheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        switch(colourTheme){\n            case \"white\":\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n            case \"blue\":\n                return {\n                    background: \"neutral.cold\",\n                    text: \"accent.main\"\n                };\n            case \"amber\":\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n            case \"red\":\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n            default:\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n        }\n    }, [\n        colourTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n        w: \"100%\",\n        justify: \"space-between\",\n        bg: colourScheme.background,\n        p: \"3\",\n        borderRadius: \"md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                align: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        size: \"sm\",\n                        color: colourScheme.text,\n                        children: heading\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        color: colourScheme.text,\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                maxW: \"12\",\n                src: icon\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Warning, \"9ZfIn3s2y8vVMGtba8r/CGOe4aY=\");\n_c = Warning;\nvar _c;\n$RefreshReg$(_c, \"Warning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHVibGljL2NvbXBvbmVudHMvV2FybmluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUFnQztBQUNzQztBQWEvRCxJQUFNTSxPQUFPLEdBQUcsU0FBQ0MsS0FBbUIsRUFBSzs7SUFDOUMsZUFFSUEsS0FBSyxDQURQQyxPQUFPLEVBQUlDLE9BQU8sWUFBUEEsT0FBTyxFQUFFQyxJQUFJLFlBQUpBLElBQUksRUFBRUMsSUFBSSxZQUFKQSxJQUFJLEVBQUVDLFdBQVcsWUFBWEEsV0FBVztJQUc3QyxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxLQUFLO0lBQ0wsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsS0FBSztJQUVMLElBQU1DLFlBQVksR0FBR2IsOENBQU8sQ0FBZSxXQUFNO1FBQy9DLE9BQVFZLFdBQVc7WUFDakIsS0FBSyxPQUFPO2dCQUNWLE9BQU87b0JBQUVFLFVBQVUsRUFBRSxjQUFjO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBRSxDQUFDO1lBQzdELEtBQUssTUFBTTtnQkFDVCxPQUFPO29CQUFFSSxVQUFVLEVBQUUsY0FBYztvQkFBRUosSUFBSSxFQUFFLGFBQWE7aUJBQUUsQ0FBQztZQUM3RCxLQUFLLE9BQU87Z0JBQ1YsT0FBTztvQkFBRUksVUFBVSxFQUFFLGNBQWM7b0JBQUVKLElBQUksRUFBRSxhQUFhO2lCQUFFLENBQUM7WUFDN0QsS0FBSyxLQUFLO2dCQUNSLE9BQU87b0JBQUVJLFVBQVUsRUFBRSxjQUFjO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBRSxDQUFDO1lBQzdEO2dCQUNFLE9BQU87b0JBQUVJLFVBQVUsRUFBRSxjQUFjO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBRSxDQUFDO1NBQzlEO0tBQ0YsRUFBRTtRQUFDRSxXQUFXO0tBQUMsQ0FBQztJQUVqQixxQkFDRSw4REFBQ1gsb0RBQU07UUFBQ2MsQ0FBQyxFQUFDLE1BQU07UUFBQ0MsT0FBTyxFQUFDLGVBQWU7UUFBQ0MsRUFBRSxFQUFFSixZQUFZLENBQUNDLFVBQVU7UUFBRUksQ0FBQyxFQUFDLEdBQUc7UUFBQ0MsWUFBWSxFQUFDLElBQUk7OzBCQUMzRiw4REFBQ2Ysb0RBQU07Z0JBQUNnQixLQUFLLEVBQUMsTUFBTTs7a0NBQ2xCLDhEQUFDbEIscURBQU87d0JBQUNtQixJQUFJLEVBQUMsSUFBSTt3QkFBQ0MsS0FBSyxFQUFFVCxZQUFZLENBQUNILElBQUk7a0NBQ3hDRCxPQUFPOzs7Ozs2QkFDQTtrQ0FDViw4REFBQ04sa0RBQUk7d0JBQUNtQixLQUFLLEVBQUVULFlBQVksQ0FBQ0gsSUFBSTtrQ0FBR0EsSUFBSTs7Ozs7NkJBQVE7Ozs7OztxQkFDdEM7MEJBQ1QsOERBQUNMLGlEQUFHO2dCQUFDa0IsSUFBSSxFQUFDLElBQUk7Z0JBQUNDLEdBQUcsRUFBRWIsSUFBSTs7Ozs7cUJBQUk7Ozs7OzthQUNyQixDQUNUO0NBQ0gsQ0FBQztHQTNDV0wsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wdWJsaWMvY29tcG9uZW50cy9XYXJuaW5nLnRzeD9iOGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhTdGFjaywgSGVhZGluZywgVGV4dCwgVlN0YWNrLCBJbWcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBXYXJuaW5nRGF0YSB9IGZyb20gXCIuLi9ob29rcy91c2VXYXJuaW5nc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhcm5pbmdQcm9wcyB7XG4gIHdhcm5pbmc6IFdhcm5pbmdEYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG91clNjaGVtZSB7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgV2FybmluZyA9IChwcm9wczogV2FybmluZ1Byb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3YXJuaW5nOiB7IGhlYWRpbmcsIHRleHQsIGljb24sIGNvbG91clRoZW1lIH0sXG4gIH0gPSBwcm9wcztcblxuICAvLyAgbmV1dHJhbDoge1xuICAvLyAgIHNoZWVyOiAncmdiYSgyNTUsIDI1NCwgMjUzLCAwLjUpJyxcbiAgLy8gICBsaWdodDogXCIjRkZGRUZEXCIsXG4gIC8vICAgbWFpbjogXCIjRjlGOEVGXCIsXG4gIC8vICAgYm9sZDogXCIjRUNBRDc4XCIsXG4gIC8vICAgYm9sZFNoZWVyOiAncmdiYSgyMzYsIDE3MywgMTIwLCAwLjI1KScsXG4gIC8vIH0sXG4gIC8vIGFjY2VudDoge1xuICAvLyAgIG1haW46IFwiIzA0NjAxQ1wiLFxuICAvLyAgIGJvbGQ6IFwiI0ZGMjk1MFwiLFxuICAvLyB9LFxuXG4gIGNvbnN0IGNvbG91clNjaGVtZSA9IHVzZU1lbW88Q29sb3VyU2NoZW1lPigoKSA9PiB7XG4gICAgc3dpdGNoIChjb2xvdXJUaGVtZSkge1xuICAgICAgY2FzZSBcIndoaXRlXCI6XG4gICAgICAgIHJldHVybiB7IGJhY2tncm91bmQ6IFwibmV1dHJhbC5tYWluXCIsIHRleHQ6IFwiYWNjZW50Lm1haW5cIiB9O1xuICAgICAgY2FzZSBcImJsdWVcIjpcbiAgICAgICAgcmV0dXJuIHsgYmFja2dyb3VuZDogXCJuZXV0cmFsLmNvbGRcIiwgdGV4dDogXCJhY2NlbnQubWFpblwiIH07XG4gICAgICBjYXNlIFwiYW1iZXJcIjpcbiAgICAgICAgcmV0dXJuIHsgYmFja2dyb3VuZDogXCJuZXV0cmFsLm1haW5cIiwgdGV4dDogXCJhY2NlbnQubWFpblwiIH07XG4gICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgIHJldHVybiB7IGJhY2tncm91bmQ6IFwibmV1dHJhbC5tYWluXCIsIHRleHQ6IFwiYWNjZW50Lm1haW5cIiB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHsgYmFja2dyb3VuZDogXCJuZXV0cmFsLm1haW5cIiwgdGV4dDogXCJhY2NlbnQubWFpblwiIH07XG4gICAgfVxuICB9LCBbY29sb3VyVGhlbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxIU3RhY2sgdz1cIjEwMCVcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGJnPXtjb2xvdXJTY2hlbWUuYmFja2dyb3VuZH0gcD1cIjNcIiBib3JkZXJSYWRpdXM9XCJtZFwiPlxuICAgICAgPFZTdGFjayBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgY29sb3I9e2NvbG91clNjaGVtZS50ZXh0fT5cbiAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBjb2xvcj17Y29sb3VyU2NoZW1lLnRleHR9Pnt0ZXh0fTwvVGV4dD5cbiAgICAgIDwvVlN0YWNrPlxuICAgICAgPEltZyBtYXhXPVwiMTJcIiBzcmM9e2ljb259IC8+XG4gICAgPC9IU3RhY2s+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJIU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsIlZTdGFjayIsIkltZyIsIldhcm5pbmciLCJwcm9wcyIsIndhcm5pbmciLCJoZWFkaW5nIiwidGV4dCIsImljb24iLCJjb2xvdXJUaGVtZSIsImNvbG91clNjaGVtZSIsImJhY2tncm91bmQiLCJ3IiwianVzdGlmeSIsImJnIiwicCIsImJvcmRlclJhZGl1cyIsImFsaWduIiwic2l6ZSIsImNvbG9yIiwibWF4VyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/public/components/Warning.tsx\n"));

/***/ })

});