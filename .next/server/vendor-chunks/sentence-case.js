"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sentence-case";
exports.ids = ["vendor-chunks/sentence-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/sentence-case/dist.es2015/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sentence-case/dist.es2015/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sentenceCase: () => (/* binding */ sentenceCase),\n/* harmony export */   sentenceCaseTransform: () => (/* binding */ sentenceCaseTransform)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/dist.es2015/index.js\");\n/* harmony import */ var upper_case_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! upper-case-first */ \"(ssr)/./node_modules/upper-case-first/dist.es2015/index.js\");\n\n\n\nfunction sentenceCaseTransform(input, index) {\n    var result = input.toLowerCase();\n    if (index === 0)\n        return (0,upper_case_first__WEBPACK_IMPORTED_MODULE_0__.upperCaseFirst)(result);\n    return result;\n}\nfunction sentenceCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return (0,no_case__WEBPACK_IMPORTED_MODULE_1__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ delimiter: \" \", transform: sentenceCaseTransform }, options));\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2VudGVuY2UtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNBO0FBQ2lCO0FBQzNDO0FBQ1A7QUFDQTtBQUNBLGVBQWUsZ0VBQWM7QUFDN0I7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCLFdBQVcsK0NBQU0sUUFBUSwrQ0FBUSxHQUFHLGtEQUFrRDtBQUN0RjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHVpLy4vbm9kZV9tb2R1bGVzL3NlbnRlbmNlLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanM/NGM4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbm9DYXNlIH0gZnJvbSBcIm5vLWNhc2VcIjtcbmltcG9ydCB7IHVwcGVyQ2FzZUZpcnN0IH0gZnJvbSBcInVwcGVyLWNhc2UtZmlyc3RcIjtcbmV4cG9ydCBmdW5jdGlvbiBzZW50ZW5jZUNhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KSB7XG4gICAgdmFyIHJlc3VsdCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gdXBwZXJDYXNlRmlyc3QocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlbnRlbmNlQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiIFwiLCB0cmFuc2Zvcm06IHNlbnRlbmNlQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sentence-case/dist.es2015/index.js\n");

/***/ })

};
;