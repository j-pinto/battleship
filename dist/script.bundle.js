/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/curry.js":
/*!**********************!*\
  !*** ./src/curry.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "curry": () => (/* binding */ curry)
/* harmony export */ });
/*******************************************************************************
NOTICE: The code for the following function was taken from an educational article on function curring from The Modern Javascript Tutorial website. The code is used as a part of this project for personal educational purposes only as per the terms provided in The Modern Javascript Tutorial License.
* 
*   Title: The Modern Javascript Tutorial - Currying
*   Primary Author: Ilya Kantor
*   Other Contributors: Peter Roche, Lakshya Thakur, Aakodal, Charlie Karniol 
*   Availability: https://javascript.info/currying-partials
*   License: https://github.com/javascript-tutorial/en.javascript.info/blob/master/LICENSE.md
*******************************************************************************/

const curry = function (func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
};




/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boatFactory": () => (/* binding */ boatFactory),
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "computerFactory": () => (/* binding */ computerFactory)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");


const boatFactory = function (title, len) {
	let name = title;
	let length = len;
	let positions = [];
	let hits = 0;
	let sunk = false;

	return { name, length, positions, hits, sunk };
};

const playerFactory = function () {
	//private properties (not included in returned object)
	let boats = [
		boatFactory("carrier", 5),
		boatFactory("battleship", 4),
		boatFactory("cruiser", 3),
		boatFactory("submarine", 3),
		boatFactory("destroyer", 2),
	];

	let previousHits = [];
	let previousMisses = [];
	let previousShots = [];

	//public getter methods (are included in returned object)
	const getAllBoats = () => boats;
	const getPrevHits = () => previousHits;
	const getPrevMisses = () => previousMisses;
	const getPrevShots = () => previousShots;
	const getBoatByName = (name) => boats.find((boat) => boat.name == name);

	//other public methods (are included in returned object)
	const addPrevHit = function (shot) {
		previousHits.push(shot);
		previousShots.push(shot);
	};

	const addPrevMiss = function (shot) {
		previousMisses.push(shot);
		previousShots.push(shot);
	};

	const placeSingleBoat = (boatName, positionSet) => {
		let boat = getBoatByName(boatName);
		boat.positions = positionSet;
	};

	const placeAllBoatsRandomly = () => {
		let boats = getAllBoats();
		boats.forEach((boat) => {
			boat.positions = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.randomBoatPlacement)(boats, boat.length);
		});
	};

	const registerHit = function (boatName) {
		let boat = getBoatByName(boatName);
		boat.hits++;
	};

	const sinkBoat = function (boatName) {
		let boat = getBoatByName(boatName);
		boat.sunk = true;
	};

	return {
		getAllBoats,
		getBoatByName,
		getPrevHits,
		getPrevMisses,
		getPrevShots,
		addPrevHit,
		addPrevMiss,
		placeSingleBoat,
		placeAllBoatsRandomly,
		registerHit,
		sinkBoat,
	};
};

const computerFactory = function () {
	let computer = playerFactory();

	//additional private properties for computer object
	//(not inherited, not included in return object)
	let investigating = false;
	let suspended = false;
	const investigationSteps = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let origin = [];
	let currentShot = [];
	let currentStep = [];
	let currentInvHits = [];
	let futureInvestigation = [];

	//public methods (are included in returned object)
	const isInvestigating = () => investigating;

	const startNewInvestigation = function (newHit) {
		investigating = true;
		origin = newHit;
		currentInvHits.push(newHit);
		currentStep = investigationSteps[0];
	};

	const determineFutureInv = function (sunkBoatLength) {
		//get all sunkBoat hits
		let invertedStep = [currentStep[0] * -1, currentStep[1] * -1];
		let sunkBoatPositions = [currentShot];
		for (let i = 0; i < sunkBoatLength - 1; i++) {
			let nextPos = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.increment)(sunkBoatPositions[i], invertedStep);
			sunkBoatPositions.push(nextPos);
		}

		//filter sunkBoat hits from invHits, assign to future
		futureInvestigation = currentInvHits.filter(
			(shot) => !(0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.setContainsMatch)(shot, sunkBoatPositions)
		);

		return futureInvestigation;
	};

	const suspendInvestigation = function () {
		suspended = true;
		switchInvestigationDirection();
		origin = [];
		currentShot = [];
		currentInvHits = [];
	};

	const resumeInvestigation = function () {
		suspended = false;
		let resumeStartingPoint = futureInvestigation.shift();
		origin = resumeStartingPoint;
		currentInvHits.push(resumeStartingPoint);
	};

	const endInvestigation = function () {
		suspendInvestigation();
		investigating = false;
	};

	const addInvestigationHit = function (shot) {
		currentInvHits.push(shot);
	};

	const getNextInvestigationShot = function () {
		if (currentShot.length == 0) {
			currentShot = origin;
		}
		currentShot = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.increment)(currentShot, currentStep);
		return currentShot;
	};

	const onLastInvestigationPath = function () {
		return currentStep == investigationSteps[3] ? true : false;
	};

	const switchInvestigationDirection = function () {
		currentShot = origin;
		let index = investigationSteps.findIndex((step) => step == currentStep);
		currentStep = investigationSteps[index + 1];
	};

	const getInvInfo = function () {
		return {
			investigating: investigating,
			suspended: suspended,
			origin: origin,
			currentShot: currentShot,
			currentStep: currentStep,
			currentInvHits: currentInvHits,
			futureInvestigation: futureInvestigation,
		};
	};

	return {
		...computer,
		isInvestigating,
		startNewInvestigation,
		determineFutureInv,
		suspendInvestigation,
		resumeInvestigation,
		endInvestigation,
		addInvestigationHit,
		getNextInvestigationShot,
		onLastInvestigationPath,
		switchInvestigationDirection,
		getInvInfo,
	};
};




