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

/***/ "./src/components/modals/RewardStoreModal.tsx":
/*!****************************************************!*\
  !*** ./src/components/modals/RewardStoreModal.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RewardStoreModal\": function() { return /* binding */ RewardStoreModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar RewardStoreModal = function(props) {\n    _s();\n    var rewards = props.rewards, credits = props.credits, isOpen = props.isOpen, onClose = props.onClose;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rewards), sortedRewards = ref[0], setSortedRewards = ref[1];\n    var sortRewards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var lowToHigh = rewards.sort(function(a, b) {\n            return a.value - b.value;\n        });\n        var highToLow = rewards.sort(function(a, b) {\n            return a.value - b.value;\n        });\n        if (sortedRewards === rewards) {\n            setSortedRewards(lowToHigh);\n        } else if (sortedRewards === lowToHigh) {\n            setSortedRewards(highToLow);\n        } else if (sortedRewards === highToLow) {\n            return rewards;\n        }\n    }, [\n        rewards,\n        sortedRewards,\n        setSortedRewards\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n        isOpen: isOpen,\n        onClose: onClose,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                bg: \"neutral.main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                            justify: \"space-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                            maxW: \"9\",\n                                            src: \"/images/reward.png\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                            fontSize: \"2xl\",\n                                            children: \"Reward Store\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                    onClick: function() {\n                                        console.log(sortedRewards);\n                                        sortRewards();\n                                    },\n                                    bg: \"none\",\n                                    \"aria-label\": \"sort\",\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                        maxW: \"9\",\n                                        src: \"/images/sort.png\"\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                            children: sortedRewards.map(function(reward) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    p: \"2\",\n                                    px: \"3\",\n                                    w: \"100%\",\n                                    bg: \"neutral.light\",\n                                    transition: \"all .3s\",\n                                    _hover: {\n                                        backgroundColor: \"neutral.boldSheer\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                                        w: \"100%\",\n                                        borderRadius: \"md\",\n                                        justify: \"space-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                                size: \"md\",\n                                                children: reward.label\n                                            }, void 0, false, {\n                                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                                color: credits >= reward.value ? \"accent.main\" : \"accent.bold\",\n                                                opacity: \"0.7\",\n                                                size: \"md\",\n                                                children: reward.value\n                                            }, void 0, false, {\n                                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                            w: \"100%\",\n                            justify: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: onClose,\n                                px: \"3\",\n                                backgroundColor: \"neutral.boldSheer\",\n                                transition: \"all .3s\",\n                                _hover: {\n                                    backgroundColor: \"neutral.light\"\n                                },\n                                leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                    maxW: \"6\",\n                                    src: \"/images/star.png\"\n                                }, void 0, false, void 0, void 0),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                    fontSize: \"xl\",\n                                    children: \"Earn more credits\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/modals/RewardStoreModal.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(RewardStoreModal, \"isMBPiMiCcJ3pWsG2KP+WDJCil8=\");\n_c = RewardStoreModal;\nvar _c;\n$RefreshReg$(_c, \"RewardStoreModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvUmV3YXJkU3RvcmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUE4QztBQWlCcEI7QUFjbkIsSUFBTWUsZ0JBQWdCLEdBQUcsU0FBQ0MsS0FBNEIsRUFBSzs7SUFDaEUsSUFBUUMsT0FBTyxHQUErQkQsS0FBSyxDQUEzQ0MsT0FBTyxFQUFFQyxPQUFPLEdBQXNCRixLQUFLLENBQWxDRSxPQUFPLEVBQUVDLE1BQU0sR0FBY0gsS0FBSyxDQUF6QkcsTUFBTSxFQUFFQyxPQUFPLEdBQUtKLEtBQUssQ0FBakJJLE9BQU87SUFFekMsSUFBMENwQixHQUEyQixHQUEzQkEsK0NBQVEsQ0FBV2lCLE9BQU8sQ0FBQyxFQUE5REksYUFBYSxHQUFzQnJCLEdBQTJCLEdBQWpELEVBQUVzQixnQkFBZ0IsR0FBSXRCLEdBQTJCLEdBQS9CO0lBRXRDLElBQU11QixXQUFXLEdBQUd0QixrREFBVyxDQUFDLFdBQU07UUFDcEMsSUFBTXVCLFNBQVMsR0FBR1AsT0FBTyxDQUFDUSxJQUFJLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7WUFDdkMsT0FBT0QsQ0FBQyxDQUFDRSxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1NBQzFCLENBQUM7UUFDRixJQUFNQyxTQUFTLEdBQUdaLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDLFNBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFLO1lBQ3ZDLE9BQU9ELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztTQUMxQixDQUFDO1FBQ0YsSUFBSVAsYUFBYSxLQUFLSixPQUFPLEVBQUU7WUFDN0JLLGdCQUFnQixDQUFDRSxTQUFTLENBQUMsQ0FBQztTQUM3QixNQUFNLElBQUlILGFBQWEsS0FBS0csU0FBUyxFQUFFO1lBQ3RDRixnQkFBZ0IsQ0FBQ08sU0FBUyxDQUFDLENBQUM7U0FDN0IsTUFBTSxJQUFJUixhQUFhLEtBQUtRLFNBQVMs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OztxQ0FDM0M7Ozs7O2lDQUNKOzs7Ozs2QkFDSzs7Ozs7O3FCQUNEOzs7Ozs7YUFDVCxDQUNSO0NBQ0gsQ0FBQztHQXhGV25CLGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vZGFscy9SZXdhcmRTdG9yZU1vZGFsLnRzeD9mM2Y5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBNb2RhbCxcbiAgTW9kYWxPdmVybGF5LFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbEZvb3RlcixcbiAgTW9kYWxCb2R5LFxuICBCdXR0b24sXG4gIEhlYWRpbmcsXG4gIEltZyxcbiAgdXNlQm9vbGVhbixcbiAgSFN0YWNrLFxuICBWU3RhY2ssXG4gIEZsZXgsXG4gIEljb25CdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV3YXJkIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmRTdG9yZU1vZGFsUHJvcHMge1xuICByZXdhcmRzOiBSZXdhcmRbXTtcbiAgY3JlZGl0czogbnVtYmVyO1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFJld2FyZFN0b3JlTW9kYWwgPSAocHJvcHM6IFJld2FyZFN0b3JlTW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB7IHJld2FyZHMsIGNyZWRpdHMsIGlzT3Blbiwgb25DbG9zZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3NvcnRlZFJld2FyZHMsIHNldFNvcnRlZFJld2FyZHNdID0gdXNlU3RhdGU8UmV3YXJkW10+KHJld2FyZHMpO1xuXG4gIGNvbnN0IHNvcnRSZXdhcmRzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGxvd1RvSGlnaCA9IHJld2FyZHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEudmFsdWUgLSBiLnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IGhpZ2hUb0xvdyA9IHJld2FyZHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEudmFsdWUgLSBiLnZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChzb3J0ZWRSZXdhcmRzID09PSByZXdhcmRzKSB7XG4gICAgICBzZXRTb3J0ZWRSZXdhcmRzKGxvd1RvSGlnaCk7XG4gICAgfSBlbHNlIGlmIChzb3J0ZWRSZXdhcmRzID09PSBsb3dUb0hpZ2gpIHtcbiAgICAgIHNldFNvcnRlZFJld2FyZHMoaGlnaFRvTG93KTtcbiAgICB9IGVsc2UgaWYgKHNvcnRlZFJld2FyZHMgPT09IGhpZ2hUb0xvdykge1xuICAgICAgcmV0dXJuIHJld2FyZHM7XG4gICAgfVxuICB9LCBbcmV3YXJkcywgc29ydGVkUmV3YXJkcywgc2V0U29ydGVkUmV3YXJkc10pO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgIDxNb2RhbENvbnRlbnQgYmc9XCJuZXV0cmFsLm1haW5cIj5cbiAgICAgICAgPE1vZGFsSGVhZGVyPlxuICAgICAgICAgIDxIU3RhY2sganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjlcIiBzcmM9XCIvaW1hZ2VzL3Jld2FyZC5wbmdcIiAvPlxuICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiPlJld2FyZCBTdG9yZTwvSGVhZGluZz5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvcnRlZFJld2FyZHMpO1xuICAgICAgICAgICAgICAgIHNvcnRSZXdhcmRzKCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGJnPVwibm9uZVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzb3J0XCJcbiAgICAgICAgICAgICAgaWNvbj17PEltZyBtYXhXPVwiOVwiIHNyYz1cIi9pbWFnZXMvc29ydC5wbmdcIiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XG5cbiAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgICAge3NvcnRlZFJld2FyZHMubWFwKChyZXdhcmQpID0+IChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHA9XCIyXCJcbiAgICAgICAgICAgICAgICBweD1cIjNcIlxuICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBiZz1cIm5ldXRyYWwubGlnaHRcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJhbGwgLjNzXCJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiBcIm5ldXRyYWwuYm9sZFNoZWVyXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIU3RhY2sgdz1cIjEwMCVcIiBib3JkZXJSYWRpdXM9XCJtZFwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj57cmV3YXJkLmxhYmVsfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgICBjcmVkaXRzID49IHJld2FyZC52YWx1ZSA/IFwiYWNjZW50Lm1haW5cIiA6IFwiYWNjZW50LmJvbGRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjdcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cmV3YXJkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgIHB4PVwiM1wiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIm5ldXRyYWwuYm9sZFNoZWVyXCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cImFsbCAuM3NcIlxuICAgICAgICAgICAgICBfaG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiBcIm5ldXRyYWwubGlnaHRcIiB9fVxuICAgICAgICAgICAgICBsZWZ0SWNvbj17PEltZyBtYXhXPVwiNlwiIHNyYz1cIi9pbWFnZXMvc3Rhci5wbmdcIiAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPkVhcm4gbW9yZSBjcmVkaXRzPC9IZWFkaW5nPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIk1vZGFsIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbEZvb3RlciIsIk1vZGFsQm9keSIsIkJ1dHRvbiIsIkhlYWRpbmciLCJJbWciLCJIU3RhY2siLCJWU3RhY2siLCJGbGV4IiwiSWNvbkJ1dHRvbiIsIlJld2FyZFN0b3JlTW9kYWwiLCJwcm9wcyIsInJld2FyZHMiLCJjcmVkaXRzIiwiaXNPcGVuIiwib25DbG9zZSIsInNvcnRlZFJld2FyZHMiLCJzZXRTb3J0ZWRSZXdhcmRzIiwic29ydFJld2FyZHMiLCJsb3dUb0hpZ2giLCJzb3J0IiwiYSIsImIiLCJ2YWx1ZSIsImhpZ2hUb0xvdyIsImJnIiwianVzdGlmeSIsIm1heFciLCJzcmMiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiYXJpYS1sYWJlbCIsImljb24iLCJtYXAiLCJyZXdhcmQiLCJwIiwicHgiLCJ3IiwidHJhbnNpdGlvbiIsIl9ob3ZlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInNpemUiLCJsYWJlbCIsImNvbG9yIiwib3BhY2l0eSIsImxlZnRJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modals/RewardStoreModal.tsx\n"));

/***/ })

});