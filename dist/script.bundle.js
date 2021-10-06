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
		let followUps = currentInvHits.filter(
			(shot) => !(0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.setContainsMatch)(shot, sunkBoatPositions)
		);

		followUps.forEach((shot) => futureInvestigation.push(shot));

		return futureInvestigation;
	};

	const suspendInvestigation = function () {
		suspended = true;
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
		index++;
		if (index > investigationSteps.length - 1) {
			index = 0;
		}
		currentStep = investigationSteps[index];
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

		let prevShots = currentPlayer.getPrevShots();
		let shot = currentPlayer.getNextInvestigationShot();
		while ((0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.outOfBounds)(shot) || (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.setContainsMatch)(shot, prevShots)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsY0FBYyx5REFBYztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxzREFBVyxVQUFVLDJEQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGdEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJEQUFnQjtBQUNqQztBQUNBLFVBQVUsbURBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuTk9USUNFOiBUaGUgY29kZSBmb3IgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB3YXMgdGFrZW4gZnJvbSBhbiBlZHVjYXRpb25hbCBhcnRpY2xlIG9uIGZ1bmN0aW9uIGN1cnJpbmcgZnJvbSBUaGUgTW9kZXJuIEphdmFzY3JpcHQgVHV0b3JpYWwgd2Vic2l0ZS4gVGhlIGNvZGUgaXMgdXNlZCBhcyBhIHBhcnQgb2YgdGhpcyBwcm9qZWN0IGZvciBwZXJzb25hbCBlZHVjYXRpb25hbCBwdXJwb3NlcyBvbmx5IGFzIHBlciB0aGUgdGVybXMgcHJvdmlkZWQgaW4gVGhlIE1vZGVybiBKYXZhc2NyaXB0IFR1dG9yaWFsIExpY2Vuc2UuXG4qIFxuKiAgIFRpdGxlOiBUaGUgTW9kZXJuIEphdmFzY3JpcHQgVHV0b3JpYWwgLSBDdXJyeWluZ1xuKiAgIFByaW1hcnkgQXV0aG9yOiBJbHlhIEthbnRvclxuKiAgIE90aGVyIENvbnRyaWJ1dG9yczogUGV0ZXIgUm9jaGUsIExha3NoeWEgVGhha3VyLCBBYWtvZGFsLCBDaGFybGllIEthcm5pb2wgXG4qICAgQXZhaWxhYmlsaXR5OiBodHRwczovL2phdmFzY3JpcHQuaW5mby9jdXJyeWluZy1wYXJ0aWFsc1xuKiAgIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXZhc2NyaXB0LXR1dG9yaWFsL2VuLmphdmFzY3JpcHQuaW5mby9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBjdXJyeSA9IGZ1bmN0aW9uIChmdW5jKSB7XG5cdHJldHVybiBmdW5jdGlvbiBjdXJyaWVkKC4uLmFyZ3MpIHtcblx0XHRpZiAoYXJncy5sZW5ndGggPj0gZnVuYy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MyKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyaWVkLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KGFyZ3MyKSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn07XG5cbmV4cG9ydCB7IGN1cnJ5IH07XG4iLCJpbXBvcnQgeyByYW5kb21Cb2F0UGxhY2VtZW50LCBpbmNyZW1lbnQsIHNldENvbnRhaW5zTWF0Y2ggfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xuXG5jb25zdCBib2F0RmFjdG9yeSA9IGZ1bmN0aW9uICh0aXRsZSwgbGVuKSB7XG5cdGxldCBuYW1lID0gdGl0bGU7XG5cdGxldCBsZW5ndGggPSBsZW47XG5cdGxldCBwb3NpdGlvbnMgPSBbXTtcblx0bGV0IGhpdHMgPSAwO1xuXHRsZXQgc3VuayA9IGZhbHNlO1xuXG5cdHJldHVybiB7IG5hbWUsIGxlbmd0aCwgcG9zaXRpb25zLCBoaXRzLCBzdW5rIH07XG59O1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuXHQvL3ByaXZhdGUgcHJvcGVydGllcyAobm90IGluY2x1ZGVkIGluIHJldHVybmVkIG9iamVjdClcblx0bGV0IGJvYXRzID0gW1xuXHRcdGJvYXRGYWN0b3J5KFwiY2FycmllclwiLCA1KSxcblx0XHRib2F0RmFjdG9yeShcImJhdHRsZXNoaXBcIiwgNCksXG5cdFx0Ym9hdEZhY3RvcnkoXCJjcnVpc2VyXCIsIDMpLFxuXHRcdGJvYXRGYWN0b3J5KFwic3VibWFyaW5lXCIsIDMpLFxuXHRcdGJvYXRGYWN0b3J5KFwiZGVzdHJveWVyXCIsIDIpLFxuXHRdO1xuXG5cdGxldCBwcmV2aW91c0hpdHMgPSBbXTtcblx0bGV0IHByZXZpb3VzTWlzc2VzID0gW107XG5cdGxldCBwcmV2aW91c1Nob3RzID0gW107XG5cblx0Ly9wdWJsaWMgZ2V0dGVyIG1ldGhvZHMgKGFyZSBpbmNsdWRlZCBpbiByZXR1cm5lZCBvYmplY3QpXG5cdGNvbnN0IGdldEFsbEJvYXRzID0gKCkgPT4gYm9hdHM7XG5cdGNvbnN0IGdldFByZXZIaXRzID0gKCkgPT4gcHJldmlvdXNIaXRzO1xuXHRjb25zdCBnZXRQcmV2TWlzc2VzID0gKCkgPT4gcHJldmlvdXNNaXNzZXM7XG5cdGNvbnN0IGdldFByZXZTaG90cyA9ICgpID0+IHByZXZpb3VzU2hvdHM7XG5cdGNvbnN0IGdldEJvYXRCeU5hbWUgPSAobmFtZSkgPT4gYm9hdHMuZmluZCgoYm9hdCkgPT4gYm9hdC5uYW1lID09IG5hbWUpO1xuXG5cdC8vb3RoZXIgcHVibGljIG1ldGhvZHMgKGFyZSBpbmNsdWRlZCBpbiByZXR1cm5lZCBvYmplY3QpXG5cdGNvbnN0IGFkZFByZXZIaXQgPSBmdW5jdGlvbiAoc2hvdCkge1xuXHRcdHByZXZpb3VzSGl0cy5wdXNoKHNob3QpO1xuXHRcdHByZXZpb3VzU2hvdHMucHVzaChzaG90KTtcblx0fTtcblxuXHRjb25zdCBhZGRQcmV2TWlzcyA9IGZ1bmN0aW9uIChzaG90KSB7XG5cdFx0cHJldmlvdXNNaXNzZXMucHVzaChzaG90KTtcblx0XHRwcmV2aW91c1Nob3RzLnB1c2goc2hvdCk7XG5cdH07XG5cblx0Y29uc3QgcGxhY2VTaW5nbGVCb2F0ID0gKGJvYXROYW1lLCBwb3NpdGlvblNldCkgPT4ge1xuXHRcdGxldCBib2F0ID0gZ2V0Qm9hdEJ5TmFtZShib2F0TmFtZSk7XG5cdFx0Ym9hdC5wb3NpdGlvbnMgPSBwb3NpdGlvblNldDtcblx0fTtcblxuXHRjb25zdCBwbGFjZUFsbEJvYXRzUmFuZG9tbHkgPSAoKSA9PiB7XG5cdFx0bGV0IGJvYXRzID0gZ2V0QWxsQm9hdHMoKTtcblx0XHRib2F0cy5mb3JFYWNoKChib2F0KSA9PiB7XG5cdFx0XHRib2F0LnBvc2l0aW9ucyA9IHJhbmRvbUJvYXRQbGFjZW1lbnQoYm9hdHMsIGJvYXQubGVuZ3RoKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZWdpc3RlckhpdCA9IGZ1bmN0aW9uIChib2F0TmFtZSkge1xuXHRcdGxldCBib2F0ID0gZ2V0Qm9hdEJ5TmFtZShib2F0TmFtZSk7XG5cdFx0Ym9hdC5oaXRzKys7XG5cdH07XG5cblx0Y29uc3Qgc2lua0JvYXQgPSBmdW5jdGlvbiAoYm9hdE5hbWUpIHtcblx0XHRsZXQgYm9hdCA9IGdldEJvYXRCeU5hbWUoYm9hdE5hbWUpO1xuXHRcdGJvYXQuc3VuayA9IHRydWU7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRnZXRBbGxCb2F0cyxcblx0XHRnZXRCb2F0QnlOYW1lLFxuXHRcdGdldFByZXZIaXRzLFxuXHRcdGdldFByZXZNaXNzZXMsXG5cdFx0Z2V0UHJldlNob3RzLFxuXHRcdGFkZFByZXZIaXQsXG5cdFx0YWRkUHJldk1pc3MsXG5cdFx0cGxhY2VTaW5nbGVCb2F0LFxuXHRcdHBsYWNlQWxsQm9hdHNSYW5kb21seSxcblx0XHRyZWdpc3RlckhpdCxcblx0XHRzaW5rQm9hdCxcblx0fTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcblx0bGV0IGNvbXB1dGVyID0gcGxheWVyRmFjdG9yeSgpO1xuXG5cdC8vYWRkaXRpb25hbCBwcml2YXRlIHByb3BlcnRpZXMgZm9yIGNvbXB1dGVyIG9iamVjdFxuXHQvLyhub3QgaW5oZXJpdGVkLCBub3QgaW5jbHVkZWQgaW4gcmV0dXJuIG9iamVjdClcblx0bGV0IGludmVzdGlnYXRpbmcgPSBmYWxzZTtcblx0bGV0IHN1c3BlbmRlZCA9IGZhbHNlO1xuXHRjb25zdCBpbnZlc3RpZ2F0aW9uU3RlcHMgPSBbXG5cdFx0WzAsIDFdLFxuXHRcdFswLCAtMV0sXG5cdFx0WzEsIDBdLFxuXHRcdFstMSwgMF0sXG5cdF07XG5cdGxldCBvcmlnaW4gPSBbXTtcblx0bGV0IGN1cnJlbnRTaG90ID0gW107XG5cdGxldCBjdXJyZW50U3RlcCA9IFtdO1xuXHRsZXQgY3VycmVudEludkhpdHMgPSBbXTtcblx0bGV0IGZ1dHVyZUludmVzdGlnYXRpb24gPSBbXTtcblxuXHQvL3B1YmxpYyBtZXRob2RzIChhcmUgaW5jbHVkZWQgaW4gcmV0dXJuZWQgb2JqZWN0KVxuXHRjb25zdCBpc0ludmVzdGlnYXRpbmcgPSAoKSA9PiBpbnZlc3RpZ2F0aW5nO1xuXG5cdGNvbnN0IHN0YXJ0TmV3SW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uIChuZXdIaXQpIHtcblx0XHRpbnZlc3RpZ2F0aW5nID0gdHJ1ZTtcblx0XHRvcmlnaW4gPSBuZXdIaXQ7XG5cdFx0Y3VycmVudEludkhpdHMucHVzaChuZXdIaXQpO1xuXHRcdGN1cnJlbnRTdGVwID0gaW52ZXN0aWdhdGlvblN0ZXBzWzBdO1xuXHR9O1xuXG5cdGNvbnN0IGRldGVybWluZUZ1dHVyZUludiA9IGZ1bmN0aW9uIChzdW5rQm9hdExlbmd0aCkge1xuXHRcdC8vZ2V0IGFsbCBzdW5rQm9hdCBoaXRzXG5cdFx0bGV0IGludmVydGVkU3RlcCA9IFtjdXJyZW50U3RlcFswXSAqIC0xLCBjdXJyZW50U3RlcFsxXSAqIC0xXTtcblx0XHRsZXQgc3Vua0JvYXRQb3NpdGlvbnMgPSBbY3VycmVudFNob3RdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3Vua0JvYXRMZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGxldCBuZXh0UG9zID0gaW5jcmVtZW50KHN1bmtCb2F0UG9zaXRpb25zW2ldLCBpbnZlcnRlZFN0ZXApO1xuXHRcdFx0c3Vua0JvYXRQb3NpdGlvbnMucHVzaChuZXh0UG9zKTtcblx0XHR9XG5cblx0XHQvL2ZpbHRlciBzdW5rQm9hdCBoaXRzIGZyb20gaW52SGl0cywgYXNzaWduIHRvIGZ1dHVyZVxuXHRcdGxldCBmb2xsb3dVcHMgPSBjdXJyZW50SW52SGl0cy5maWx0ZXIoXG5cdFx0XHQoc2hvdCkgPT4gIXNldENvbnRhaW5zTWF0Y2goc2hvdCwgc3Vua0JvYXRQb3NpdGlvbnMpXG5cdFx0KTtcblxuXHRcdGZvbGxvd1Vwcy5mb3JFYWNoKChzaG90KSA9PiBmdXR1cmVJbnZlc3RpZ2F0aW9uLnB1c2goc2hvdCkpO1xuXG5cdFx0cmV0dXJuIGZ1dHVyZUludmVzdGlnYXRpb247XG5cdH07XG5cblx0Y29uc3Qgc3VzcGVuZEludmVzdGlnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0c3VzcGVuZGVkID0gdHJ1ZTtcblx0XHRvcmlnaW4gPSBbXTtcblx0XHRjdXJyZW50U2hvdCA9IFtdO1xuXHRcdGN1cnJlbnRJbnZIaXRzID0gW107XG5cdH07XG5cblx0Y29uc3QgcmVzdW1lSW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRzdXNwZW5kZWQgPSBmYWxzZTtcblx0XHRsZXQgcmVzdW1lU3RhcnRpbmdQb2ludCA9IGZ1dHVyZUludmVzdGlnYXRpb24uc2hpZnQoKTtcblx0XHRvcmlnaW4gPSByZXN1bWVTdGFydGluZ1BvaW50O1xuXHRcdGN1cnJlbnRJbnZIaXRzLnB1c2gocmVzdW1lU3RhcnRpbmdQb2ludCk7XG5cdH07XG5cblx0Y29uc3QgZW5kSW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRzdXNwZW5kSW52ZXN0aWdhdGlvbigpO1xuXHRcdGludmVzdGlnYXRpbmcgPSBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBhZGRJbnZlc3RpZ2F0aW9uSGl0ID0gZnVuY3Rpb24gKHNob3QpIHtcblx0XHRjdXJyZW50SW52SGl0cy5wdXNoKHNob3QpO1xuXHR9O1xuXG5cdGNvbnN0IGdldE5leHRJbnZlc3RpZ2F0aW9uU2hvdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoY3VycmVudFNob3QubGVuZ3RoID09IDApIHtcblx0XHRcdGN1cnJlbnRTaG90ID0gb3JpZ2luO1xuXHRcdH1cblx0XHRjdXJyZW50U2hvdCA9IGluY3JlbWVudChjdXJyZW50U2hvdCwgY3VycmVudFN0ZXApO1xuXHRcdHJldHVybiBjdXJyZW50U2hvdDtcblx0fTtcblxuXHRjb25zdCBvbkxhc3RJbnZlc3RpZ2F0aW9uUGF0aCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gY3VycmVudFN0ZXAgPT0gaW52ZXN0aWdhdGlvblN0ZXBzWzNdID8gdHJ1ZSA6IGZhbHNlO1xuXHR9O1xuXG5cdGNvbnN0IHN3aXRjaEludmVzdGlnYXRpb25EaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y3VycmVudFNob3QgPSBvcmlnaW47XG5cdFx0bGV0IGluZGV4ID0gaW52ZXN0aWdhdGlvblN0ZXBzLmZpbmRJbmRleCgoc3RlcCkgPT4gc3RlcCA9PSBjdXJyZW50U3RlcCk7XG5cdFx0aW5kZXgrKztcblx0XHRpZiAoaW5kZXggPiBpbnZlc3RpZ2F0aW9uU3RlcHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0aW5kZXggPSAwO1xuXHRcdH1cblx0XHRjdXJyZW50U3RlcCA9IGludmVzdGlnYXRpb25TdGVwc1tpbmRleF07XG5cdH07XG5cblx0Y29uc3QgZ2V0SW52SW5mbyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aW52ZXN0aWdhdGluZzogaW52ZXN0aWdhdGluZyxcblx0XHRcdHN1c3BlbmRlZDogc3VzcGVuZGVkLFxuXHRcdFx0b3JpZ2luOiBvcmlnaW4sXG5cdFx0XHRjdXJyZW50U2hvdDogY3VycmVudFNob3QsXG5cdFx0XHRjdXJyZW50U3RlcDogY3VycmVudFN0ZXAsXG5cdFx0XHRjdXJyZW50SW52SGl0czogY3VycmVudEludkhpdHMsXG5cdFx0XHRmdXR1cmVJbnZlc3RpZ2F0aW9uOiBmdXR1cmVJbnZlc3RpZ2F0aW9uLFxuXHRcdH07XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHQuLi5jb21wdXRlcixcblx0XHRpc0ludmVzdGlnYXRpbmcsXG5cdFx0c3RhcnROZXdJbnZlc3RpZ2F0aW9uLFxuXHRcdGRldGVybWluZUZ1dHVyZUludixcblx0XHRzdXNwZW5kSW52ZXN0aWdhdGlvbixcblx0XHRyZXN1bWVJbnZlc3RpZ2F0aW9uLFxuXHRcdGVuZEludmVzdGlnYXRpb24sXG5cdFx0YWRkSW52ZXN0aWdhdGlvbkhpdCxcblx0XHRnZXROZXh0SW52ZXN0aWdhdGlvblNob3QsXG5cdFx0b25MYXN0SW52ZXN0aWdhdGlvblBhdGgsXG5cdFx0c3dpdGNoSW52ZXN0aWdhdGlvbkRpcmVjdGlvbixcblx0XHRnZXRJbnZJbmZvLFxuXHR9O1xufTtcblxuZXhwb3J0IHsgYm9hdEZhY3RvcnksIHBsYXllckZhY3RvcnksIGNvbXB1dGVyRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgY3VycnkgfSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuXG5jb25zdCBhcmVFcXVhbEFycmF5cyA9IGN1cnJ5KChhcnJheTEsIGFycmF5MikgPT4ge1xuXHRpZiAoYXJyYXkxLmxlbmd0aCAhPSBhcnJheTIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBhcnJheTEuZXZlcnkoKGl0ZW0sIGluZGV4KSA9PiBpdGVtID09PSBhcnJheTJbaW5kZXhdKTtcbn0pO1xuXG5jb25zdCBzZXRDb250YWluc01hdGNoID0gZnVuY3Rpb24gKHNob3QsIHBvc2l0aW9ucykge1xuXHRyZXR1cm4gcG9zaXRpb25zLnNvbWUoYXJlRXF1YWxBcnJheXMoc2hvdCkpO1xufTtcblxuY29uc3QgaXNIaXQgPSBmdW5jdGlvbiAoc2hvdCwgYm9hdHMpIHtcblx0cmV0dXJuIGJvYXRzLnNvbWUoKGJvYXQpID0+IHNldENvbnRhaW5zTWF0Y2goc2hvdCwgYm9hdC5wb3NpdGlvbnMpKTtcbn07XG5cbmNvbnN0IGdldEJvYXROYW1lSWZIaXQgPSBmdW5jdGlvbiAoc2hvdCwgYm9hdHMpIHtcblx0bGV0IHJlc3VsdCA9IGJvYXRzLmZpbmQoKGJvYXQpID0+IHNldENvbnRhaW5zTWF0Y2goc2hvdCwgYm9hdC5wb3NpdGlvbnMpKTtcblx0cmV0dXJuIHJlc3VsdCA/IHJlc3VsdC5uYW1lIDogdW5kZWZpbmVkO1xufTtcblxuY29uc3QgZ2V0UmFuZG9tT3JpZ2luID0gZnVuY3Rpb24gKGJvYXRzKSB7XG5cdGxldCBvcmlnaW4gPSBbXTtcblx0ZG8ge1xuXHRcdG9yaWdpblswXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRvcmlnaW5bMV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdH0gd2hpbGUgKGdldEJvYXROYW1lSWZIaXQob3JpZ2luLCBib2F0cykpO1xuXG5cdHJldHVybiBvcmlnaW47XG59O1xuXG5jb25zdCBpbmNyZW1lbnQgPSBmdW5jdGlvbiAoY3VycmVudCwgc3RlcCkge1xuXHRyZXR1cm4gW2N1cnJlbnRbMF0gKyBzdGVwWzBdLCBjdXJyZW50WzFdICsgc3RlcFsxXV07XG59O1xuXG5jb25zdCBnZXRQb3NpdGlvblNldCA9IGZ1bmN0aW9uIChzdGVwLCBvcmlnaW4sIGJvYXRMZW5ndGgpIHtcblx0bGV0IGNvb3JkaW5hdGUgPSBvcmlnaW47XG5cdGxldCBhcnJheSA9IFtjb29yZGluYXRlXTtcblx0d2hpbGUgKGFycmF5Lmxlbmd0aCA8IGJvYXRMZW5ndGgpIHtcblx0XHRjb29yZGluYXRlID0gaW5jcmVtZW50KGNvb3JkaW5hdGUsIHN0ZXApO1xuXHRcdGFycmF5LnB1c2goY29vcmRpbmF0ZSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufTtcblxuY29uc3QgZ2V0QWxsUG9zaXRpb25TZXRzID0gY3VycnkoKGJvYXRMZW5ndGgsIG9yaWdpbikgPT4ge1xuXHRsZXQgc2V0cyA9IFtdO1xuXHRzZXRzLnB1c2goZ2V0UG9zaXRpb25TZXQoWzAsIDFdLCBvcmlnaW4sIGJvYXRMZW5ndGgpKTtcblx0c2V0cy5wdXNoKGdldFBvc2l0aW9uU2V0KFswLCAtMV0sIG9yaWdpbiwgYm9hdExlbmd0aCkpO1xuXHRzZXRzLnB1c2goZ2V0UG9zaXRpb25TZXQoWzEsIDBdLCBvcmlnaW4sIGJvYXRMZW5ndGgpKTtcblx0c2V0cy5wdXNoKGdldFBvc2l0aW9uU2V0KFstMSwgMF0sIG9yaWdpbiwgYm9hdExlbmd0aCkpO1xuXG5cdHJldHVybiBzZXRzO1xufSk7XG5cbmNvbnN0IGZpbHRlckludmFsaWRTZXRzID0gZnVuY3Rpb24gKHNldHMsIGJvYXRzKSB7XG5cdGxldCB2YWxpZFNldHMgPSBzZXRzLmZpbHRlcigoc2V0KSA9PiAhcG9zaXRpb25TZXRJbnZhbGlkKHNldCwgYm9hdHMpKTtcblx0cmV0dXJuIHZhbGlkU2V0cy5sZW5ndGggPT0gMCA/IHVuZGVmaW5lZCA6IHZhbGlkU2V0cztcbn07XG5cbmNvbnN0IG91dE9mQm91bmRzID0gZnVuY3Rpb24gKGFycmF5KSB7XG5cdHJldHVybiBhcnJheVswXSA8IDAgfHwgYXJyYXlbMV0gPCAwIHx8IGFycmF5WzBdID4gOSB8fCBhcnJheVsxXSA+IDk7XG59O1xuXG5jb25zdCBwb3NpdGlvblNldEludmFsaWQgPSBmdW5jdGlvbiAocG9zaXRpb25zLCBib2F0cykge1xuXHRyZXR1cm4gcG9zaXRpb25zLnNvbWUoKHBvcykgPT4ge1xuXHRcdHJldHVybiBnZXRCb2F0TmFtZUlmSGl0KHBvcywgYm9hdHMpIHx8IG91dE9mQm91bmRzKHBvcykgfHwgZmFsc2U7XG5cdH0pO1xufTtcblxuY29uc3QgcGlja1JhbmRvbVBvc2l0aW9uU2V0ID0gZnVuY3Rpb24gKHBvc2l0aW9uU2V0cykge1xuXHRsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NpdGlvblNldHMubGVuZ3RoKTtcblx0cmV0dXJuIHBvc2l0aW9uU2V0c1tyYW5kb21JbmRleF07XG59O1xuXG5jb25zdCByYW5kb21Cb2F0UGxhY2VtZW50ID0gZnVuY3Rpb24gKGJvYXRzLCBib2F0TGVuZ3RoKSB7XG5cdGxldCB2YWxpZFNldHM7XG5cdGRvIHtcblx0XHRsZXQgb3JpZ2luID0gZ2V0UmFuZG9tT3JpZ2luKGJvYXRzKTtcblx0XHRsZXQgcG9zaXRpb25TZXRzID0gZ2V0QWxsUG9zaXRpb25TZXRzKGJvYXRMZW5ndGgsIG9yaWdpbik7XG5cdFx0dmFsaWRTZXRzID0gZmlsdGVySW52YWxpZFNldHMocG9zaXRpb25TZXRzLCBib2F0cyk7XG5cdH0gd2hpbGUgKHZhbGlkU2V0cyA9PSB1bmRlZmluZWQpO1xuXG5cdGxldCBjaG9zZW5Qb3NpdGlvblNldCA9IHBpY2tSYW5kb21Qb3NpdGlvblNldCh2YWxpZFNldHMpO1xuXHRyZXR1cm4gY2hvc2VuUG9zaXRpb25TZXQ7XG59O1xuXG5jb25zdCBtYWtlUmFuZG9tU2hvdCA9IGZ1bmN0aW9uIChwcmV2U2hvdHMpIHtcblx0bGV0IHNob3QgPSBbXTtcblx0ZG8ge1xuXHRcdHNob3RbMF0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdFx0c2hvdFsxXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0fSB3aGlsZSAoc2V0Q29udGFpbnNNYXRjaChzaG90LCBwcmV2U2hvdHMpKTtcblxuXHRyZXR1cm4gc2hvdDtcbn07XG5cbmNvbnN0IGJvYXRTdW5rID0gZnVuY3Rpb24gKGJvYXROYW1lLCBib2F0cykge1xuXHRsZXQgYm9hdCA9IGJvYXRzLmZpbmQoKGJvYXQpID0+IGJvYXQubmFtZSA9PT0gYm9hdE5hbWUpO1xuXHRyZXR1cm4gYm9hdC5oaXRzID49IGJvYXQubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuY29uc3QgZ2FtZU92ZXIgPSBmdW5jdGlvbiAoYm9hdHMpIHtcblx0cmV0dXJuIGJvYXRzLmV2ZXJ5KChib2F0KSA9PiBib2F0LnN1bmsgPT09IHRydWUpO1xufTtcblxuZXhwb3J0IHtcblx0Y3VycnksXG5cdGFyZUVxdWFsQXJyYXlzLFxuXHRzZXRDb250YWluc01hdGNoLFxuXHRpbmNyZW1lbnQsXG5cdGlzSGl0LFxuXHRnZXRCb2F0TmFtZUlmSGl0LFxuXHRnZXRQb3NpdGlvblNldCxcblx0Z2V0QWxsUG9zaXRpb25TZXRzLFxuXHRmaWx0ZXJJbnZhbGlkU2V0cyxcblx0Z2V0UmFuZG9tT3JpZ2luLFxuXHRvdXRPZkJvdW5kcyxcblx0cG9zaXRpb25TZXRJbnZhbGlkLFxuXHRwaWNrUmFuZG9tUG9zaXRpb25TZXQsXG5cdHJhbmRvbUJvYXRQbGFjZW1lbnQsXG5cdG1ha2VSYW5kb21TaG90LFxuXHRib2F0U3Vuayxcblx0Z2FtZU92ZXIsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHBsYXllckZhY3RvcnksIGNvbXB1dGVyRmFjdG9yeSB9IGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCB7XG5cdG1ha2VSYW5kb21TaG90LFxuXHRnZXRCb2F0TmFtZUlmSGl0LFxuXHRib2F0U3Vuayxcblx0aXNIaXQsXG5cdG91dE9mQm91bmRzLFxuXHRzZXRDb250YWluc01hdGNoLFxufSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xuXG5jb25zdCBnYW1lID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBwbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KCk7XG5cdGNvbnN0IGNvbXB1dGVyID0gY29tcHV0ZXJGYWN0b3J5KCk7XG5cdGxldCB0dXJuQ291bnQgPSAwO1xuXG5cdGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cGxheWVyLnBsYWNlQWxsQm9hdHNSYW5kb21seSgpO1xuXHRcdGNvbXB1dGVyLnBsYWNlQWxsQm9hdHNSYW5kb21seSgpO1xuXHR9O1xuXG5cdGNvbnN0IHBsYXllclR1cm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XG5cdFx0bGV0IGVuZW15UGxheWVyID0gY29tcHV0ZXI7XG5cdFx0bGV0IHByZXZTaG90cyA9IGN1cnJlbnRQbGF5ZXIuZ2V0UHJldlNob3RzKCk7XG5cblx0XHQvLyBcImRldGVybWluZSBzaG90XCIgLSB3aWxsIGV2ZW50dWFsbHkgdXNlIHBsYXllciBpbnB1dFxuXHRcdGxldCBzaG90ID0gbWFrZVJhbmRvbVNob3QocHJldlNob3RzKTtcblxuXHRcdHVwZGF0ZURhdGEoY3VycmVudFBsYXllciwgZW5lbXlQbGF5ZXIsIHNob3QpO1xuXHR9O1xuXG5cdGNvbnN0IGNvbXB1dGVyVHVybiA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgY3VycmVudFBsYXllciA9IGNvbXB1dGVyO1xuXHRcdGxldCBlbmVteVBsYXllciA9IHBsYXllcjtcblxuXHRcdGlmIChjdXJyZW50UGxheWVyLmlzSW52ZXN0aWdhdGluZygpKSB7XG5cdFx0XHRpbnZlc3RpZ2F0ZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgcHJldlNob3RzID0gY3VycmVudFBsYXllci5nZXRQcmV2U2hvdHMoKTtcblx0XHRcdGxldCBzaG90ID0gbWFrZVJhbmRvbVNob3QocHJldlNob3RzKTtcblx0XHRcdHVwZGF0ZURhdGEoY3VycmVudFBsYXllciwgZW5lbXlQbGF5ZXIsIHNob3QpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBpbnZlc3RpZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgY3VycmVudFBsYXllciA9IGNvbXB1dGVyO1xuXHRcdGxldCBlbmVteVBsYXllciA9IHBsYXllcjtcblxuXHRcdGlmIChjdXJyZW50UGxheWVyLmdldEludkluZm8oKS5zdXNwZW5kZWQgPT0gdHJ1ZSkge1xuXHRcdFx0Y3VycmVudFBsYXllci5yZXN1bWVJbnZlc3RpZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0bGV0IHByZXZTaG90cyA9IGN1cnJlbnRQbGF5ZXIuZ2V0UHJldlNob3RzKCk7XG5cdFx0bGV0IHNob3QgPSBjdXJyZW50UGxheWVyLmdldE5leHRJbnZlc3RpZ2F0aW9uU2hvdCgpO1xuXHRcdHdoaWxlIChvdXRPZkJvdW5kcyhzaG90KSB8fCBzZXRDb250YWluc01hdGNoKHNob3QsIHByZXZTaG90cykpIHtcblx0XHRcdGN1cnJlbnRQbGF5ZXIuc3dpdGNoSW52ZXN0aWdhdGlvbkRpcmVjdGlvbigpO1xuXHRcdFx0c2hvdCA9IGN1cnJlbnRQbGF5ZXIuZ2V0TmV4dEludmVzdGlnYXRpb25TaG90KCk7XG5cdFx0fVxuXHRcdHVwZGF0ZURhdGEoY3VycmVudFBsYXllciwgZW5lbXlQbGF5ZXIsIHNob3QpO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZURhdGEgPSBmdW5jdGlvbiAoY3VycmVudFBsYXllciwgZW5lbXlQbGF5ZXIsIHNob3QpIHtcblx0XHRsZXQgZW5lbXlCb2F0cyA9IGVuZW15UGxheWVyLmdldEFsbEJvYXRzKCk7XG5cdFx0bGV0IGhpdCA9IGlzSGl0KHNob3QsIGVuZW15Qm9hdHMpO1xuXHRcdGxldCBoaXRCb2F0TmFtZTtcblx0XHRsZXQgc2luaztcblx0XHRpZiAoaGl0KSB7XG5cdFx0XHRjdXJyZW50UGxheWVyLmFkZFByZXZIaXQoc2hvdCk7XG5cdFx0XHRoaXRCb2F0TmFtZSA9IGdldEJvYXROYW1lSWZIaXQoc2hvdCwgZW5lbXlCb2F0cyk7XG5cdFx0XHRlbmVteVBsYXllci5yZWdpc3RlckhpdChoaXRCb2F0TmFtZSk7XG5cdFx0XHRzaW5rID0gYm9hdFN1bmsoaGl0Qm9hdE5hbWUsIGVuZW15Qm9hdHMpO1xuXHRcdFx0aWYgKHNpbmspIHtcblx0XHRcdFx0ZW5lbXlQbGF5ZXIuc2lua0JvYXQoaGl0Qm9hdE5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN1cnJlbnRQbGF5ZXIgPT0gY29tcHV0ZXIgJiYgIWN1cnJlbnRQbGF5ZXIuaXNJbnZlc3RpZ2F0aW5nKCkpIHtcblx0XHRcdFx0Y3VycmVudFBsYXllci5zdGFydE5ld0ludmVzdGlnYXRpb24oc2hvdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFBsYXllci5hZGRQcmV2TWlzcyhzaG90KTtcblx0XHR9XG5cblx0XHRpZiAoY3VycmVudFBsYXllciA9PSBjb21wdXRlciAmJiBjdXJyZW50UGxheWVyLmlzSW52ZXN0aWdhdGluZygpKSB7XG5cdFx0XHR1cGRhdGVJbnZlc3RpZ2F0aW9uKGN1cnJlbnRQbGF5ZXIsIHNob3QsIGhpdCwgc2luaywgaGl0Qm9hdE5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB1cGRhdGVJbnZlc3RpZ2F0aW9uID0gZnVuY3Rpb24gKFxuXHRcdGN1cnJlbnRQbGF5ZXIsXG5cdFx0c2hvdCxcblx0XHRoaXQsXG5cdFx0c2luayxcblx0XHRoaXRCb2F0TmFtZVxuXHQpIHtcblx0XHRpZiAoIWhpdCkge1xuXHRcdFx0Y3VycmVudFBsYXllci5zd2l0Y2hJbnZlc3RpZ2F0aW9uRGlyZWN0aW9uKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGhpdCkge1xuXHRcdFx0Y3VycmVudFBsYXllci5hZGRJbnZlc3RpZ2F0aW9uSGl0KHNob3QpO1xuXHRcdH1cblxuXHRcdGlmIChzaW5rKSB7XG5cdFx0XHRsZXQgc3Vua0JvYXQgPSBjdXJyZW50UGxheWVyLmdldEJvYXRCeU5hbWUoaGl0Qm9hdE5hbWUpO1xuXHRcdFx0bGV0IGZ1dHVyZUludiA9IGN1cnJlbnRQbGF5ZXIuZGV0ZXJtaW5lRnV0dXJlSW52KHN1bmtCb2F0Lmxlbmd0aCk7XG5cdFx0XHRpZiAoZnV0dXJlSW52Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y3VycmVudFBsYXllci5zdXNwZW5kSW52ZXN0aWdhdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBsYXllci5lbmRJbnZlc3RpZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHRha2VUdXJuID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0dXJuQ291bnQgJSAyID09IDApIHtcblx0XHRcdGNvbXB1dGVyVHVybigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwbGF5ZXJUdXJuKCk7XG5cdFx0fVxuXG5cdFx0dHVybkNvdW50Kys7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRwbGF5ZXIsXG5cdFx0Y29tcHV0ZXIsXG5cdFx0aW5pdCxcblx0XHR0YWtlVHVybixcblx0XHRwbGF5ZXJUdXJuLFxuXHRcdGNvbXB1dGVyVHVybixcblx0XHRpbnZlc3RpZ2F0ZSxcblx0XHR1cGRhdGVEYXRhLFxuXHRcdHVwZGF0ZUludmVzdGlnYXRpb24sXG5cdH07XG59O1xuXG5leHBvcnQgeyBnYW1lIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=