/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "curry": () => (/* reexport safe */ _curry_js__WEBPACK_IMPORTED_MODULE_0__.curry),
/* harmony export */   "areEqualArrays": () => (/* binding */ areEqualArrays),
/* harmony export */   "setContainsMatch": () => (/* binding */ setContainsMatch),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "isHit": () => (/* binding */ isHit),
/* harmony export */   "getBoatNameIfHit": () => (/* binding */ getBoatNameIfHit),
/* harmony export */   "getPositionSet": () => (/* binding */ getPositionSet),
/* harmony export */   "getAllPositionSets": () => (/* binding */ getAllPositionSets),
/* harmony export */   "filterInvalidSets": () => (/* binding */ filterInvalidSets),
/* harmony export */   "getRandomOrigin": () => (/* binding */ getRandomOrigin),
/* harmony export */   "outOfBounds": () => (/* binding */ outOfBounds),
/* harmony export */   "positionSetInvalid": () => (/* binding */ positionSetInvalid),
/* harmony export */   "pickRandomPositionSet": () => (/* binding */ pickRandomPositionSet),
/* harmony export */   "randomBoatPlacement": () => (/* binding */ randomBoatPlacement),
/* harmony export */   "makeRandomShot": () => (/* binding */ makeRandomShot),
/* harmony export */   "boatSunk": () => (/* binding */ boatSunk),
/* harmony export */   "gameOver": () => (/* binding */ gameOver)
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./src/curry.js");


const areEqualArrays = (0,_curry_js__WEBPACK_IMPORTED_MODULE_0__.curry)((array1, array2) => {
	if (array1.length != array2.length) return false;
	return array1.every((item, index) => item === array2[index]);
});

const setContainsMatch = function (shot, positions) {
	return positions.some(areEqualArrays(shot));
};

const isHit = function (shot, boats) {
	return boats.some((boat) => setContainsMatch(shot, boat.positions));
};

const getBoatNameIfHit = function (shot, boats) {
	let result = boats.find((boat) => setContainsMatch(shot, boat.positions));
	return result ? result.name : undefined;
};

const getRandomOrigin = function (boats) {
	let origin = [];
	do {
		origin[0] = Math.floor(Math.random() * 10);
		origin[1] = Math.floor(Math.random() * 10);
	} while (getBoatNameIfHit(origin, boats));

	return origin;
};

const increment = function (current, step) {
	return [current[0] + step[0], current[1] + step[1]];
};

const getPositionSet = function (step, origin, boatLength) {
	let coordinate = origin;
	let array = [coordinate];
	while (array.length < boatLength) {
		coordinate = increment(coordinate, step);
		array.push(coordinate);
	}
	return array;
};

const getAllPositionSets = (0,_curry_js__WEBPACK_IMPORTED_MODULE_0__.curry)((boatLength, origin) => {
	let sets = [];
	sets.push(getPositionSet([0, 1], origin, boatLength));
	sets.push(getPositionSet([0, -1], origin, boatLength));
	sets.push(getPositionSet([1, 0], origin, boatLength));
	sets.push(getPositionSet([-1, 0], origin, boatLength));

	return sets;
});

const filterInvalidSets = function (sets, boats) {
	let validSets = sets.filter((set) => !positionSetInvalid(set, boats));
	return validSets.length == 0 ? undefined : validSets;
};

const outOfBounds = function (array) {
	return array[0] < 0 || array[1] < 0 || array[0] > 9 || array[1] > 9;
};

const positionSetInvalid = function (positions, boats) {
	return positions.some((pos) => {
		return getBoatNameIfHit(pos, boats) || outOfBounds(pos) || false;
	});
};

const pickRandomPositionSet = function (positionSets) {
	let randomIndex = Math.floor(Math.random() * positionSets.length);
	return positionSets[randomIndex];
};

const randomBoatPlacement = function (boats, boatLength) {
	let validSets;
	do {
		let origin = getRandomOrigin(boats);
		let positionSets = getAllPositionSets(boatLength, origin);
		validSets = filterInvalidSets(positionSets, boats);
	} while (validSets == undefined);

	let chosenPositionSet = pickRandomPositionSet(validSets);
	return chosenPositionSet;
};

const makeRandomShot = function (prevShots) {
	let shot = [];
	do {
		shot[0] = Math.floor(Math.random() * 10);
		shot[1] = Math.floor(Math.random() * 10);
	} while (setContainsMatch(shot, prevShots));

	return shot;
};

const boatSunk = function (boatName, boats) {
	let boat = boats.find((boat) => boat.name === boatName);
	return boat.hits >= boat.length ? true : false;
};

