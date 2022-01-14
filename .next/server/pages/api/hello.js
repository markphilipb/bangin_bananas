"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "needle":
/*!*************************!*\
  !*** external "needle" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("needle");

/***/ }),

/***/ "./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst needle = __webpack_require__(/*! needle */ \"needle\");\nfunction handler(req, res) {\n    const url = process.env.HOST + \"/api/tweets\";\n    console.log(url);\n    needle.get(url, function(error, response) {\n        if (!error && response.statusCode == 200) {\n            console.log(response.body);\n            res.status(200).json(response.body);\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEVBQTZFO0FBQzdFLEtBQUssQ0FBQ0EsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRO0FBRWhCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3pDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLENBQWE7SUFDNUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxHQUFHO0lBQ2ZMLE1BQU0sQ0FBQ1csR0FBRyxDQUFDTixHQUFHLEVBQUUsUUFBUSxDQUFFTyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLEVBQUUsR0FBR0QsS0FBSyxJQUFJQyxRQUFRLENBQUNDLFVBQVUsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN6Q0wsT0FBTyxDQUFDQyxHQUFHLENBQUNHLFFBQVEsQ0FBQ0UsSUFBSTtZQUN6QlgsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0UsSUFBSTtRQUNwQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YmFuZ2luYmFuYW5hcy8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBuZWVkbGUgPSByZXF1aXJlKFwibmVlZGxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkhPU1QgKyBcIi9hcGkvdHdlZXRzXCI7XG4gIGNvbnNvbGUubG9nKHVybCk7XG4gIG5lZWRsZS5nZXQodXJsLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm5lZWRsZSIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXJsIiwicHJvY2VzcyIsImVudiIsIkhPU1QiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJib2R5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();