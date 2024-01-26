"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/prices/page",{

/***/ "(app-pages-browser)/./src/app/prices/page.jsx":
/*!*********************************!*\
  !*** ./src/app/prices/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Prices.module.scss */ \"(app-pages-browser)/./src/app/prices/Prices.module.scss\");\n/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ \"(app-pages-browser)/./src/firebase.js\");\n/* harmony import */ var _components_pricesPageComponents_ansver_Ansver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pricesPageComponents/ansver/Ansver */ \"(app-pages-browser)/./src/components/pricesPageComponents/ansver/Ansver.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Prices = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isActive = (name)=>active === name;\n    const fetchData = async ()=>{\n        try {\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"prices\"));\n            querySnapshot.forEach((doc)=>{\n                setData(doc.data);\n            });\n        } catch (error) {\n            console.error(\"Error fetching documents:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const items = [];\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fake)\n            }, void 0, false, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: \"ЦІНИ\"\n            }, void 0, false, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().list),\n                children: [\n                    items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Transition, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),\n                                    onClick: ()=>setActive(isActive(item.name) ? \"\" : item.name),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().itemTitle),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().action),\n                                                    children: isActive(item.name) ? \"-\" : \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                maxHeight: isActive(item.name) ? \"500px\" : \"0\",\n                                                transition: \"max-height 0.5s ease\",\n                                                overflow: \"hidden\"\n                                            },\n                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().children),\n                                            children: item.children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().servise),\n                                                            children: child.servise\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().price),\n                                                            children: [\n                                                                child.price,\n                                                                \" грн\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, child.servise, true, {\n                                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, item.name, true, {\n                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pricesPageComponents_ansver_Ansver__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Prices, \"MiAt5RlpeGmMtkIb6W1wMp8Geqg=\");\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJpY2VzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ047QUFDbUI7QUFDckI7QUFDaUM7QUFFckUsTUFBTU8sU0FBUzs7SUFDYixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFDckMsTUFBTVksV0FBVyxDQUFDQyxPQUFTSCxXQUFXRztJQUV0QyxNQUFNQyxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxnQkFBZ0IsTUFBTVgsMkRBQU9BLENBQUNELDhEQUFVQSxDQUFDRSx5Q0FBRUEsRUFBRTtZQUNuRFUsY0FBY0MsT0FBTyxDQUFDLENBQUNDO2dCQUNyQlIsUUFBUVEsSUFBSVQsSUFBSTtZQUNsQjtRQUNGLEVBQUUsT0FBT1UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztJQUNGO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSYTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1NLFFBQVEsRUFBRTtJQUNoQkQsUUFBUUUsR0FBRyxDQUFDYjtJQUVaLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFXckIsc0VBQVk7OzBCQUMxQiw4REFBQ29CO2dCQUFJQyxXQUFXckIsaUVBQU87Ozs7OzswQkFDdkIsOERBQUN3QjtnQkFBR0gsV0FBV3JCLGtFQUFROzBCQUFFOzs7Ozs7MEJBQ3pCLDhEQUFDb0I7Z0JBQUlDLFdBQVdyQixpRUFBTzs7b0JBQ3BCa0IsTUFBTVMsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQzs7OENBQ0MsOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ1Y7b0NBQ0NDLFdBQVdyQixpRUFBTztvQ0FFbEIrQixTQUFTLElBQU10QixVQUFVQyxTQUFTa0IsS0FBS2pCLElBQUksSUFBSSxLQUFLaUIsS0FBS2pCLElBQUk7O3NEQUU3RCw4REFBQ1M7NENBQUlDLFdBQVdyQixzRUFBWTs7OERBQzFCLDhEQUFDb0I7b0RBQUlDLFdBQVdyQixpRUFBTzs4REFBRzRCLEtBQUtqQixJQUFJOzs7Ozs7OERBQ25DLDhEQUFDUztvREFBSUMsV0FBV3JCLG1FQUFTOzhEQUFHVSxTQUFTa0IsS0FBS2pCLElBQUksSUFBSSxNQUFNOzs7Ozs7Ozs7Ozs7c0RBRTFELDhEQUFDUzs0Q0FDQ2MsT0FBTztnREFDTEMsV0FBV3pCLFNBQVNrQixLQUFLakIsSUFBSSxJQUFJLFVBQVU7Z0RBQzNDeUIsWUFBWTtnREFDWkMsVUFBVTs0Q0FDWjs0Q0FDQWhCLFdBQVdyQixxRUFBVztzREFFckI0QixLQUFLVSxRQUFRLENBQUNYLEdBQUcsQ0FBQyxDQUFDWSxzQkFDbEIsOERBQUNuQjtvREFBSUMsV0FBV3JCLHdFQUFjOztzRUFDNUIsOERBQUNvQjs0REFBSUMsV0FBV3JCLG9FQUFVO3NFQUFHdUMsTUFBTUUsT0FBTzs7Ozs7O3NFQUMxQyw4REFBQ3JCOzREQUFJQyxXQUFXckIsa0VBQVE7O2dFQUFHdUMsTUFBTUcsS0FBSztnRUFBQzs7Ozs7Ozs7bURBRkpILE1BQU1FLE9BQU87Ozs7Ozs7Ozs7O21DQWhCakRiLEtBQUtqQixJQUFJOzs7OztnQ0FzQlQ7Ozs7Ozs7a0NBR1gsOERBQUNtQjs7Ozs7Ozs7Ozs7MEJBRUgsOERBQUMxQixzRkFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0EvRE1DO0tBQUFBO0FBaUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJpY2VzL3BhZ2UuanN4P2IyZGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0IGZyb20gJy4vUHJpY2VzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XG5pbXBvcnQgQW5zdmVyIGZyb20gJ0AvY29tcG9uZW50cy9wcmljZXNQYWdlQ29tcG9uZW50cy9hbnN2ZXIvQW5zdmVyJztcblxuY29uc3QgUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaXNBY3RpdmUgPSAobmFtZSkgPT4gYWN0aXZlID09PSBuYW1lO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgJ3ByaWNlcycpKTtcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIHNldERhdGEoZG9jLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRvY3VtZW50czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBpdGVtcyA9IFtdO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0LmZha2V9PjwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3QudGl0bGV9PtCm0IbQndCYPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5saXN0fT5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxUcmFuc2l0aW9uPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3QuaXRlbX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShpc0FjdGl2ZShpdGVtLm5hbWUpID8gJycgOiBpdGVtLm5hbWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3QuaXRlbVRpdGxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3QubmFtZX0+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3QuYWN0aW9ufT57aXNBY3RpdmUoaXRlbS5uYW1lKSA/ICctJyA6ICcrJ308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBpc0FjdGl2ZShpdGVtLm5hbWUpID8gJzUwMHB4JyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdtYXgtaGVpZ2h0IDAuNXMgZWFzZScsXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0LmNoaWxkcmVufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0LmRlc2NyaXB0aW9ufSBrZXk9e2NoaWxkLnNlcnZpc2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3Quc2VydmlzZX0+e2NoaWxkLnNlcnZpc2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5wcmljZX0+e2NoaWxkLnByaWNlfSDQs9GA0L08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PnsnICd9XG4gICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICApKX1cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBbnN2ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0IiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJkYiIsIkFuc3ZlciIsIlByaWNlcyIsImRhdGEiLCJzZXREYXRhIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaXNBY3RpdmUiLCJuYW1lIiwiZmV0Y2hEYXRhIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJlcnJvciIsImNvbnNvbGUiLCJpdGVtcyIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZha2UiLCJoMSIsInRpdGxlIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJUcmFuc2l0aW9uIiwiaHIiLCJvbkNsaWNrIiwiaXRlbVRpdGxlIiwiYWN0aW9uIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0cmFuc2l0aW9uIiwib3ZlcmZsb3ciLCJjaGlsZHJlbiIsImNoaWxkIiwiZGVzY3JpcHRpb24iLCJzZXJ2aXNlIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/prices/page.jsx\n"));

/***/ })

});