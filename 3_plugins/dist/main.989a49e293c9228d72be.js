/*! For license information please see main.989a49e293c9228d72be.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/components/heading/heading.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://3_plugins/./src/components/heading/heading.css?")},"./src/components/heading/heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.css */ \"./src/components/heading/heading.css\");\n\r\n\r\nclass Heading{\r\n    \r\n    create(title){\r\n        const h1 = document.createElement('h1')\r\n        \r\n        h1.innerText = title;\r\n        \r\n        h1.classList.add('title')\r\n        \r\n        document.querySelector('body').appendChild(h1)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://3_plugins/./src/components/heading/heading.js?")},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading/heading.js */ "./src/components/heading/heading.js");\n\r\n\r\nconst heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__["default"]()\r\n\r\nheading.create(\'Página principal\')\r\n\r\nconsole.log("1.0.2")\r\nconsole.log("8080")\r\nconsole.log("343113F13G1313VG3s")\n\n//# sourceURL=webpack://3_plugins/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();