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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Warning\": function() { return /* binding */ Warning; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Warning = function(props) {\n    _s();\n    var _warning = props.warning, heading = _warning.heading, text = _warning.text, icon = _warning.icon, colourTheme = _warning.colourTheme;\n    //  neutral: {\n    //   sheer: 'rgba(255, 254, 253, 0.5)',\n    //   light: \"#FFFEFD\",\n    //   main: \"#F9F8EF\",\n    //   bold: \"#ECAD78\",\n    //   boldSheer: 'rgba(236, 173, 120, 0.25)',\n    // },\n    // accent: {\n    //   main: \"#04601C\",\n    //   bold: \"#FF2950\",\n    // },\n    var colourScheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        switch(colourTheme){\n            case \"white\":\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n            case \"blue\":\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n            case \"amber\":\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n            case \"red\":\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n            default:\n                return {\n                    background: \"neutral.main\",\n                    text: \"accent.main\"\n                };\n        }\n    }, [\n        colourTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n        w: \"300\",\n        bg: colourScheme.background,\n        p: \"3\",\n        borderRadius: \"md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                align: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        size: \"sm\",\n                        color: colourScheme.text,\n                        children: heading\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        color: colourScheme.text,\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                maxW: \"9\",\n                src: icon\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Warning, \"9ZfIn3s2y8vVMGtba8r/CGOe4aY=\");\n_c = Warning;\nvar _c;\n$RefreshReg$(_c, \"Warning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHVibGljL2NvbXBvbmVudHMvV2FybmluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUFnQztBQUNzQztBQWEvRCxJQUFNTSxPQUFPLEdBQUcsU0FBQ0MsS0FBbUIsRUFBSzs7SUFDOUMsZUFFSUEsS0FBSyxDQURQQyxPQUFPLEVBQUlDLE9BQU8sWUFBUEEsT0FBTyxFQUFFQyxJQUFJLFlBQUpBLElBQUksRUFBRUMsSUFBSSxZQUFKQSxJQUFJLEVBQUVDLFdBQVcsWUFBWEEsV0FBVztJQUc3QyxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxLQUFLO0lBQ0wsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsS0FBSztJQUVMLElBQU1DLFlBQVksR0FBR2IsOENBQU8sQ0FBZSxXQUFNO1FBQy9DLE9BQVFZLFdBQVc7WUFDakIsS0FBSyxPQUFPO2dCQUNWLE9BQU87b0JBQUVFLFVBQVUsRUFBRSxjQUFjO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBRSxDQUFDO1lBQzdELEtBQUssTUFBTTtnQkFDVCxPQUFPO29CQUFFSSxVQUFVLEVBQUUsY0FBYztvQkFBRUosSUFBSSxFQUFFLGFBQWE7aUJBQUUsQ0FBQztZQUM3RCxLQUFLLE9BQU87Z0JBQ1YsT0FBTztvQkFBRUksVUFBVSxFQUFFLGNBQWM7b0JBQUVKLElBQUksRUFBRSxhQUFhO2lCQUFFLENBQUM7WUFDN0QsS0FBSyxLQUFLO2dCQUNSLE9BQU87b0JBQUVJLFVBQVUsRUFBRSxjQUFjO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBRSxDQUFDO1lBQzdEO2dCQUNFLE9BQU87b0JBQUVJLFVBQVUsRUFBRSxjQUFjO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBRSxDQUFDO1NBQzlEO0tBQ0YsRUFBRTtRQUFDRSxXQUFXO0tBQUMsQ0FBQztJQUVqQixxQkFDRSw4REFBQ1gsb0RBQU07UUFBQ2MsQ0FBQyxFQUFDLEtBQUs7UUFBQ0MsRUFBRSxFQUFFSCxZQUFZLENBQUNDLFVBQVU7UUFBRUcsQ0FBQyxFQUFDLEdBQUc7UUFBQ0MsWUFBWSxFQUFDLElBQUk7OzBCQUNsRSw4REFBQ2Qsb0RBQU07Z0JBQUNlLEtBQUssRUFBQyxNQUFNOztrQ0FDbEIsOERBQUNqQixxREFBTzt3QkFBQ2tCLElBQUksRUFBQyxJQUFJO3dCQUFDQyxLQUFLLEVBQUVSLFlBQVksQ0FBQ0gsSUFBSTtrQ0FDeENELE9BQU87Ozs7OzZCQUNBO2tDQUNWLDhEQUFDTixrREFBSTt3QkFBQ2tCLEtBQUssRUFBRVIsWUFBWSxDQUFDSCxJQUFJO2tDQUFHQSxJQUFJOzs7Ozs2QkFBUTs7Ozs7O3FCQUN0QzswQkFDVCw4REFBQ0wsaURBQUc7Z0JBQUNpQixJQUFJLEVBQUMsR0FBRztnQkFBQ0MsR0FBRyxFQUFFWixJQUFJOzs7OztxQkFBSTs7Ozs7O2FBQ3BCLENBQ1Q7Q0FDSCxDQUFDO0dBM0NXTCxPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B1YmxpYy9jb21wb25lbnRzL1dhcm5pbmcudHN4P2I4ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSFN0YWNrLCBIZWFkaW5nLCBUZXh0LCBWU3RhY2ssIEltZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IFdhcm5pbmdEYXRhIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdhcm5pbmdzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FybmluZ1Byb3BzIHtcbiAgd2FybmluZzogV2FybmluZ0RhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3VyU2NoZW1lIHtcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBXYXJuaW5nID0gKHByb3BzOiBXYXJuaW5nUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdhcm5pbmc6IHsgaGVhZGluZywgdGV4dCwgaWNvbiwgY29sb3VyVGhlbWUgfSxcbiAgfSA9IHByb3BzO1xuXG4gIC8vICBuZXV0cmFsOiB7XG4gIC8vICAgc2hlZXI6ICdyZ2JhKDI1NSwgMjU0LCAyNTMsIDAuNSknLFxuICAvLyAgIGxpZ2h0OiBcIiNGRkZFRkRcIixcbiAgLy8gICBtYWluOiBcIiNGOUY4RUZcIixcbiAgLy8gICBib2xkOiBcIiNFQ0FENzhcIixcbiAgLy8gICBib2xkU2hlZXI6ICdyZ2JhKDIzNiwgMTczLCAxMjAsIDAuMjUpJyxcbiAgLy8gfSxcbiAgLy8gYWNjZW50OiB7XG4gIC8vICAgbWFpbjogXCIjMDQ2MDFDXCIsXG4gIC8vICAgYm9sZDogXCIjRkYyOTUwXCIsXG4gIC8vIH0sXG5cbiAgY29uc3QgY29sb3VyU2NoZW1lID0gdXNlTWVtbzxDb2xvdXJTY2hlbWU+KCgpID0+IHtcbiAgICBzd2l0Y2ggKGNvbG91clRoZW1lKSB7XG4gICAgICBjYXNlIFwid2hpdGVcIjpcbiAgICAgICAgcmV0dXJuIHsgYmFja2dyb3VuZDogXCJuZXV0cmFsLm1haW5cIiwgdGV4dDogXCJhY2NlbnQubWFpblwiIH07XG4gICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICByZXR1cm4geyBiYWNrZ3JvdW5kOiBcIm5ldXRyYWwubWFpblwiLCB0ZXh0OiBcImFjY2VudC5tYWluXCIgfTtcbiAgICAgIGNhc2UgXCJhbWJlclwiOlxuICAgICAgICByZXR1cm4geyBiYWNrZ3JvdW5kOiBcIm5ldXRyYWwubWFpblwiLCB0ZXh0OiBcImFjY2VudC5tYWluXCIgfTtcbiAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgcmV0dXJuIHsgYmFja2dyb3VuZDogXCJuZXV0cmFsLm1haW5cIiwgdGV4dDogXCJhY2NlbnQubWFpblwiIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geyBiYWNrZ3JvdW5kOiBcIm5ldXRyYWwubWFpblwiLCB0ZXh0OiBcImFjY2VudC5tYWluXCIgfTtcbiAgICB9XG4gIH0sIFtjb2xvdXJUaGVtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEhTdGFjayB3PVwiMzAwXCIgYmc9e2NvbG91clNjaGVtZS5iYWNrZ3JvdW5kfSBwPVwiM1wiIGJvcmRlclJhZGl1cz1cIm1kXCI+XG4gICAgICA8VlN0YWNrIGFsaWduPVwibGVmdFwiPlxuICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIiBjb2xvcj17Y29sb3VyU2NoZW1lLnRleHR9PlxuICAgICAgICAgIHtoZWFkaW5nfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtjb2xvdXJTY2hlbWUudGV4dH0+e3RleHR9PC9UZXh0PlxuICAgICAgPC9WU3RhY2s+XG4gICAgICA8SW1nIG1heFc9XCI5XCIgc3JjPXtpY29ufSAvPlxuICAgIDwvSFN0YWNrPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiSFN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJWU3RhY2siLCJJbWciLCJXYXJuaW5nIiwicHJvcHMiLCJ3YXJuaW5nIiwiaGVhZGluZyIsInRleHQiLCJpY29uIiwiY29sb3VyVGhlbWUiLCJjb2xvdXJTY2hlbWUiLCJiYWNrZ3JvdW5kIiwidyIsImJnIiwicCIsImJvcmRlclJhZGl1cyIsImFsaWduIiwic2l6ZSIsImNvbG9yIiwibWF4VyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/public/components/Warning.tsx\n"));

/***/ })

});