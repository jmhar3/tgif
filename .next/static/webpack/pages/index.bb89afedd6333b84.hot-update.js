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

/***/ "./src/public/components/RewardStore.tsx":
/*!***********************************************!*\
  !*** ./src/public/components/RewardStore.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RewardStore\": function() { return /* binding */ RewardStore; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar RewardStore = function(props) {\n    _s();\n    var rewards = props.rewards;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(), 2), isOpen = ref[0], setIsOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: setIsOpen.on,\n                px: \"3\",\n                backgroundColor: \"neutral.boldSheer\",\n                transition: \"all .3s\",\n                _hover: {\n                    backgroundColor: \"neutral.main\"\n                },\n                leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                    maxW: \"6\",\n                    src: \"/images/reward.png\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    fontSize: \"xl\",\n                    children: \"Reward Store\"\n                }, void 0, false, {\n                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                isOpen: isOpen,\n                onClose: setIsOpen.off,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        bg: \"neutral.main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                                    justify: \"space-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                                    maxW: \"9\",\n                                                    src: \"/images/reward.png\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                                    fontSize: \"2xl\",\n                                                    children: \"Reward Store\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                            bg: \"none\",\n                                            \"aria-label\": \"sort\",\n                                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                                maxW: \"9\",\n                                                src: \"/images/sort.png\"\n                                            }, void 0, false, void 0, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                                    children: rewards.map(function(reward) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                                            p: \"2\",\n                                            px: \"3\",\n                                            w: \"100%\",\n                                            borderRadius: \"md\",\n                                            justify: \"space-between\",\n                                            bg: \"neutral.light\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                                    size: \"md\",\n                                                    children: reward.label\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                                    color: \"accent.bold\",\n                                                    opacity: \"0.7\",\n                                                    size: \"md\",\n                                                    children: reward.value\n                                                }, void 0, false, {\n                                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                    w: \"100%\",\n                                    justify: \"center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        onClick: setIsOpen.off,\n                                        px: \"3\",\n                                        backgroundColor: \"neutral.boldSheer\",\n                                        transition: \"all .3s\",\n                                        _hover: {\n                                            backgroundColor: \"neutral.light\"\n                                        },\n                                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                            maxW: \"6\",\n                                            src: \"/images/star.png\"\n                                        }, void 0, false, void 0, void 0),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                            fontSize: \"xl\",\n                                            children: \"Earn more credits\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/public/components/RewardStore.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(RewardStore, \"89CE8GzRKxzMw9JFNbLGYPPZ3LU=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean\n    ];\n});\n_c = RewardStore;\nvar _c;\n$RefreshReg$(_c, \"RewardStore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHVibGljL2NvbXBvbmVudHMvUmV3YXJkU3RvcmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFpQjBCO0FBU25CLElBQU1jLFdBQVcsR0FBRyxTQUFDQyxLQUF1QixFQUFLOztJQUN0RCxJQUFNLE9BQVMsR0FBS0EsS0FBSyxDQUFqQkMsT0FBTztJQUVmLElBQTRCUCxHQUFZLG9GQUFaQSw0REFBVSxFQUFFLE1BQWpDUSxNQUFNLEdBQWVSLEdBQVksR0FBM0IsRUFBRVMsU0FBUyxHQUFJVCxHQUFZLEdBQWhCO0lBRXhCLHFCQUNFOzswQkFDRSw4REFBQ0gsb0RBQU07Z0JBQ0xhLE9BQU8sRUFBRUQsU0FBUyxDQUFDRSxFQUFFO2dCQUNyQkMsRUFBRSxFQUFDLEdBQUc7Z0JBQ05DLGVBQWUsRUFBQyxtQkFBbUI7Z0JBQ25DQyxVQUFVLEVBQUMsU0FBUztnQkFDcEJDLE1BQU0sRUFBRTtvQkFBRUYsZUFBZSxFQUFFLGNBQWM7aUJBQUU7Z0JBQzNDRyxRQUFRLGdCQUFFLDhEQUFDakIsaURBQUc7b0JBQUNrQixJQUFJLEVBQUMsR0FBRztvQkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjtpREFBRzswQkFFbkQsNEVBQUNwQixxREFBTztvQkFBQ3FCLFFBQVEsRUFBQyxJQUFJOzhCQUFDLGNBQVk7Ozs7O3lCQUFVOzs7OztxQkFDdEM7MEJBRVQsOERBQUM1QixtREFBSztnQkFBQ2lCLE1BQU0sRUFBRUEsTUFBTTtnQkFBRVksT0FBTyxFQUFFWCxTQUFTLENBQUNZLEdBQUc7O2tDQUMzQyw4REFBQzdCLDBEQUFZOzs7OzZCQUFHO2tDQUNoQiw4REFBQ0MsMERBQVk7d0JBQUM2QixFQUFFLEVBQUMsY0FBYzs7MENBQzdCLDhEQUFDNUIseURBQVc7MENBQ1YsNEVBQUNPLG9EQUFNO29DQUFDc0IsT0FBTyxFQUFDLGVBQWU7O3NEQUM3Qiw4REFBQ3RCLG9EQUFNOzs4REFDTCw4REFBQ0YsaURBQUc7b0RBQUNrQixJQUFJLEVBQUMsR0FBRztvREFBQ0MsR0FBRyxFQUFDLG9CQUFvQjs7Ozs7eURBQUc7OERBQ3pDLDhEQUFDcEIscURBQU87b0RBQUNxQixRQUFRLEVBQUMsS0FBSzs4REFBQyxjQUFZOzs7Ozt5REFBVTs7Ozs7O2lEQUN2QztzREFDVCw4REFBQ2Ysd0RBQVU7NENBQ1RrQixFQUFFLEVBQUMsTUFBTTs0Q0FDVEUsWUFBVSxFQUFDLE1BQU07NENBQ2pCQyxJQUFJLGdCQUFFLDhEQUFDMUIsaURBQUc7Z0RBQUNrQixJQUFJLEVBQUMsR0FBRztnREFBQ0MsR0FBRyxFQUFDLGtCQUFrQjs2RUFBRzs7Ozs7aURBQzdDOzs7Ozs7eUNBQ0s7Ozs7O3FDQUNHOzBDQUVkLDhEQUFDdEIsdURBQVM7MENBQ1IsNEVBQUNNLG9EQUFNOzhDQUNKSyxPQUFPLENBQUNtQixHQUFHLENBQUMsU0FBQ0MsTUFBTTs2REFDbEIsOERBQUMxQixvREFBTTs0Q0FDTDJCLENBQUMsRUFBQyxHQUFHOzRDQUNMaEIsRUFBRSxFQUFDLEdBQUc7NENBQ05pQixDQUFDLEVBQUMsTUFBTTs0Q0FDUkMsWUFBWSxFQUFDLElBQUk7NENBQ2pCUCxPQUFPLEVBQUMsZUFBZTs0Q0FDdkJELEVBQUUsRUFBQyxlQUFlOzs4REFFbEIsOERBQUN4QixxREFBTztvREFBQ2lDLElBQUksRUFBQyxJQUFJOzhEQUFFSixNQUFNLENBQUNLLEtBQUs7Ozs7O3lEQUFXOzhEQUMzQyw4REFBQ2xDLHFEQUFPO29EQUFDbUMsS0FBSyxFQUFDLGFBQWE7b0RBQUNDLE9BQU8sRUFBQyxLQUFLO29EQUFDSCxJQUFJLEVBQUMsSUFBSTs4REFDakRKLE1BQU0sQ0FBQ1EsS0FBSzs7Ozs7eURBQ0w7Ozs7OztpREFDSDtxQ0FDVixDQUFDOzs7Ozt5Q0FDSzs7Ozs7cUNBQ0M7MENBRVosOERBQUN4Qyx5REFBVzswQ0FDViw0RUFBQ1Esa0RBQUk7b0NBQUMwQixDQUFDLEVBQUMsTUFBTTtvQ0FBQ04sT0FBTyxFQUFDLFFBQVE7OENBQzdCLDRFQUFDMUIsb0RBQU07d0NBQ0xhLE9BQU8sRUFBRUQsU0FBUyxDQUFDWSxHQUFHO3dDQUN0QlQsRUFBRSxFQUFDLEdBQUc7d0NBQ05DLGVBQWUsRUFBQyxtQkFBbUI7d0NBQ25DQyxVQUFVLEVBQUMsU0FBUzt3Q0FDcEJDLE1BQU0sRUFBRTs0Q0FBRUYsZUFBZSxFQUFFLGVBQWU7eUNBQUU7d0NBQzVDRyxRQUFRLGdCQUFFLDhEQUFDakIsaURBQUc7NENBQUNrQixJQUFJLEVBQUMsR0FBRzs0Q0FBQ0MsR0FBRyxFQUFDLGtCQUFrQjt5RUFBRztrREFFakQsNEVBQUNwQixxREFBTzs0Q0FBQ3FCLFFBQVEsRUFBQyxJQUFJO3NEQUFDLG1CQUFpQjs7Ozs7aURBQVU7Ozs7OzZDQUMzQzs7Ozs7eUNBQ0o7Ozs7O3FDQUNLOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDVDs7b0JBQ1AsQ0FDSDtDQUNILENBQUM7R0F6RVdkLFdBQVc7O1FBR01MLHdEQUFVOzs7QUFIM0JLLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B1YmxpYy9jb21wb25lbnRzL1Jld2FyZFN0b3JlLnRzeD8zNDI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsRm9vdGVyLFxuICBNb2RhbEJvZHksXG4gIEJ1dHRvbixcbiAgSGVhZGluZyxcbiAgSW1nLFxuICB1c2VCb29sZWFuLFxuICBIU3RhY2ssXG4gIFZTdGFjayxcbiAgRmxleCxcbiAgSWNvbkJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmRTdG9yZVByb3BzIHtcbiAgcmV3YXJkczoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgfVtdO1xufVxuXG5leHBvcnQgY29uc3QgUmV3YXJkU3RvcmUgPSAocHJvcHM6IFJld2FyZFN0b3JlUHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXdhcmRzIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlQm9vbGVhbigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17c2V0SXNPcGVuLm9ufVxuICAgICAgICBweD1cIjNcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJuZXV0cmFsLmJvbGRTaGVlclwiXG4gICAgICAgIHRyYW5zaXRpb249XCJhbGwgLjNzXCJcbiAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogXCJuZXV0cmFsLm1haW5cIiB9fVxuICAgICAgICBsZWZ0SWNvbj17PEltZyBtYXhXPVwiNlwiIHNyYz1cIi9pbWFnZXMvcmV3YXJkLnBuZ1wiIC8+fVxuICAgICAgPlxuICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+UmV3YXJkIFN0b3JlPC9IZWFkaW5nPlxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17c2V0SXNPcGVuLm9mZn0+XG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudCBiZz1cIm5ldXRyYWwubWFpblwiPlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICAgICAgICA8SW1nIG1heFc9XCI5XCIgc3JjPVwiL2ltYWdlcy9yZXdhcmQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiPlJld2FyZCBTdG9yZTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgYmc9XCJub25lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic29ydFwiXG4gICAgICAgICAgICAgICAgaWNvbj17PEltZyBtYXhXPVwiOVwiIHNyYz1cIi9pbWFnZXMvc29ydC5wbmdcIiAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG5cbiAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICAgICAge3Jld2FyZHMubWFwKChyZXdhcmQpID0+IChcbiAgICAgICAgICAgICAgICA8SFN0YWNrXG4gICAgICAgICAgICAgICAgICBwPVwiMlwiXG4gICAgICAgICAgICAgICAgICBweD1cIjNcIlxuICAgICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgYmc9XCJuZXV0cmFsLmxpZ2h0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj57cmV3YXJkLmxhYmVsfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGNvbG9yPVwiYWNjZW50LmJvbGRcIiBvcGFjaXR5PVwiMC43XCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZXdhcmQudmFsdWV9XG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XG5cbiAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldElzT3Blbi5vZmZ9XG4gICAgICAgICAgICAgICAgcHg9XCIzXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJuZXV0cmFsLmJvbGRTaGVlclwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cImFsbCAuM3NcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IFwibmV1dHJhbC5saWdodFwiIH19XG4gICAgICAgICAgICAgICAgbGVmdEljb249ezxJbWcgbWF4Vz1cIjZcIiBzcmM9XCIvaW1hZ2VzL3N0YXIucG5nXCIgLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+RWFybiBtb3JlIGNyZWRpdHM8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIk1vZGFsRm9vdGVyIiwiTW9kYWxCb2R5IiwiQnV0dG9uIiwiSGVhZGluZyIsIkltZyIsInVzZUJvb2xlYW4iLCJIU3RhY2siLCJWU3RhY2siLCJGbGV4IiwiSWNvbkJ1dHRvbiIsIlJld2FyZFN0b3JlIiwicHJvcHMiLCJyZXdhcmRzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwib25DbGljayIsIm9uIiwicHgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiX2hvdmVyIiwibGVmdEljb24iLCJtYXhXIiwic3JjIiwiZm9udFNpemUiLCJvbkNsb3NlIiwib2ZmIiwiYmciLCJqdXN0aWZ5IiwiYXJpYS1sYWJlbCIsImljb24iLCJtYXAiLCJyZXdhcmQiLCJwIiwidyIsImJvcmRlclJhZGl1cyIsInNpemUiLCJsYWJlbCIsImNvbG9yIiwib3BhY2l0eSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/public/components/RewardStore.tsx\n"));

/***/ })

});