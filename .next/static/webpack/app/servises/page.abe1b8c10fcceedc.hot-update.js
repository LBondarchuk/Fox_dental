"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/servises/page",{

/***/ "(app-pages-browser)/./src/components/modals/modal/Modal.jsx":
/*!***********************************************!*\
  !*** ./src/components/modals/modal/Modal.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../button/Button */ \"(app-pages-browser)/./src/components/button/Button.jsx\");\n/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.module.scss */ \"(app-pages-browser)/./src/components/modals/modal/Modal.module.scss\");\n/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\n\nfunction CustomModal(param) {\n    let { show, setShow, children, header = \"Записатись\", isServise } = param;\n    const handleClose = ()=>setShow(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Container),\n        animate: {\n            scale: show ? 1 : 0\n        }\n    }, void 0, false, {\n        fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/components/modals/modal/Modal.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = CustomModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomModal);\nvar _c;\n$RefreshReg$(_c, \"CustomModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFscy9tb2RhbC9Nb2RhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ0M7QUFDTDtBQUNEO0FBQ0c7QUFFdkMsU0FBU0ssWUFBWSxLQUE2RDtRQUE3RCxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQTdEO0lBQ25CLE1BQU1DLGNBQWMsSUFBTUosUUFBUTtJQUVsQyxxQkFDRSw4REFBQ0gsaURBQU1BLENBQUNRLEdBQUc7UUFBQ0MsV0FBV1gscUVBQVk7UUFBRWEsU0FBUztZQUFFQyxPQUFPVixPQUFPLElBQUk7UUFBRTs7Ozs7O0FBbUJ4RTtLQXZCU0Q7QUF5QlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsL01vZGFsLmpzeD85YjUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBzdCBmcm9tICcuL01vZGFsLm1vZHVsZS5zY3NzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmZ1bmN0aW9uIEN1c3RvbU1vZGFsKHsgc2hvdywgc2V0U2hvdywgY2hpbGRyZW4sIGhlYWRlciA9ICfQl9Cw0L/QuNGB0LDRgtC40YHRjCcsIGlzU2VydmlzZSB9KSB7XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0LkNvbnRhaW5lcn0gYW5pbWF0ZT17eyBzY2FsZTogc2hvdyA/IDEgOiAwIH19PlxuICAgICAgey8qIDxNb2RhbFxuICAgICAgc2hvdz17c2hvd31cbiAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2V9XG4gICAgICBkaWFsb2dDbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBbc3QuY3VzdG9tTW9kYWxdOiBpc1NlcnZpc2UgfSl9XG4gICAgPlxuICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgPE1vZGFsLlRpdGxlXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsIGZvbnRTaXplOiAzMiwgZm9udFdlaWdodDogNDAwLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICA8L01vZGFsLlRpdGxlPlxuICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0LmNvbnRhaW5lcn0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgIDwvTW9kYWw+ICovfVxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tTW9kYWw7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiTW9kYWwiLCJzdCIsImNsYXNzTmFtZXMiLCJtb3Rpb24iLCJDdXN0b21Nb2RhbCIsInNob3ciLCJzZXRTaG93IiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJpc1NlcnZpc2UiLCJoYW5kbGVDbG9zZSIsImRpdiIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsImFuaW1hdGUiLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modals/modal/Modal.jsx\n"));

/***/ })

});