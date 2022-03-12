/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&family=Rye&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  background-color: #007749;\\n  flex-direction: column;\\n  display: flex;\\n  min-height: 100vh;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #f7f7f7;\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n.container {\\n  max-width: 750px;\\n  margin: 0 auto;\\n}\\n\\nbutton {\\n  padding: 0.25rem;\\n  border: 2px solid black;\\n  cursor: pointer;\\n}\\n\\nheader {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n  align-items: center;\\n  gap: 1rem;\\n  padding: 1rem;\\n  position: sticky;\\n  top: 0;\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  backdrop-filter: blur(7px);\\n  z-index: 100;\\n  flex-shrink: 0;\\n}\\n\\nheader .branding {\\n  font-weight: 700;\\n  font-size: 2.25rem;\\n  font-family: 'Rye', cursive;\\n  color: yellow;\\n  text-shadow: 2px 2px #f00;\\n}\\n\\n.header nav {\\n  height: 100%;\\n  color: #fff;\\n}\\n\\nheader .nav-links {\\n  display: flex;\\n  list-style: none;\\n  align-items: center;\\n}\\n\\n.nav-links li {\\n  height: 100%;\\n  text-align: center;\\n}\\n\\n.nav-links li + li {\\n  border-left: 2px solid rgb(180, 180, 180);\\n}\\n\\n.nav-links li a {\\n  padding: 0.5rem 1rem;\\n}\\n\\n.nav-links li a:hover {\\n  text-decoration: underline;\\n  color: yellow;\\n}\\n\\nmain {\\n  max-width: 100%;\\n  width: 1100px;\\n  padding: 4rem;\\n  margin: 0 auto;\\n  flex-grow: 1;\\n}\\n\\n#home {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  gap: 5rem;\\n  height: 100%;\\n}\\n\\n.food-card {\\n  display: flex;\\n  flex-direction: column;\\n  width: 250px;\\n  max-width: 100%;\\n  text-align: center;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  backdrop-filter: blur(7px);\\n  border-radius: 15px;\\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25), 0.125em 0.125em 0.125em rgba(0, 0, 0, 0.15);\\n  overflow: hidden;\\n  min-height: 400px;\\n}\\n\\n.food-card > img {\\n  transition: all 0.5s ease-in-out;\\n  display: block;\\n  border-radius: 15px 15px 0 0;\\n  height: 250px;\\n  background-color: #0005;\\n}\\n\\n.food-card > .mid-sec {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 1rem;\\n  flex-grow: 1;\\n}\\n\\n.mid-sec > .food-title {\\n  width: 65%;\\n  color: #fff;\\n  text-align: left;\\n  line-height: 1.15em;\\n}\\n\\n.likes {\\n  cursor: pointer;\\n}\\n\\n.likes > i.fa-heart {\\n  color: rgb(211, 151, 151);\\n  transition: color 300ms ease;\\n}\\n\\n.likes:hover > i.fa-heart {\\n  color: red;\\n}\\n\\n.likes > .likes-counter {\\n  color: #fff;\\n  font-size: 12px;\\n  margin-top: 7px;\\n}\\n\\n.comments-button {\\n  width: 100%;\\n  padding: 15px 10px;\\n  font-size: 16px;\\n  border-radius: 0 0  15px 15px;\\n  border: none;\\n  transition: all 0.7s ease;\\n}\\n\\n.comments-button:focus {\\n  transform: scale(0.9);\\n}\\n\\n.food-card:hover > img {\\n  transform: scale(1.15);\\n  display: block;\\n}\\n\\n#about {\\n  background-color: #111;\\n  padding: 7rem 2rem;\\n  color: #eee;\\n}\\n\\n#about .container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n\\n#about .about-text {\\n  grid-column: 2 span;\\n  text-align: justify;\\n}\\n\\n#about .about-text h2 {\\n  text-align: center;\\n  margin-bottom: 2rem;\\n}\\n\\n#about h3 {\\n  margin-bottom: 1rem;\\n}\\n\\n#about .about-author ul {\\n  display: flex;\\n  list-style: none;\\n  gap: 1rem;\\n}\\n\\n#about .about-author ul .author {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  align-items: center;\\n  text-align: center;\\n}\\n\\n#about .about-author ul img {\\n  width: 100px;\\n  border-radius: 50%;\\n}\\n\\n#about .about-techs ul {\\n  display: flex;\\n  list-style: none;\\n  gap: 0.5rem;\\n  flex-wrap: wrap;\\n}\\n\\n#about .tech-item {\\n  font-size: 0.85rem;\\n  padding: 0.25rem 0.5rem;\\n  background: #007749;\\n  border-radius: 0.2rem;\\n}\\n\\nbutton:focus {\\n  outline: none;\\n}\\n\\nfooter {\\n  padding: 1rem;\\n  text-align: center;\\n  background-color: rgb(145, 182, 12);\\n  flex-shrink: 0;\\n}\\n\\nfooter p {\\n  font-size: 13px;\\n  font-weight: bolder;\\n  color: white;\\n}\\n\\n#comment-popup {\\n  position: fixed;\\n  inset: 0;\\n  padding: 1rem;\\n  max-height: 100vh;\\n  display: none;\\n  z-index: 1000;\\n  background-color: #f5f5f5;\\n}\\n\\n#comment-popup.show {\\n  display: block;\\n}\\n\\n#comment-popup .comment-popup-wrapper {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 2rem;\\n  background-color: #007749;\\n  color: #f5f5f5;\\n  overflow-y: auto;\\n  height: 100%;\\n  padding: 1rem;\\n  border-radius: 15px;\\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25), 0.125em 0.125em 0.125em rgba(0, 0, 0, 0.15);\\n  max-width: 950px;\\n  margin: auto;\\n}\\n\\n#close-popup-button {\\n  position: fixed;\\n  right: 1.5rem;\\n  top: 1.5rem;\\n  font-size: 3rem;\\n  line-height: 2rem;\\n  z-index: 5;\\n  padding: 0.5rem;\\n  background-color: rgba(205, 202, 50, 0);\\n  cursor: pointer;\\n}\\n\\n#comment-popup #food-image {\\n  display: block;\\n  max-width: 100%;\\n  max-height: 20rem;\\n  border-radius: 10px;\\n  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.4);\\n}\\n\\n#comments-header {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.badge {\\n  margin: 0.5rem;\\n  padding: 0.25rem;\\n  font-size: 0.7rem;\\n  border-radius: 0.75rem;\\n  background: #e3ac05;\\n  color: #000c;\\n  min-width: 1.5rem;\\n  display: inline-block;\\n  text-align: center;\\n}\\n\\n#comments {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  width: 100%;\\n  max-width: 500px;\\n  margin: 0 auto;\\n  color: #fff;\\n}\\n\\n.comment-popup-wrapper #food-description {\\n  width: 90%;\\n  margin: 0 auto;\\n}\\n\\n#comments li {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  padding: 1rem;\\n  border-radius: 0 1.5rem 1.5rem 1.5rem;\\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25), 0.125em 0.125em 0.125em rgba(0, 0, 0, 0.15);\\n}\\n\\n#comments li:nth-child(even) {\\n  border-radius: 1.5rem 0 1.5rem 1.5rem;\\n}\\n\\n#comments li .comment-author {\\n  font-weight: 700;\\n}\\n\\n#comments li .comment-message {\\n  font-size: 0.9rem;\\n}\\n\\n#comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 0.75rem;\\n  width: 100%;\\n  max-width: 400px;\\n}\\n\\n#comment-form input,\\n#comment-form textarea {\\n  padding: 0.5rem;\\n  border: none;\\n  border-radius: 10px;\\n  width: 100%;\\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25), 0.125em 0.125em 0.125em rgba(0, 0, 0, 0.15);\\n}\\n\\n#comment-form input,\\n#comment-form textarea:focus {\\n  outline: none;\\n}\\n\\n#comment-form button {\\n  align-self: center;\\n  width: 30%;\\n  border: none;\\n  border-radius: 10px;\\n  margin-top: 15px;\\n  padding: 10px 0;\\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25), 0.125em 0.125em 0.125em rgba(0, 0, 0, 0.15);\\n}\\n\\n@media (min-width: 700px) {\\n  #comment-popup {\\n    padding: 10vh;\\n  }\\n\\n  #about .container {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  #about .about-text {\\n    grid-column: 2 span;\\n  }\\n}\\n\\n.lds-roller {\\n  display: inline-block;\\n  position: relative;\\n  width: 80px;\\n  height: 80px;\\n}\\n\\n.lds-roller div {\\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\\n  transform-origin: 40px 40px;\\n}\\n\\n.lds-roller div::after {\\n  content: \\\" \\\";\\n  display: block;\\n  position: absolute;\\n  width: 7px;\\n  height: 7px;\\n  border-radius: 50%;\\n  background: #fff;\\n  margin: -4px 0 0 -4px;\\n}\\n\\n.lds-roller div:nth-child(1) {\\n  animation-delay: -0.036s;\\n}\\n\\n.lds-roller div:nth-child(1)::after {\\n  top: 63px;\\n  left: 63px;\\n}\\n\\n.lds-roller div:nth-child(2) {\\n  animation-delay: -0.072s;\\n}\\n\\n.lds-roller div:nth-child(2)::after {\\n  top: 68px;\\n  left: 56px;\\n}\\n\\n.lds-roller div:nth-child(3) {\\n  animation-delay: -0.108s;\\n}\\n\\n.lds-roller div:nth-child(3)::after {\\n  top: 71px;\\n  left: 48px;\\n}\\n\\n.lds-roller div:nth-child(4) {\\n  animation-delay: -0.144s;\\n}\\n\\n.lds-roller div:nth-child(4)::after {\\n  top: 72px;\\n  left: 40px;\\n}\\n\\n.lds-roller div:nth-child(5) {\\n  animation-delay: -0.18s;\\n}\\n\\n.lds-roller div:nth-child(5)::after {\\n  top: 71px;\\n  left: 32px;\\n}\\n\\n.lds-roller div:nth-child(6) {\\n  animation-delay: -0.216s;\\n}\\n\\n.lds-roller div:nth-child(6)::after {\\n  top: 68px;\\n  left: 24px;\\n}\\n\\n.lds-roller div:nth-child(7) {\\n  animation-delay: -0.252s;\\n}\\n\\n.lds-roller div:nth-child(7)::after {\\n  top: 63px;\\n  left: 17px;\\n}\\n\\n.lds-roller div:nth-child(8) {\\n  animation-delay: -0.288s;\\n}\\n\\n.lds-roller div:nth-child(8)::after {\\n  top: 56px;\\n  left: 12px;\\n}\\n\\n@keyframes lds-roller {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_core_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core-functions.js */ \"./src/modules/core-functions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n(0,_modules_core_functions_js__WEBPACK_IMPORTED_MODULE_0__.getAllFoodData)().then(() => {\n  (0,_modules_core_functions_js__WEBPACK_IMPORTED_MODULE_0__.getAllLikes)().then(() => {\n    (0,_modules_core_functions_js__WEBPACK_IMPORTED_MODULE_0__.showAllFood)();\n  }).then(() => {\n    (0,_modules_core_functions_js__WEBPACK_IMPORTED_MODULE_0__.displayitemCounter)();\n  });\n});\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/api-utils.js":
/*!**********************************!*\
  !*** ./src/modules/api-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"sendData\": () => (/* binding */ sendData)\n/* harmony export */ });\nconst getData = (url) => fetch(url).then((res) => res.json());\n\nconst sendData = (url, data) => fetch(url, {\n  method: 'POST',\n  headers: {\n    'Content-type': 'application/json; charset=UTF-8',\n  },\n  body: JSON.stringify(data),\n});\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/api-utils.js?");

