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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Warning\": function() { return /* binding */ Warning; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Warning = function(props) {\n    _s();\n    var _warning = props.warning, heading = _warning.heading, text = _warning.text, icon = _warning.icon, colourTheme = _warning.colourTheme;\n    //  neutral: {\n    //   sheer: 'rgba(255, 254, 253, 0.5)',\n    //   light: \"#FFFEFD\",\n    //   main: \"#F9F8EF\",\n    //   bold: \"#ECAD78\",\n    //   boldSheer: 'rgba(236, 173, 120, 0.25)',\n    // },\n    // accent: {\n    //   main: \"#04601C\",\n    //   bold: \"#FF2950\",\n    // },\n    var colourScheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        switch(colourTheme){\n            case \"white\":\n                return {\n                    background: \"neutral.light\",\n                    text: \"accent.main\"\n                };\n            case \"blue\":\n                return {\n                    background: \"neutral.light\",\n                    text: \"accent.main\"\n                };\n            case \"amber\":\n                return {\n                    background: \"neutral.light\",\n                    text: \"accent.main\"\n                };\n            case \"red\":\n                return {\n                    background: \"neutral.light\",\n                    text: \"accent.main\"\n                };\n            default:\n                return {\n                    background: \"neutral.light\",\n                    text: \"accent.main\"\n                };\n        }\n    }, [\n        colourTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        bg: colourScheme.background,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                size: \"sm\",\n                color: colourScheme.text,\n                children: heading\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                color: colourScheme.text,\n                children: text\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/Warning.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Warning, \"9ZfIn3s2y8vVMGtba8r/CGOe4aY=\");\n_c = Warning;\nvar _c;\n$RefreshReg$(_c, \"Warning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHVibGljL2NvbXBvbmVudHMvV2FybmluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUE2QjtBQUN5QjtBQWEvQyxJQUFNSSxPQUFPLEdBQUcsU0FBQ0MsS0FBbUIsRUFBSzs7SUFDOUMsZUFFSUEsS0FBSyxDQURQQyxPQUFPLEVBQUlDLE9BQU8sWUFBUEEsT0FBTyxFQUFFQyxJQUFJLFlBQUpBLElBQUksRUFBRUMsSUFBSSxZQUFKQSxJQUFJLEVBQUVDLFdBQVcsWUFBWEEsV0FBVztJQUc5QyxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxLQUFLO0lBQ0wsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsS0FBSztJQUVKLElBQU1DLFlBQVksR0FBR1gsOENBQU8sQ0FBZSxXQUFNO1FBQ2hELE9BQVFVLFdBQVc7WUFDbEIsS0FBSyxPQUFPO2dCQUFFLE9BQU87b0JBQUNFLFVBQVUsRUFBRSxlQUFlO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBQztZQUN2RSxLQUFLLE1BQU07Z0JBQUUsT0FBTztvQkFBQ0ksVUFBVSxFQUFFLGVBQWU7b0JBQUVKLElBQUksRUFBRSxhQUFhO2lCQUFDO1lBQ3RFLEtBQUssT0FBTztnQkFBRSxPQUFPO29CQUFDSSxVQUFVLEVBQUUsZUFBZTtvQkFBRUosSUFBSSxFQUFFLGFBQWE7aUJBQUM7WUFDdkUsS0FBSyxLQUFLO2dCQUFFLE9BQU87b0JBQUNJLFVBQVUsRUFBRSxlQUFlO29CQUFFSixJQUFJLEVBQUUsYUFBYTtpQkFBQztZQUNyRTtnQkFBUyxPQUFPO29CQUFDSSxVQUFVLEVBQUUsZUFBZTtvQkFBRUosSUFBSSxFQUFFLGFBQWE7aUJBQUM7U0FDbEU7S0FDRCxFQUFFO1FBQUNFLFdBQVc7S0FBQyxDQUFDO0lBRWpCLHFCQUNFLDhEQUFDVCxpREFBRztRQUFDWSxFQUFFLEVBQUVGLFlBQVksQ0FBQ0MsVUFBVTs7MEJBQzlCLDhEQUFDVixxREFBTztnQkFBQ1ksSUFBSSxFQUFDLElBQUk7Z0JBQUNDLEtBQUssRUFBRUosWUFBWSxDQUFDSCxJQUFJOzBCQUFHRCxPQUFPOzs7OztxQkFBVzswQkFDaEUsOERBQUNKLGtEQUFJO2dCQUFDWSxLQUFLLEVBQUVKLFlBQVksQ0FBQ0gsSUFBSTswQkFBR0EsSUFBSTs7Ozs7cUJBQVE7Ozs7OzthQUN6QyxDQUNOO0NBQ0gsQ0FBQztHQWpDV0osT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wdWJsaWMvY29tcG9uZW50cy9XYXJuaW5nLnRzeD9iOGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlTWVtb30gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IFdhcm5pbmdEYXRhIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdhcm5pbmdzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FybmluZ1Byb3BzIHtcbiAgd2FybmluZzogV2FybmluZ0RhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgY29sb3VyU2NoZW1lIHtcbiBiYWNrZ3JvdW5kOiBzdHJpbmdcbiB0ZXh0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFdhcm5pbmcgPSAocHJvcHM6IFdhcm5pbmdQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgd2FybmluZzogeyBoZWFkaW5nLCB0ZXh0LCBpY29uLCBjb2xvdXJUaGVtZSB9LFxuICB9ID0gcHJvcHM7XG5cbiAvLyAgbmV1dHJhbDoge1xuIC8vICAgc2hlZXI6ICdyZ2JhKDI1NSwgMjU0LCAyNTMsIDAuNSknLFxuIC8vICAgbGlnaHQ6IFwiI0ZGRkVGRFwiLFxuIC8vICAgbWFpbjogXCIjRjlGOEVGXCIsXG4gLy8gICBib2xkOiBcIiNFQ0FENzhcIixcbiAvLyAgIGJvbGRTaGVlcjogJ3JnYmEoMjM2LCAxNzMsIDEyMCwgMC4yNSknLFxuIC8vIH0sXG4gLy8gYWNjZW50OiB7XG4gLy8gICBtYWluOiBcIiMwNDYwMUNcIixcbiAvLyAgIGJvbGQ6IFwiI0ZGMjk1MFwiLFxuIC8vIH0sXG5cbiAgY29uc3QgY29sb3VyU2NoZW1lID0gdXNlTWVtbzxjb2xvdXJTY2hlbWU+KCgpID0+IHtcbiAgIHN3aXRjaCAoY29sb3VyVGhlbWUpIHtcbiAgICBjYXNlIFwid2hpdGVcIjogcmV0dXJuIHtiYWNrZ3JvdW5kOiBcIm5ldXRyYWwubGlnaHRcIiwgdGV4dDogXCJhY2NlbnQubWFpblwifVxuICAgIGNhc2UgXCJibHVlXCI6IHJldHVybiB7YmFja2dyb3VuZDogXCJuZXV0cmFsLmxpZ2h0XCIsIHRleHQ6IFwiYWNjZW50Lm1haW5cIn1cbiAgICBjYXNlIFwiYW1iZXJcIjogcmV0dXJuIHtiYWNrZ3JvdW5kOiBcIm5ldXRyYWwubGlnaHRcIiwgdGV4dDogXCJhY2NlbnQubWFpblwifVxuICAgIGNhc2UgXCJyZWRcIjogcmV0dXJuIHtiYWNrZ3JvdW5kOiBcIm5ldXRyYWwubGlnaHRcIiwgdGV4dDogXCJhY2NlbnQubWFpblwifVxuICAgIGRlZmF1bHQ6IHJldHVybiB7YmFja2dyb3VuZDogXCJuZXV0cmFsLmxpZ2h0XCIsIHRleHQ6IFwiYWNjZW50Lm1haW5cIn1cbiAgIH1cbiAgfSwgW2NvbG91clRoZW1lXSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggYmc9e2NvbG91clNjaGVtZS5iYWNrZ3JvdW5kfT5cbiAgICAgIDxIZWFkaW5nIHNpemU9XCJzbVwiIGNvbG9yPXtjb2xvdXJTY2hlbWUudGV4dH0+e2hlYWRpbmd9PC9IZWFkaW5nPlxuICAgICAgPFRleHQgY29sb3I9e2NvbG91clNjaGVtZS50ZXh0fT57dGV4dH08L1RleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJCb3giLCJIZWFkaW5nIiwiVGV4dCIsIldhcm5pbmciLCJwcm9wcyIsIndhcm5pbmciLCJoZWFkaW5nIiwidGV4dCIsImljb24iLCJjb2xvdXJUaGVtZSIsImNvbG91clNjaGVtZSIsImJhY2tncm91bmQiLCJiZyIsInNpemUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/public/components/Warning.tsx\n"));

/***/ })

});