const gameOver = function (boats) {
	return boats.every((boat) => boat.sunk === true);
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");





const game = function () {
	const player = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.playerFactory)();
	const computer = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.computerFactory)();
	let turnCount = 0;

	const init = function () {
		player.placeAllBoatsRandomly();
		computer.placeAllBoatsRandomly();
	};

	const playerTurn = function () {
		let currentPlayer = player;
		let enemyPlayer = computer;
		let prevShots = currentPlayer.getPrevShots();

		// "determine shot" - will eventually use player input
		let shot = (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.makeRandomShot)(prevShots);

		updateData(currentPlayer, enemyPlayer, shot);
	};

	const computerTurn = function () {
		let currentPlayer = computer;
		let enemyPlayer = player;

		if (currentPlayer.isInvestigating()) {
			investigate();
			return;
		} else {
			let prevShots = currentPlayer.getPrevShots();
			let shot = (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.makeRandomShot)(prevShots);
			updateData(currentPlayer, enemyPlayer, shot);
		}
	};

	const investigate = function () {
		let currentPlayer = computer;
		let enemyPlayer = player;

		if (currentPlayer.getInvInfo().suspended == true) {
			currentPlayer.resumeInvestigation();
		}

		let shot = currentPlayer.getNextInvestigationShot();
		if ((0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.outOfBounds)(shot) && !currentPlayer.onLastInvestigationPath()) {
			currentPlayer.switchInvestigationDirection();
			shot = currentPlayer.getNextInvestigationShot();
		}
		updateData(currentPlayer, enemyPlayer, shot);
	};

	const updateData = function (currentPlayer, enemyPlayer, shot) {
		let enemyBoats = enemyPlayer.getAllBoats();
		let hit = (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.isHit)(shot, enemyBoats);
		let hitBoatName;
		let sink;
		if (hit) {
			currentPlayer.addPrevHit(shot);
			hitBoatName = (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.getBoatNameIfHit)(shot, enemyBoats);
			enemyPlayer.registerHit(hitBoatName);
			sink = (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.boatSunk)(hitBoatName, enemyBoats);
			if (sink) {
				enemyPlayer.sinkBoat(hitBoatName);
			}
			if (currentPlayer == computer && !currentPlayer.isInvestigating()) {
				currentPlayer.startNewInvestigation(shot);
				return;
			}
		} else {
			currentPlayer.addPrevMiss(shot);
		}

		if (currentPlayer == computer && currentPlayer.isInvestigating()) {
			updateInvestigation(currentPlayer, shot, hit, sink, hitBoatName);
		}
	};

	const updateInvestigation = function (
		currentPlayer,
		shot,
		hit,
		sink,
		hitBoatName
	) {
		if (!hit) {
			currentPlayer.switchInvestigationDirection();
			return;
		}

		if (hit) {
			currentPlayer.addInvestigationHit(shot);
		}

		if (sink) {
			let sunkBoat = currentPlayer.getBoatByName(hitBoatName);
			let futureInv = currentPlayer.determineFutureInv(sunkBoat.length);
			if (futureInv.length > 0) {
				currentPlayer.suspendInvestigation();
			} else {
				currentPlayer.endInvestigation();
			}
		}
	};

	const takeTurn = function () {
		if (turnCount % 2 == 0) {
			computerTurn();
		} else {
			playerTurn();
		}

		turnCount++;
	};

	return {
		player,
		computer,
		init,
		takeTurn,
		playerTurn,
		computerTurn,
		investigate,
		updateData,
		updateInvestigation,
	};
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsY0FBYyx5REFBYztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sc0RBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxnREFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyREFBZ0I7QUFDakM7QUFDQSxVQUFVLG1EQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3VycnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbk5PVElDRTogVGhlIGNvZGUgZm9yIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gd2FzIHRha2VuIGZyb20gYW4gZWR1Y2F0aW9uYWwgYXJ0aWNsZSBvbiBmdW5jdGlvbiBjdXJyaW5nIGZyb20gVGhlIE1vZGVybiBKYXZhc2NyaXB0IFR1dG9yaWFsIHdlYnNpdGUuIFRoZSBjb2RlIGlzIHVzZWQgYXMgYSBwYXJ0IG9mIHRoaXMgcHJvamVjdCBmb3IgcGVyc29uYWwgZWR1Y2F0aW9uYWwgcHVycG9zZXMgb25seSBhcyBwZXIgdGhlIHRlcm1zIHByb3ZpZGVkIGluIFRoZSBNb2Rlcm4gSmF2YXNjcmlwdCBUdXRvcmlhbCBMaWNlbnNlLlxuKiBcbiogICBUaXRsZTogVGhlIE1vZGVybiBKYXZhc2NyaXB0IFR1dG9yaWFsIC0gQ3VycnlpbmdcbiogICBQcmltYXJ5IEF1dGhvcjogSWx5YSBLYW50b3JcbiogICBPdGhlciBDb250cmlidXRvcnM6IFBldGVyIFJvY2hlLCBMYWtzaHlhIFRoYWt1ciwgQWFrb2RhbCwgQ2hhcmxpZSBLYXJuaW9sIFxuKiAgIEF2YWlsYWJpbGl0eTogaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vY3VycnlpbmctcGFydGlhbHNcbiogICBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vamF2YXNjcmlwdC10dXRvcmlhbC9lbi5qYXZhc2NyaXB0LmluZm8vYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgY3VycnkgPSBmdW5jdGlvbiAoZnVuYykge1xuXHRyZXR1cm4gZnVuY3Rpb24gY3VycmllZCguLi5hcmdzKSB7XG5cdFx0aWYgKGFyZ3MubGVuZ3RoID49IGZ1bmMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzMikge1xuXHRcdFx0XHRyZXR1cm4gY3VycmllZC5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChhcmdzMikpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59O1xuXG5leHBvcnQgeyBjdXJyeSB9O1xuIiwiaW1wb3J0IHsgcmFuZG9tQm9hdFBsYWNlbWVudCwgaW5jcmVtZW50LCBzZXRDb250YWluc01hdGNoIH0gZnJvbSBcIi4vbG9naWMuanNcIjtcblxuY29uc3QgYm9hdEZhY3RvcnkgPSBmdW5jdGlvbiAodGl0bGUsIGxlbikge1xuXHRsZXQgbmFtZSA9IHRpdGxlO1xuXHRsZXQgbGVuZ3RoID0gbGVuO1xuXHRsZXQgcG9zaXRpb25zID0gW107XG5cdGxldCBoaXRzID0gMDtcblx0bGV0IHN1bmsgPSBmYWxzZTtcblxuXHRyZXR1cm4geyBuYW1lLCBsZW5ndGgsIHBvc2l0aW9ucywgaGl0cywgc3VuayB9O1xufTtcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcblx0Ly9wcml2YXRlIHByb3BlcnRpZXMgKG5vdCBpbmNsdWRlZCBpbiByZXR1cm5lZCBvYmplY3QpXG5cdGxldCBib2F0cyA9IFtcblx0XHRib2F0RmFjdG9yeShcImNhcnJpZXJcIiwgNSksXG5cdFx0Ym9hdEZhY3RvcnkoXCJiYXR0bGVzaGlwXCIsIDQpLFxuXHRcdGJvYXRGYWN0b3J5KFwiY3J1aXNlclwiLCAzKSxcblx0XHRib2F0RmFjdG9yeShcInN1Ym1hcmluZVwiLCAzKSxcblx0XHRib2F0RmFjdG9yeShcImRlc3Ryb3llclwiLCAyKSxcblx0XTtcblxuXHRsZXQgcHJldmlvdXNIaXRzID0gW107XG5cdGxldCBwcmV2aW91c01pc3NlcyA9IFtdO1xuXHRsZXQgcHJldmlvdXNTaG90cyA9IFtdO1xuXG5cdC8vcHVibGljIGdldHRlciBtZXRob2RzIChhcmUgaW5jbHVkZWQgaW4gcmV0dXJuZWQgb2JqZWN0KVxuXHRjb25zdCBnZXRBbGxCb2F0cyA9ICgpID0+IGJvYXRzO1xuXHRjb25zdCBnZXRQcmV2SGl0cyA9ICgpID0+IHByZXZpb3VzSGl0cztcblx0Y29uc3QgZ2V0UHJldk1pc3NlcyA9ICgpID0+IHByZXZpb3VzTWlzc2VzO1xuXHRjb25zdCBnZXRQcmV2U2hvdHMgPSAoKSA9PiBwcmV2aW91c1Nob3RzO1xuXHRjb25zdCBnZXRCb2F0QnlOYW1lID0gKG5hbWUpID0+IGJvYXRzLmZpbmQoKGJvYXQpID0+IGJvYXQubmFtZSA9PSBuYW1lKTtcblxuXHQvL290aGVyIHB1YmxpYyBtZXRob2RzIChhcmUgaW5jbHVkZWQgaW4gcmV0dXJuZWQgb2JqZWN0KVxuXHRjb25zdCBhZGRQcmV2SGl0ID0gZnVuY3Rpb24gKHNob3QpIHtcblx0XHRwcmV2aW91c0hpdHMucHVzaChzaG90KTtcblx0XHRwcmV2aW91c1Nob3RzLnB1c2goc2hvdCk7XG5cdH07XG5cblx0Y29uc3QgYWRkUHJldk1pc3MgPSBmdW5jdGlvbiAoc2hvdCkge1xuXHRcdHByZXZpb3VzTWlzc2VzLnB1c2goc2hvdCk7XG5cdFx0cHJldmlvdXNTaG90cy5wdXNoKHNob3QpO1xuXHR9O1xuXG5cdGNvbnN0IHBsYWNlU2luZ2xlQm9hdCA9IChib2F0TmFtZSwgcG9zaXRpb25TZXQpID0+IHtcblx0XHRsZXQgYm9hdCA9IGdldEJvYXRCeU5hbWUoYm9hdE5hbWUpO1xuXHRcdGJvYXQucG9zaXRpb25zID0gcG9zaXRpb25TZXQ7XG5cdH07XG5cblx0Y29uc3QgcGxhY2VBbGxCb2F0c1JhbmRvbWx5ID0gKCkgPT4ge1xuXHRcdGxldCBib2F0cyA9IGdldEFsbEJvYXRzKCk7XG5cdFx0Ym9hdHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xuXHRcdFx0Ym9hdC5wb3NpdGlvbnMgPSByYW5kb21Cb2F0UGxhY2VtZW50KGJvYXRzLCBib2F0Lmxlbmd0aCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVnaXN0ZXJIaXQgPSBmdW5jdGlvbiAoYm9hdE5hbWUpIHtcblx0XHRsZXQgYm9hdCA9IGdldEJvYXRCeU5hbWUoYm9hdE5hbWUpO1xuXHRcdGJvYXQuaGl0cysrO1xuXHR9O1xuXG5cdGNvbnN0IHNpbmtCb2F0ID0gZnVuY3Rpb24gKGJvYXROYW1lKSB7XG5cdFx0bGV0IGJvYXQgPSBnZXRCb2F0QnlOYW1lKGJvYXROYW1lKTtcblx0XHRib2F0LnN1bmsgPSB0cnVlO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0QWxsQm9hdHMsXG5cdFx0Z2V0Qm9hdEJ5TmFtZSxcblx0XHRnZXRQcmV2SGl0cyxcblx0XHRnZXRQcmV2TWlzc2VzLFxuXHRcdGdldFByZXZTaG90cyxcblx0XHRhZGRQcmV2SGl0LFxuXHRcdGFkZFByZXZNaXNzLFxuXHRcdHBsYWNlU2luZ2xlQm9hdCxcblx0XHRwbGFjZUFsbEJvYXRzUmFuZG9tbHksXG5cdFx0cmVnaXN0ZXJIaXQsXG5cdFx0c2lua0JvYXQsXG5cdH07XG59O1xuXG5jb25zdCBjb21wdXRlckZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBjb21wdXRlciA9IHBsYXllckZhY3RvcnkoKTtcblxuXHQvL2FkZGl0aW9uYWwgcHJpdmF0ZSBwcm9wZXJ0aWVzIGZvciBjb21wdXRlciBvYmplY3Rcblx0Ly8obm90IGluaGVyaXRlZCwgbm90IGluY2x1ZGVkIGluIHJldHVybiBvYmplY3QpXG5cdGxldCBpbnZlc3RpZ2F0aW5nID0gZmFsc2U7XG5cdGxldCBzdXNwZW5kZWQgPSBmYWxzZTtcblx0Y29uc3QgaW52ZXN0aWdhdGlvblN0ZXBzID0gW1xuXHRcdFswLCAxXSxcblx0XHRbMCwgLTFdLFxuXHRcdFsxLCAwXSxcblx0XHRbLTEsIDBdLFxuXHRdO1xuXHRsZXQgb3JpZ2luID0gW107XG5cdGxldCBjdXJyZW50U2hvdCA9IFtdO1xuXHRsZXQgY3VycmVudFN0ZXAgPSBbXTtcblx0bGV0IGN1cnJlbnRJbnZIaXRzID0gW107XG5cdGxldCBmdXR1cmVJbnZlc3RpZ2F0aW9uID0gW107XG5cblx0Ly9wdWJsaWMgbWV0aG9kcyAoYXJlIGluY2x1ZGVkIGluIHJldHVybmVkIG9iamVjdClcblx0Y29uc3QgaXNJbnZlc3RpZ2F0aW5nID0gKCkgPT4gaW52ZXN0aWdhdGluZztcblxuXHRjb25zdCBzdGFydE5ld0ludmVzdGlnYXRpb24gPSBmdW5jdGlvbiAobmV3SGl0KSB7XG5cdFx0aW52ZXN0aWdhdGluZyA9IHRydWU7XG5cdFx0b3JpZ2luID0gbmV3SGl0O1xuXHRcdGN1cnJlbnRJbnZIaXRzLnB1c2gobmV3SGl0KTtcblx0XHRjdXJyZW50U3RlcCA9IGludmVzdGlnYXRpb25TdGVwc1swXTtcblx0fTtcblxuXHRjb25zdCBkZXRlcm1pbmVGdXR1cmVJbnYgPSBmdW5jdGlvbiAoc3Vua0JvYXRMZW5ndGgpIHtcblx0XHQvL2dldCBhbGwgc3Vua0JvYXQgaGl0c1xuXHRcdGxldCBpbnZlcnRlZFN0ZXAgPSBbY3VycmVudFN0ZXBbMF0gKiAtMSwgY3VycmVudFN0ZXBbMV0gKiAtMV07XG5cdFx0bGV0IHN1bmtCb2F0UG9zaXRpb25zID0gW2N1cnJlbnRTaG90XTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN1bmtCb2F0TGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRsZXQgbmV4dFBvcyA9IGluY3JlbWVudChzdW5rQm9hdFBvc2l0aW9uc1tpXSwgaW52ZXJ0ZWRTdGVwKTtcblx0XHRcdHN1bmtCb2F0UG9zaXRpb25zLnB1c2gobmV4dFBvcyk7XG5cdFx0fVxuXG5cdFx0Ly9maWx0ZXIgc3Vua0JvYXQgaGl0cyBmcm9tIGludkhpdHMsIGFzc2lnbiB0byBmdXR1cmVcblx0XHRmdXR1cmVJbnZlc3RpZ2F0aW9uID0gY3VycmVudEludkhpdHMuZmlsdGVyKFxuXHRcdFx0KHNob3QpID0+ICFzZXRDb250YWluc01hdGNoKHNob3QsIHN1bmtCb2F0UG9zaXRpb25zKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gZnV0dXJlSW52ZXN0aWdhdGlvbjtcblx0fTtcblxuXHRjb25zdCBzdXNwZW5kSW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRzdXNwZW5kZWQgPSB0cnVlO1xuXHRcdHN3aXRjaEludmVzdGlnYXRpb25EaXJlY3Rpb24oKTtcblx0XHRvcmlnaW4gPSBbXTtcblx0XHRjdXJyZW50U2hvdCA9IFtdO1xuXHRcdGN1cnJlbnRJbnZIaXRzID0gW107XG5cdH07XG5cblx0Y29uc3QgcmVzdW1lSW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRzdXNwZW5kZWQgPSBmYWxzZTtcblx0XHRsZXQgcmVzdW1lU3RhcnRpbmdQb2ludCA9IGZ1dHVyZUludmVzdGlnYXRpb24uc2hpZnQoKTtcblx0XHRvcmlnaW4gPSByZXN1bWVTdGFydGluZ1BvaW50O1xuXHRcdGN1cnJlbnRJbnZIaXRzLnB1c2gocmVzdW1lU3RhcnRpbmdQb2ludCk7XG5cdH07XG5cblx0Y29uc3QgZW5kSW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRzdXNwZW5kSW52ZXN0aWdhdGlvbigpO1xuXHRcdGludmVzdGlnYXRpbmcgPSBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBhZGRJbnZlc3RpZ2F0aW9uSGl0ID0gZnVuY3Rpb24gKHNob3QpIHtcblx0XHRjdXJyZW50SW52SGl0cy5wdXNoKHNob3QpO1xuXHR9O1xuXG5cdGNvbnN0IGdldE5leHRJbnZlc3RpZ2F0aW9uU2hvdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoY3VycmVudFNob3QubGVuZ3RoID09IDApIHtcblx0XHRcdGN1cnJlbnRTaG90ID0gb3JpZ2luO1xuXHRcdH1cblx0XHRjdXJyZW50U2hvdCA9IGluY3JlbWVudChjdXJyZW50U2hvdCwgY3VycmVudFN0ZXApO1xuXHRcdHJldHVybiBjdXJyZW50U2hvdDtcblx0fTtcblxuXHRjb25zdCBvbkxhc3RJbnZlc3RpZ2F0aW9uUGF0aCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gY3VycmVudFN0ZXAgPT0gaW52ZXN0aWdhdGlvblN0ZXBzWzNdID8gdHJ1ZSA6IGZhbHNlO1xuXHR9O1xuXG5cdGNvbnN0IHN3aXRjaEludmVzdGlnYXRpb25EaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y3VycmVudFNob3QgPSBvcmlnaW47XG5cdFx0bGV0IGluZGV4ID0gaW52ZXN0aWdhdGlvblN0ZXBzLmZpbmRJbmRleCgoc3RlcCkgPT4gc3RlcCA9PSBjdXJyZW50U3RlcCk7XG5cdFx0Y3VycmVudFN0ZXAgPSBpbnZlc3RpZ2F0aW9uU3RlcHNbaW5kZXggKyAxXTtcblx0fTtcblxuXHRjb25zdCBnZXRJbnZJbmZvID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbnZlc3RpZ2F0aW5nOiBpbnZlc3RpZ2F0aW5nLFxuXHRcdFx0c3VzcGVuZGVkOiBzdXNwZW5kZWQsXG5cdFx0XHRvcmlnaW46IG9yaWdpbixcblx0XHRcdGN1cnJlbnRTaG90OiBjdXJyZW50U2hvdCxcblx0XHRcdGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCxcblx0XHRcdGN1cnJlbnRJbnZIaXRzOiBjdXJyZW50SW52SGl0cyxcblx0XHRcdGZ1dHVyZUludmVzdGlnYXRpb246IGZ1dHVyZUludmVzdGlnYXRpb24sXG5cdFx0fTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdC4uLmNvbXB1dGVyLFxuXHRcdGlzSW52ZXN0aWdhdGluZyxcblx0XHRzdGFydE5ld0ludmVzdGlnYXRpb24sXG5cdFx0ZGV0ZXJtaW5lRnV0dXJlSW52LFxuXHRcdHN1c3BlbmRJbnZlc3RpZ2F0aW9uLFxuXHRcdHJlc3VtZUludmVzdGlnYXRpb24sXG5cdFx0ZW5kSW52ZXN0aWdhdGlvbixcblx0XHRhZGRJbnZlc3RpZ2F0aW9uSGl0LFxuXHRcdGdldE5leHRJbnZlc3RpZ2F0aW9uU2hvdCxcblx0XHRvbkxhc3RJbnZlc3RpZ2F0aW9uUGF0aCxcblx0XHRzd2l0Y2hJbnZlc3RpZ2F0aW9uRGlyZWN0aW9uLFxuXHRcdGdldEludkluZm8sXG5cdH07XG59O1xuXG5leHBvcnQgeyBib2F0RmFjdG9yeSwgcGxheWVyRmFjdG9yeSwgY29tcHV0ZXJGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBjdXJyeSB9IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5cbmNvbnN0IGFyZUVxdWFsQXJyYXlzID0gY3VycnkoKGFycmF5MSwgYXJyYXkyKSA9PiB7XG5cdGlmIChhcnJheTEubGVuZ3RoICE9IGFycmF5Mi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGFycmF5MS5ldmVyeSgoaXRlbSwgaW5kZXgpID0+IGl0ZW0gPT09IGFycmF5MltpbmRleF0pO1xufSk7XG5cbmNvbnN0IHNldENvbnRhaW5zTWF0Y2ggPSBmdW5jdGlvbiAoc2hvdCwgcG9zaXRpb25zKSB7XG5cdHJldHVybiBwb3NpdGlvbnMuc29tZShhcmVFcXVhbEFycmF5cyhzaG90KSk7XG59O1xuXG5jb25zdCBpc0hpdCA9IGZ1bmN0aW9uIChzaG90LCBib2F0cykge1xuXHRyZXR1cm4gYm9hdHMuc29tZSgoYm9hdCkgPT4gc2V0Q29udGFpbnNNYXRjaChzaG90LCBib2F0LnBvc2l0aW9ucykpO1xufTtcblxuY29uc3QgZ2V0Qm9hdE5hbWVJZkhpdCA9IGZ1bmN0aW9uIChzaG90LCBib2F0cykge1xuXHRsZXQgcmVzdWx0ID0gYm9hdHMuZmluZCgoYm9hdCkgPT4gc2V0Q29udGFpbnNNYXRjaChzaG90LCBib2F0LnBvc2l0aW9ucykpO1xuXHRyZXR1cm4gcmVzdWx0ID8gcmVzdWx0Lm5hbWUgOiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBnZXRSYW5kb21PcmlnaW4gPSBmdW5jdGlvbiAoYm9hdHMpIHtcblx0bGV0IG9yaWdpbiA9IFtdO1xuXHRkbyB7XG5cdFx0b3JpZ2luWzBdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdG9yaWdpblsxXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0fSB3aGlsZSAoZ2V0Qm9hdE5hbWVJZkhpdChvcmlnaW4sIGJvYXRzKSk7XG5cblx0cmV0dXJuIG9yaWdpbjtcbn07XG5cbmNvbnN0IGluY3JlbWVudCA9IGZ1bmN0aW9uIChjdXJyZW50LCBzdGVwKSB7XG5cdHJldHVybiBbY3VycmVudFswXSArIHN0ZXBbMF0sIGN1cnJlbnRbMV0gKyBzdGVwWzFdXTtcbn07XG5cbmNvbnN0IGdldFBvc2l0aW9uU2V0ID0gZnVuY3Rpb24gKHN0ZXAsIG9yaWdpbiwgYm9hdExlbmd0aCkge1xuXHRsZXQgY29vcmRpbmF0ZSA9IG9yaWdpbjtcblx0bGV0IGFycmF5ID0gW2Nvb3JkaW5hdGVdO1xuXHR3aGlsZSAoYXJyYXkubGVuZ3RoIDwgYm9hdExlbmd0aCkge1xuXHRcdGNvb3JkaW5hdGUgPSBpbmNyZW1lbnQoY29vcmRpbmF0ZSwgc3RlcCk7XG5cdFx0YXJyYXkucHVzaChjb29yZGluYXRlKTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5jb25zdCBnZXRBbGxQb3NpdGlvblNldHMgPSBjdXJyeSgoYm9hdExlbmd0aCwgb3JpZ2luKSA9PiB7XG5cdGxldCBzZXRzID0gW107XG5cdHNldHMucHVzaChnZXRQb3NpdGlvblNldChbMCwgMV0sIG9yaWdpbiwgYm9hdExlbmd0aCkpO1xuXHRzZXRzLnB1c2goZ2V0UG9zaXRpb25TZXQoWzAsIC0xXSwgb3JpZ2luLCBib2F0TGVuZ3RoKSk7XG5cdHNldHMucHVzaChnZXRQb3NpdGlvblNldChbMSwgMF0sIG9yaWdpbiwgYm9hdExlbmd0aCkpO1xuXHRzZXRzLnB1c2goZ2V0UG9zaXRpb25TZXQoWy0xLCAwXSwgb3JpZ2luLCBib2F0TGVuZ3RoKSk7XG5cblx0cmV0dXJuIHNldHM7XG59KTtcblxuY29uc3QgZmlsdGVySW52YWxpZFNldHMgPSBmdW5jdGlvbiAoc2V0cywgYm9hdHMpIHtcblx0bGV0IHZhbGlkU2V0cyA9IHNldHMuZmlsdGVyKChzZXQpID0+ICFwb3NpdGlvblNldEludmFsaWQoc2V0LCBib2F0cykpO1xuXHRyZXR1cm4gdmFsaWRTZXRzLmxlbmd0aCA9PSAwID8gdW5kZWZpbmVkIDogdmFsaWRTZXRzO1xufTtcblxuY29uc3Qgb3V0T2ZCb3VuZHMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5WzBdIDwgMCB8fCBhcnJheVsxXSA8IDAgfHwgYXJyYXlbMF0gPiA5IHx8IGFycmF5WzFdID4gOTtcbn07XG5cbmNvbnN0IHBvc2l0aW9uU2V0SW52YWxpZCA9IGZ1bmN0aW9uIChwb3NpdGlvbnMsIGJvYXRzKSB7XG5cdHJldHVybiBwb3NpdGlvbnMuc29tZSgocG9zKSA9PiB7XG5cdFx0cmV0dXJuIGdldEJvYXROYW1lSWZIaXQocG9zLCBib2F0cykgfHwgb3V0T2ZCb3VuZHMocG9zKSB8fCBmYWxzZTtcblx0fSk7XG59O1xuXG5jb25zdCBwaWNrUmFuZG9tUG9zaXRpb25TZXQgPSBmdW5jdGlvbiAocG9zaXRpb25TZXRzKSB7XG5cdGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc2l0aW9uU2V0cy5sZW5ndGgpO1xuXHRyZXR1cm4gcG9zaXRpb25TZXRzW3JhbmRvbUluZGV4XTtcbn07XG5cbmNvbnN0IHJhbmRvbUJvYXRQbGFjZW1lbnQgPSBmdW5jdGlvbiAoYm9hdHMsIGJvYXRMZW5ndGgpIHtcblx0bGV0IHZhbGlkU2V0cztcblx0ZG8ge1xuXHRcdGxldCBvcmlnaW4gPSBnZXRSYW5kb21PcmlnaW4oYm9hdHMpO1xuXHRcdGxldCBwb3NpdGlvblNldHMgPSBnZXRBbGxQb3NpdGlvblNldHMoYm9hdExlbmd0aCwgb3JpZ2luKTtcblx0XHR2YWxpZFNldHMgPSBmaWx0ZXJJbnZhbGlkU2V0cyhwb3NpdGlvblNldHMsIGJvYXRzKTtcblx0fSB3aGlsZSAodmFsaWRTZXRzID09IHVuZGVmaW5lZCk7XG5cblx0bGV0IGNob3NlblBvc2l0aW9uU2V0ID0gcGlja1JhbmRvbVBvc2l0aW9uU2V0KHZhbGlkU2V0cyk7XG5cdHJldHVybiBjaG9zZW5Qb3NpdGlvblNldDtcbn07XG5cbmNvbnN0IG1ha2VSYW5kb21TaG90ID0gZnVuY3Rpb24gKHByZXZTaG90cykge1xuXHRsZXQgc2hvdCA9IFtdO1xuXHRkbyB7XG5cdFx0c2hvdFswXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRzaG90WzFdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHR9IHdoaWxlIChzZXRDb250YWluc01hdGNoKHNob3QsIHByZXZTaG90cykpO1xuXG5cdHJldHVybiBzaG90O1xufTtcblxuY29uc3QgYm9hdFN1bmsgPSBmdW5jdGlvbiAoYm9hdE5hbWUsIGJvYXRzKSB7XG5cdGxldCBib2F0ID0gYm9hdHMuZmluZCgoYm9hdCkgPT4gYm9hdC5uYW1lID09PSBib2F0TmFtZSk7XG5cdHJldHVybiBib2F0LmhpdHMgPj0gYm9hdC5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG59O1xuXG5jb25zdCBnYW1lT3ZlciA9IGZ1bmN0aW9uIChib2F0cykge1xuXHRyZXR1cm4gYm9hdHMuZXZlcnkoKGJvYXQpID0+IGJvYXQuc3VuayA9PT0gdHJ1ZSk7XG59O1xuXG5leHBvcnQge1xuXHRjdXJyeSxcblx0YXJlRXF1YWxBcnJheXMsXG5cdHNldENvbnRhaW5zTWF0Y2gsXG5cdGluY3JlbWVudCxcblx0aXNIaXQsXG5cdGdldEJvYXROYW1lSWZIaXQsXG5cdGdldFBvc2l0aW9uU2V0LFxuXHRnZXRBbGxQb3NpdGlvblNldHMsXG5cdGZpbHRlckludmFsaWRTZXRzLFxuXHRnZXRSYW5kb21PcmlnaW4sXG5cdG91dE9mQm91bmRzLFxuXHRwb3NpdGlvblNldEludmFsaWQsXG5cdHBpY2tSYW5kb21Qb3NpdGlvblNldCxcblx0cmFuZG9tQm9hdFBsYWNlbWVudCxcblx0bWFrZVJhbmRvbVNob3QsXG5cdGJvYXRTdW5rLFxuXHRnYW1lT3Zlcixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcGxheWVyRmFjdG9yeSwgY29tcHV0ZXJGYWN0b3J5IH0gZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IHtcblx0bWFrZVJhbmRvbVNob3QsXG5cdGdldEJvYXROYW1lSWZIaXQsXG5cdGJvYXRTdW5rLFxuXHRpc0hpdCxcblx0b3V0T2ZCb3VuZHMsXG59IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5cbmNvbnN0IGdhbWUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHBsYXllciA9IHBsYXllckZhY3RvcnkoKTtcblx0Y29uc3QgY29tcHV0ZXIgPSBjb21wdXRlckZhY3RvcnkoKTtcblx0bGV0IHR1cm5Db3VudCA9IDA7XG5cblx0Y29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRwbGF5ZXIucGxhY2VBbGxCb2F0c1JhbmRvbWx5KCk7XG5cdFx0Y29tcHV0ZXIucGxhY2VBbGxCb2F0c1JhbmRvbWx5KCk7XG5cdH07XG5cblx0Y29uc3QgcGxheWVyVHVybiA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjtcblx0XHRsZXQgZW5lbXlQbGF5ZXIgPSBjb21wdXRlcjtcblx0XHRsZXQgcHJldlNob3RzID0gY3VycmVudFBsYXllci5nZXRQcmV2U2hvdHMoKTtcblxuXHRcdC8vIFwiZGV0ZXJtaW5lIHNob3RcIiAtIHdpbGwgZXZlbnR1YWxseSB1c2UgcGxheWVyIGlucHV0XG5cdFx0bGV0IHNob3QgPSBtYWtlUmFuZG9tU2hvdChwcmV2U2hvdHMpO1xuXG5cdFx0dXBkYXRlRGF0YShjdXJyZW50UGxheWVyLCBlbmVteVBsYXllciwgc2hvdCk7XG5cdH07XG5cblx0Y29uc3QgY29tcHV0ZXJUdXJuID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBjdXJyZW50UGxheWVyID0gY29tcHV0ZXI7XG5cdFx0bGV0IGVuZW15UGxheWVyID0gcGxheWVyO1xuXG5cdFx0aWYgKGN1cnJlbnRQbGF5ZXIuaXNJbnZlc3RpZ2F0aW5nKCkpIHtcblx0XHRcdGludmVzdGlnYXRlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBwcmV2U2hvdHMgPSBjdXJyZW50UGxheWVyLmdldFByZXZTaG90cygpO1xuXHRcdFx0bGV0IHNob3QgPSBtYWtlUmFuZG9tU2hvdChwcmV2U2hvdHMpO1xuXHRcdFx0dXBkYXRlRGF0YShjdXJyZW50UGxheWVyLCBlbmVteVBsYXllciwgc2hvdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGludmVzdGlnYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBjdXJyZW50UGxheWVyID0gY29tcHV0ZXI7XG5cdFx0bGV0IGVuZW15UGxheWVyID0gcGxheWVyO1xuXG5cdFx0aWYgKGN1cnJlbnRQbGF5ZXIuZ2V0SW52SW5mbygpLnN1c3BlbmRlZCA9PSB0cnVlKSB7XG5cdFx0XHRjdXJyZW50UGxheWVyLnJlc3VtZUludmVzdGlnYXRpb24oKTtcblx0XHR9XG5cblx0XHRsZXQgc2hvdCA9IGN1cnJlbnRQbGF5ZXIuZ2V0TmV4dEludmVzdGlnYXRpb25TaG90KCk7XG5cdFx0aWYgKG91dE9mQm91bmRzKHNob3QpICYmICFjdXJyZW50UGxheWVyLm9uTGFzdEludmVzdGlnYXRpb25QYXRoKCkpIHtcblx0XHRcdGN1cnJlbnRQbGF5ZXIuc3dpdGNoSW52ZXN0aWdhdGlvbkRpcmVjdGlvbigpO1xuXHRcdFx0c2hvdCA9IGN1cnJlbnRQbGF5ZXIuZ2V0TmV4dEludmVzdGlnYXRpb25TaG90KCk7XG5cdFx0fVxuXHRcdHVwZGF0ZURhdGEoY3VycmVudFBsYXllciwgZW5lbXlQbGF5ZXIsIHNob3QpO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZURhdGEgPSBmdW5jdGlvbiAoY3VycmVudFBsYXllciwgZW5lbXlQbGF5ZXIsIHNob3QpIHtcblx0XHRsZXQgZW5lbXlCb2F0cyA9IGVuZW15UGxheWVyLmdldEFsbEJvYXRzKCk7XG5cdFx0bGV0IGhpdCA9IGlzSGl0KHNob3QsIGVuZW15Qm9hdHMpO1xuXHRcdGxldCBoaXRCb2F0TmFtZTtcblx0XHRsZXQgc2luaztcblx0XHRpZiAoaGl0KSB7XG5cdFx0XHRjdXJyZW50UGxheWVyLmFkZFByZXZIaXQoc2hvdCk7XG5cdFx0XHRoaXRCb2F0TmFtZSA9IGdldEJvYXROYW1lSWZIaXQoc2hvdCwgZW5lbXlCb2F0cyk7XG5cdFx0XHRlbmVteVBsYXllci5yZWdpc3RlckhpdChoaXRCb2F0TmFtZSk7XG5cdFx0XHRzaW5rID0gYm9hdFN1bmsoaGl0Qm9hdE5hbWUsIGVuZW15Qm9hdHMpO1xuXHRcdFx0aWYgKHNpbmspIHtcblx0XHRcdFx0ZW5lbXlQbGF5ZXIuc2lua0JvYXQoaGl0Qm9hdE5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN1cnJlbnRQbGF5ZXIgPT0gY29tcHV0ZXIgJiYgIWN1cnJlbnRQbGF5ZXIuaXNJbnZlc3RpZ2F0aW5nKCkpIHtcblx0XHRcdFx0Y3VycmVudFBsYXllci5zdGFydE5ld0ludmVzdGlnYXRpb24oc2hvdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFBsYXllci5hZGRQcmV2TWlzcyhzaG90KTtcblx0XHR9XG5cblx0XHRpZiAoY3VycmVudFBsYXllciA9PSBjb21wdXRlciAmJiBjdXJyZW50UGxheWVyLmlzSW52ZXN0aWdhdGluZygpKSB7XG5cdFx0XHR1cGRhdGVJbnZlc3RpZ2F0aW9uKGN1cnJlbnRQbGF5ZXIsIHNob3QsIGhpdCwgc2luaywgaGl0Qm9hdE5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB1cGRhdGVJbnZlc3RpZ2F0aW9uID0gZnVuY3Rpb24gKFxuXHRcdGN1cnJlbnRQbGF5ZXIsXG5cdFx0c2hvdCxcblx0XHRoaXQsXG5cdFx0c2luayxcblx0XHRoaXRCb2F0TmFtZVxuXHQpIHtcblx0XHRpZiAoIWhpdCkge1xuXHRcdFx0Y3VycmVudFBsYXllci5zd2l0Y2hJbnZlc3RpZ2F0aW9uRGlyZWN0aW9uKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGhpdCkge1xuXHRcdFx0Y3VycmVudFBsYXllci5hZGRJbnZlc3RpZ2F0aW9uSGl0KHNob3QpO1xuXHRcdH1cblxuXHRcdGlmIChzaW5rKSB7XG5cdFx0XHRsZXQgc3Vua0JvYXQgPSBjdXJyZW50UGxheWVyLmdldEJvYXRCeU5hbWUoaGl0Qm9hdE5hbWUpO1xuXHRcdFx0bGV0IGZ1dHVyZUludiA9IGN1cnJlbnRQbGF5ZXIuZGV0ZXJtaW5lRnV0dXJlSW52KHN1bmtCb2F0Lmxlbmd0aCk7XG5cdFx0XHRpZiAoZnV0dXJlSW52Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y3VycmVudFBsYXllci5zdXNwZW5kSW52ZXN0aWdhdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBsYXllci5lbmRJbnZlc3RpZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHRha2VUdXJuID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0dXJuQ291bnQgJSAyID09IDApIHtcblx0XHRcdGNvbXB1dGVyVHVybigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwbGF5ZXJUdXJuKCk7XG5cdFx0fVxuXG5cdFx0dHVybkNvdW50Kys7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRwbGF5ZXIsXG5cdFx0Y29tcHV0ZXIsXG5cdFx0aW5pdCxcblx0XHR0YWtlVHVybixcblx0XHRwbGF5ZXJUdXJuLFxuXHRcdGNvbXB1dGVyVHVybixcblx0XHRpbnZlc3RpZ2F0ZSxcblx0XHR1cGRhdGVEYXRhLFxuXHRcdHVwZGF0ZUludmVzdGlnYXRpb24sXG5cdH07XG59O1xuXG5leHBvcnQgeyBnYW1lIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=