/***/ }),

/***/ "./src/modules/core-functions.js":
/*!***************************************!*\
  !*** ./src/modules/core-functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPopUp\": () => (/* binding */ displayPopUp),\n/* harmony export */   \"displayitemCounter\": () => (/* binding */ displayitemCounter),\n/* harmony export */   \"getAllFoodData\": () => (/* binding */ getAllFoodData),\n/* harmony export */   \"getAllLikes\": () => (/* binding */ getAllLikes),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"likeFood\": () => (/* binding */ likeFood),\n/* harmony export */   \"showAllFood\": () => (/* binding */ showAllFood)\n/* harmony export */ });\n/* harmony import */ var _api_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-utils.js */ \"./src/modules/api-utils.js\");\n/* harmony import */ var _food_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-list.js */ \"./src/modules/food-list.js\");\n\n\n\nconst foodList = new _food_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';\nconst ALL_FOOD_ENDPOINT = 'filter.php?a=Jamaican';\nconst ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;\n\nconst INV_API_BASE = 'https://us-central1-involvement-api.cloudfunctions.net/'\n+ 'capstoneApi/apps/';\nconst INV_API_KEY = 'zX9lc5HNiZeTfJrwouGw';\nconst LIKES_ENDPOINT = '/likes';\nconst COMMENT_ENDPOINT = '/comments';\n\nconst foodListWrapper = document.getElementById('home');\nconst commentPopup = document.getElementById('comment-popup');\nconst itemCounter = document.getElementById('counter');\n\nconst getComments = (id) => new Promise((resolve) => {\n  const parameter = `?item_id=${id}`;\n  const COMMENT_API = INV_API_BASE + INV_API_KEY + COMMENT_ENDPOINT + parameter;\n  (0,_api_utils_js__WEBPACK_IMPORTED_MODULE_0__.getData)(COMMENT_API).then((commentsFromAPI) => {\n    if (commentsFromAPI.error) commentsFromAPI = [];\n    foodList.addComments(id, commentsFromAPI);\n    resolve();\n  });\n});\n\nconst postComment = (id, input, textarea) => {\n  const ADD_COMMENT_URL = INV_API_BASE + INV_API_KEY + COMMENT_ENDPOINT;\n  const data = {\n    item_id: id,\n    username: input.value,\n    comment: textarea.value,\n  };\n\n  (0,_api_utils_js__WEBPACK_IMPORTED_MODULE_0__.sendData)(ADD_COMMENT_URL, data).then((res) => {\n    if (res.status === 201) {\n      input.value = '';\n      textarea.value = '';\n      const commentWrapper = document.getElementById('comments');\n      commentWrapper.innerHTML += `<li class=\"comment\">\n        <h4 class=\"comment-author\">${data.username}</h4>\n        <p class=\"comment-message\">${data.comment}</p>\n        </li> `;\n    }\n  });\n};\n\nconst displayPopUp = (id) => {\n  commentPopup.classList.add('show');\n  commentPopup.innerHTML = `      <div id=\"close-popup-button\">&times;</div>\n    <div class=\"comment-popup-wrapper\">\n      <img id=\"food-image\" src=\"${foodList.foods[id].image}\" alt=\"\" />\n      <h2 id=\"food-title\">${foodList.foods[id].title}</h2>\n      <p id=\"food-description\">...</p>\n\n      <h3 id=\"comments-header\">Comments:</h3>\n      <ul id=\"comments\">\n      </ul>\n\n      <h3>Add Comment:</h3>\n      <form id=\"comment-form\">\n        <input type=\"text\" name=\"name\" id=\"nameField\" placeholder=\"Your Name\" required />\n        <textarea\n          name=\"comment\"\n          rows=\"5\"\n          placeholder=\"Your Comment\"\n          required\n          id=\"messageField\"\n        ></textarea>\n        <button id=\"button\" type=\"submit\">Submit</button>\n      </form>\n    </div>`;\n\n  const commentForm = document.getElementById('comment-form');\n  commentForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    postComment(id, e.target.name, e.target.comment);\n  });\n\n  const closeBtn = document.getElementById('close-popup-button');\n  closeBtn.addEventListener('click', () => {\n    commentPopup.classList.remove('show');\n  });\n  // fetching more details\n  const URL = `${FOOD_API_BASE_URL}lookup.php?i=${id}`;\n  (0,_api_utils_js__WEBPACK_IMPORTED_MODULE_0__.getData)(URL).then((res) => {\n    const foodItem = res.meals[0];\n    const foodDescElement = document.getElementById('food-description');\n    foodDescElement.innerHTML = foodItem.strInstructions;\n  });\n  getComments(id).then(() => {\n    const { comments } = foodList.foods[id];\n    const commentsHeader = document.getElementById('comments-header');\n    const commentWrapper = document.getElementById('comments');\n    if (comments.length) {\n      // add counter to comments header\n      commentsHeader.innerHTML += `<span class=\"badge\">${foodList.getCommentsCount(id)}</span>`;\n\n      comments.forEach((comment) => {\n        commentWrapper.innerHTML += `<li class=\"comment\">\n        <h4 class=\"comment-author\">${comment.username}</h4>\n        <p class=\"comment-message\">${comment.comment}</p>\n        </li> `;\n      });\n    } else {\n      commentWrapper.innerHTML = 'no comments';\n    }\n  });\n};\n\nconst likeFood = (id) => {\n  const url = INV_API_BASE + INV_API_KEY + LIKES_ENDPOINT;\n  const data = {\n    item_id: id,\n  };\n\n  // update like counter\n  (0,_api_utils_js__WEBPACK_IMPORTED_MODULE_0__.sendData)(url, data).then((res) => {\n    if (res.status === 201) {\n      const newLikes = foodList.getLikes(id) + 1;\n      foodList.setLikes(id, newLikes);\n      const likeWrapper = document.getElementById(id);\n      const counterElement = likeWrapper.querySelector('.likes-counter');\n      counterElement.innerHTML = foodList.getLikesText(id);\n    }\n  });\n};\n\nconst showAllFood = () => {\n  // clear loading text\n  foodListWrapper.innerHTML = '';\n\n  Object.keys(foodList.foods).forEach((foodId) => {\n    const food = foodList.foods[foodId];\n    foodListWrapper.innerHTML += `\n    <div class=\"food-card\" id=\"${foodId}\">\n      <img src=\"${food.image}\" alt=\"image of meal\" />\n      <div class=\"mid-sec\">\n        <h3 class=\"food-title\">${food.title}</h3>\n        <div class=\"likes\">\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n          <div class=\"likes-counter\">\n            ${foodList.getLikesText(foodId)}\n          </div>\n        </div>\n      </div>\n      <button class=\"btn comments-button\">more</button>\n    </div>\n    `;\n  });\n\n  const commentsButtons = foodListWrapper.querySelectorAll('.comments-button');\n  commentsButtons.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      displayPopUp(btn.parentElement.id);\n    });\n  });\n\n  const likeButtons = foodListWrapper.querySelectorAll('.likes');\n  likeButtons.forEach((likeBtn) => {\n    const foodId = likeBtn.parentElement.parentElement.id;\n    likeBtn.addEventListener('click', () => {\n      likeFood(foodId);\n    });\n  });\n};\n\nconst getAllFoodData = () => new Promise((resolve) => {\n  (0,_api_utils_js__WEBPACK_IMPORTED_MODULE_0__.getData)(ALL_FOOD_API_URL).then((res) => {\n    foodList.addFoods(res.meals);\n    resolve();\n  });\n});\n\nconst getAllLikes = () => new Promise((resolve) => {\n  const ALL_LIKES_API_URL = INV_API_BASE + INV_API_KEY + LIKES_ENDPOINT;\n  (0,_api_utils_js__WEBPACK_IMPORTED_MODULE_0__.getData)(ALL_LIKES_API_URL).then((likesFromAPI) => {\n    likesFromAPI.forEach((likeObject) => {\n      foodList.setLikes(likeObject.item_id, likeObject.likes);\n    });\n    resolve();\n  });\n});\n\nconst displayitemCounter = () => {\n  const size = foodList.getItemsCount();\n  itemCounter.innerHTML = `<span class=\"badge\">${size}<span>`;\n};\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/core-functions.js?");

