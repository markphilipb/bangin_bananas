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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// // const { TwitterApi } = require(\"twitter-api-v2\");\n// // // const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);\n// // // const roClient = twitterClient.readOnly;\n// // const client = new TwitterApi({\n// //   appKey: process.env.TWITTER_API_KEY,\n// //   appSecret: process.env.TWITTER_API_KEY_SECRET,\n// //   accessToken: process.env.TWITTER_ACCESS_TOKEN,\n// //   accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,\n// // });\n// const { TwitterApi } = require(\"twitter-api-v2\");\n// const needle = require(\"needle\");\n// const likedTweetsendpointURL = \"http://localhost:4040/api/tweets\";\n// const token = process.env.TWITTER_BEARER_TOKEN;\n// const dateobj = new Date(\"January 9, 2022 00:01:00\");\n// const B = dateobj.toISOString();\n// export default async function handler(req, res) {\n//   const params = {\n//     \"tweet.fields\": \"lang,author_id,created_at\",\n//     query: \"#bangbangbanginbanana\",\n//     start_time: B,\n//   };\n//   // this is the HTTP header that adds bearer token authentication\n//   const resp = await needle(\"get\", likedTweetsendpointURL, params, {\n//     headers: {\n//       Authorization: `Bearer ${token}`,\n//     },\n//   });\n//   if (resp.body) {\n//     console.log(resp.body);\n//     console.log(B);\n//     res.status(200).json(resp.body.data);\n//   } else {\n//     throw new Error(\"Unsuccessful request\");\n//   }\n// }\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst needle = __webpack_require__(/*! needle */ \"needle\");\nfunction handler(req, res) {\n    needle.get(\"http://localhost:4040/api/tweets\", function(error, response) {\n        if (!error && response.statusCode == 200) {\n            console.log(response.body);\n            res.status(200).json(response.body);\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEVBQWdGO0FBQ2hGLEVBQXVEO0FBRXZELEVBQWdGO0FBQ2hGLEVBQWlEO0FBRWpELEVBQXFDO0FBQ3JDLEVBQTRDO0FBQzVDLEVBQXNEO0FBQ3RELEVBQXNEO0FBQ3RELEVBQThEO0FBQzlELEVBQVM7QUFDVCxFQUFvRDtBQUNwRCxFQUFvQztBQUVwQyxFQUFxRTtBQUNyRSxFQUFrRDtBQUNsRCxFQUF3RDtBQUN4RCxFQUFtQztBQUVuQyxFQUFvRDtBQUNwRCxFQUFxQjtBQUNyQixFQUFtRDtBQUNuRCxFQUFzQztBQUN0QyxFQUFxQjtBQUNyQixFQUFPO0FBRVAsRUFBcUU7QUFDckUsRUFBdUU7QUFDdkUsRUFBaUI7QUFDakIsRUFBMEM7QUFDMUMsRUFBUztBQUNULEVBQVE7QUFFUixFQUFxQjtBQUNyQixFQUE4QjtBQUM5QixFQUFzQjtBQUN0QixFQUE0QztBQUM1QyxFQUFhO0FBQ2IsRUFBK0M7QUFDL0MsRUFBTTtBQUNOLEVBQUk7QUFFSixFQUE2RTtBQUM3RSxLQUFLLENBQUNBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUTtBQUVoQixRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN6Q0osTUFBTSxDQUFDSyxHQUFHLENBQUMsQ0FBa0MsbUNBQUUsUUFBUSxDQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQ3pFLEVBQUUsR0FBR0QsS0FBSyxJQUFJQyxRQUFRLENBQUNDLFVBQVUsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQ0ksSUFBSTtZQUN6QlAsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ0ksSUFBSTtRQUNwQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YmFuZ2luYmFuYW5hcy8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG4vLyAvLyBjb25zdCB7IFR3aXR0ZXJBcGkgfSA9IHJlcXVpcmUoXCJ0d2l0dGVyLWFwaS12MlwiKTtcblxuLy8gLy8gLy8gY29uc3QgdHdpdHRlckNsaWVudCA9IG5ldyBUd2l0dGVyQXBpKHByb2Nlc3MuZW52LlRXSVRURVJfQkVBUkVSX1RPS0VOKTtcbi8vIC8vIC8vIGNvbnN0IHJvQ2xpZW50ID0gdHdpdHRlckNsaWVudC5yZWFkT25seTtcblxuLy8gLy8gY29uc3QgY2xpZW50ID0gbmV3IFR3aXR0ZXJBcGkoe1xuLy8gLy8gICBhcHBLZXk6IHByb2Nlc3MuZW52LlRXSVRURVJfQVBJX0tFWSxcbi8vIC8vICAgYXBwU2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX0FQSV9LRVlfU0VDUkVULFxuLy8gLy8gICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuVFdJVFRFUl9BQ0NFU1NfVE9LRU4sXG4vLyAvLyAgIGFjY2Vzc1NlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9BQ0NFU1NfVE9LRU5fU0VDUkVULFxuLy8gLy8gfSk7XG4vLyBjb25zdCB7IFR3aXR0ZXJBcGkgfSA9IHJlcXVpcmUoXCJ0d2l0dGVyLWFwaS12MlwiKTtcbi8vIGNvbnN0IG5lZWRsZSA9IHJlcXVpcmUoXCJuZWVkbGVcIik7XG5cbi8vIGNvbnN0IGxpa2VkVHdlZXRzZW5kcG9pbnRVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDA0MC9hcGkvdHdlZXRzXCI7XG4vLyBjb25zdCB0b2tlbiA9IHByb2Nlc3MuZW52LlRXSVRURVJfQkVBUkVSX1RPS0VOO1xuLy8gY29uc3QgZGF0ZW9iaiA9IG5ldyBEYXRlKFwiSmFudWFyeSA5LCAyMDIyIDAwOjAxOjAwXCIpO1xuLy8gY29uc3QgQiA9IGRhdGVvYmoudG9JU09TdHJpbmcoKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuLy8gICBjb25zdCBwYXJhbXMgPSB7XG4vLyAgICAgXCJ0d2VldC5maWVsZHNcIjogXCJsYW5nLGF1dGhvcl9pZCxjcmVhdGVkX2F0XCIsXG4vLyAgICAgcXVlcnk6IFwiI2JhbmdiYW5nYmFuZ2luYmFuYW5hXCIsXG4vLyAgICAgc3RhcnRfdGltZTogQixcbi8vICAgfTtcblxuLy8gICAvLyB0aGlzIGlzIHRoZSBIVFRQIGhlYWRlciB0aGF0IGFkZHMgYmVhcmVyIHRva2VuIGF1dGhlbnRpY2F0aW9uXG4vLyAgIGNvbnN0IHJlc3AgPSBhd2FpdCBuZWVkbGUoXCJnZXRcIiwgbGlrZWRUd2VldHNlbmRwb2ludFVSTCwgcGFyYW1zLCB7XG4vLyAgICAgaGVhZGVyczoge1xuLy8gICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4vLyAgICAgfSxcbi8vICAgfSk7XG5cbi8vICAgaWYgKHJlc3AuYm9keSkge1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3AuYm9keSk7XG4vLyAgICAgY29uc29sZS5sb2coQik7XG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcC5ib2R5LmRhdGEpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VjY2Vzc2Z1bCByZXF1ZXN0XCIpO1xuLy8gICB9XG4vLyB9XG5cbi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBuZWVkbGUgPSByZXF1aXJlKFwibmVlZGxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIG5lZWRsZS5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjQwNDAvYXBpL3R3ZWV0c1wiLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm5lZWRsZSIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZ2V0IiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/hello.js\n");

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