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

/***/ "./src/components/buttons/ChallengeButton.tsx":
/*!****************************************************!*\
  !*** ./src/components/buttons/ChallengeButton.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengeButton\": function() { return /* binding */ ChallengeButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\n\nvar ChallengeButton = function(props) {\n    var challenge = props.challenge;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n        w: \"100%\",\n        bg: \"neutral.main\",\n        borderRadius: \"md\",\n        p: \"3\",\n        spacing: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                src: challenge.image,\n                maxW: \"9\"\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/buttons/ChallengeButton.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n                spacing: \"0\",\n                align: \"flex-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        fontSize: \"xl\",\n                        children: challenge.label\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/buttons/ChallengeButton.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        fontSize: \"xl\",\n                        children: [\n                            challenge.completed,\n                            \"/\",\n                            challenge.duration\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/buttons/ChallengeButton.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/buttons/ChallengeButton.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/buttons/ChallengeButton.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c = ChallengeButton;\nvar _c;\n$RefreshReg$(_c, \"ChallengeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9idXR0b25zL0NoYWxsZW5nZUJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUV1RTtBQWNoRSxJQUFNSSxlQUFlLEdBQUcsU0FBQ0MsS0FBMkIsRUFBSztJQUM5RCxJQUFNLFNBQVcsR0FBS0EsS0FBSyxDQUFuQkMsU0FBUztJQUVqQixxQkFDRSw4REFBQ04sb0RBQU07UUFBQ08sQ0FBQyxFQUFDLE1BQU07UUFBQ0MsRUFBRSxFQUFDLGNBQWM7UUFBQ0MsWUFBWSxFQUFDLElBQUk7UUFBQ0MsQ0FBQyxFQUFDLEdBQUc7UUFBQ0MsT0FBTyxFQUFDLEdBQUc7OzBCQUNwRSw4REFBQ1YsaURBQUc7Z0JBQUNXLEdBQUcsRUFBRU4sU0FBUyxDQUFDTyxLQUFLO2dCQUFFQyxJQUFJLEVBQUMsR0FBRzs7Ozs7cUJBQUc7MEJBQ3RDLDhEQUFDWCxvREFBTTtnQkFBQ1EsT0FBTyxFQUFDLEdBQUc7Z0JBQUNJLEtBQUssRUFBQyxZQUFZOztrQ0FDcEMsOERBQUNiLHFEQUFPO3dCQUFDYyxRQUFRLEVBQUMsSUFBSTtrQ0FBRVYsU0FBUyxDQUFDVyxLQUFLOzs7Ozs2QkFBVztrQ0FDbEQsOERBQUNmLHFEQUFPO3dCQUFDYyxRQUFRLEVBQUMsSUFBSTs7NEJBQ25CVixTQUFTLENBQUNZLFNBQVM7NEJBQUMsR0FBQzs0QkFBQ1osU0FBUyxDQUFDYSxRQUFROzs7Ozs7NkJBQ2pDOzs7Ozs7cUJBQ0g7Ozs7OzthQUNGLENBQ1Q7Q0FDSCxDQUFDO0FBZFdmLEtBQUFBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9DaGFsbGVuZ2VCdXR0b24udHN4PzA3MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSFN0YWNrLCBJbWcsIEhlYWRpbmcsIFN0YWNrLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgdHlwZSBDaGFsbGVuZ2UgPSB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIGNvbXBsZXRlZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFsbGVuZ2VCdXR0b25Qcm9wcyB7XG4gIGNoYWxsZW5nZTogQ2hhbGxlbmdlO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlQnV0dG9uID0gKHByb3BzOiBDaGFsbGVuZ2VCdXR0b25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNoYWxsZW5nZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8SFN0YWNrIHc9XCIxMDAlXCIgYmc9XCJuZXV0cmFsLm1haW5cIiBib3JkZXJSYWRpdXM9XCJtZFwiIHA9XCIzXCIgc3BhY2luZz1cIjNcIj5cbiAgICAgIDxJbWcgc3JjPXtjaGFsbGVuZ2UuaW1hZ2V9IG1heFc9XCI5XCIgLz5cbiAgICAgIDxWU3RhY2sgc3BhY2luZz1cIjBcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPntjaGFsbGVuZ2UubGFiZWx9PC9IZWFkaW5nPlxuICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+XG4gICAgICAgICAge2NoYWxsZW5nZS5jb21wbGV0ZWR9L3tjaGFsbGVuZ2UuZHVyYXRpb259XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvSFN0YWNrPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJIU3RhY2siLCJJbWciLCJIZWFkaW5nIiwiVlN0YWNrIiwiQ2hhbGxlbmdlQnV0dG9uIiwicHJvcHMiLCJjaGFsbGVuZ2UiLCJ3IiwiYmciLCJib3JkZXJSYWRpdXMiLCJwIiwic3BhY2luZyIsInNyYyIsImltYWdlIiwibWF4VyIsImFsaWduIiwiZm9udFNpemUiLCJsYWJlbCIsImNvbXBsZXRlZCIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/buttons/ChallengeButton.tsx\n"));

/***/ })

});