/***/ }),

/***/ "./src/modules/food-list.js":
/*!**********************************!*\
  !*** ./src/modules/food-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FoodList)\n/* harmony export */ });\nclass FoodList {\n  constructor() {\n    this.foods = {};\n  }\n\n  addFood(id, title, image) {\n    this.foods[id] = {\n      title,\n      image,\n      comments: [],\n    };\n  }\n\n  addFoods(allFoods) {\n    allFoods.forEach((food) => {\n      this.addFood(\n        food.idMeal,\n        food.strMeal,\n        food.strMealThumb,\n      );\n    });\n  }\n\n  setLikes(id, likes) {\n    if (Object.keys(this.foods).includes(id)) {\n      this.foods[id].likes = likes;\n    }\n  }\n\n  getLikes(id) {\n    return this.foods[id].likes || 0;\n  }\n\n  getLikesText(id) {\n    const likes = this.getLikes(id);\n    if (likes <= 1) {\n      return `${likes} like`;\n    }\n    return `${likes} likes`;\n  }\n\n  addComments(id, comments) {\n    this.foods[id].comments = comments;\n  }\n\n  getComments(id) {\n    return this.foods[id].comments;\n  }\n\n  getCommentsCount(id) {\n    return this.foods[id].comments.length;\n  }\n\n  getItemsCount() {\n    return Object.keys(this.foods).length;\n  }\n}\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/food-list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;