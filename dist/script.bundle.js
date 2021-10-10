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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tbackground-color: black;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,uBAAuB;AACxB","sourcesContent":["body {\n\tbackground-color: black;\n}\n"],"sourceRoot":""}]);
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
		investigating = false;
		suspended = false;
		origin = [];
		currentShot = [];
		currentStep = [];
		currentInvHits = [];
		futureInvestigation = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEseURBQWM7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGNBQWMseURBQWM7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsc0RBQVcsVUFBVSwyREFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxnREFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyREFBZ0I7QUFDakM7QUFDQSxVQUFVLG1EQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3VycnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5OT1RJQ0U6IFRoZSBjb2RlIGZvciB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uIHdhcyB0YWtlbiBmcm9tIGFuIGVkdWNhdGlvbmFsIGFydGljbGUgb24gZnVuY3Rpb24gY3VycmluZyBmcm9tIFRoZSBNb2Rlcm4gSmF2YXNjcmlwdCBUdXRvcmlhbCB3ZWJzaXRlLiBUaGUgY29kZSBpcyB1c2VkIGFzIGEgcGFydCBvZiB0aGlzIHByb2plY3QgZm9yIHBlcnNvbmFsIGVkdWNhdGlvbmFsIHB1cnBvc2VzIG9ubHkgYXMgcGVyIHRoZSB0ZXJtcyBwcm92aWRlZCBpbiBUaGUgTW9kZXJuIEphdmFzY3JpcHQgVHV0b3JpYWwgTGljZW5zZS5cbiogXG4qICAgVGl0bGU6IFRoZSBNb2Rlcm4gSmF2YXNjcmlwdCBUdXRvcmlhbCAtIEN1cnJ5aW5nXG4qICAgUHJpbWFyeSBBdXRob3I6IElseWEgS2FudG9yXG4qICAgT3RoZXIgQ29udHJpYnV0b3JzOiBQZXRlciBSb2NoZSwgTGFrc2h5YSBUaGFrdXIsIEFha29kYWwsIENoYXJsaWUgS2FybmlvbCBcbiogICBBdmFpbGFiaWxpdHk6IGh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL2N1cnJ5aW5nLXBhcnRpYWxzXG4qICAgTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL2phdmFzY3JpcHQtdHV0b3JpYWwvZW4uamF2YXNjcmlwdC5pbmZvL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGN1cnJ5ID0gZnVuY3Rpb24gKGZ1bmMpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoLi4uYXJncykge1xuXHRcdGlmIChhcmdzLmxlbmd0aCA+PSBmdW5jLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoLi4uYXJnczIpIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJpZWQuYXBwbHkodGhpcywgYXJncy5jb25jYXQoYXJnczIpKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufTtcblxuZXhwb3J0IHsgY3VycnkgfTtcbiIsImltcG9ydCB7IHJhbmRvbUJvYXRQbGFjZW1lbnQsIGluY3JlbWVudCwgc2V0Q29udGFpbnNNYXRjaCB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5cbmNvbnN0IGJvYXRGYWN0b3J5ID0gZnVuY3Rpb24gKHRpdGxlLCBsZW4pIHtcblx0bGV0IG5hbWUgPSB0aXRsZTtcblx0bGV0IGxlbmd0aCA9IGxlbjtcblx0bGV0IHBvc2l0aW9ucyA9IFtdO1xuXHRsZXQgaGl0cyA9IDA7XG5cdGxldCBzdW5rID0gZmFsc2U7XG5cblx0cmV0dXJuIHsgbmFtZSwgbGVuZ3RoLCBwb3NpdGlvbnMsIGhpdHMsIHN1bmsgfTtcbn07XG5cbmNvbnN0IHBsYXllckZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG5cdC8vcHJpdmF0ZSBwcm9wZXJ0aWVzIChub3QgaW5jbHVkZWQgaW4gcmV0dXJuZWQgb2JqZWN0KVxuXHRsZXQgYm9hdHMgPSBbXG5cdFx0Ym9hdEZhY3RvcnkoXCJjYXJyaWVyXCIsIDUpLFxuXHRcdGJvYXRGYWN0b3J5KFwiYmF0dGxlc2hpcFwiLCA0KSxcblx0XHRib2F0RmFjdG9yeShcImNydWlzZXJcIiwgMyksXG5cdFx0Ym9hdEZhY3RvcnkoXCJzdWJtYXJpbmVcIiwgMyksXG5cdFx0Ym9hdEZhY3RvcnkoXCJkZXN0cm95ZXJcIiwgMiksXG5cdF07XG5cblx0bGV0IHByZXZpb3VzSGl0cyA9IFtdO1xuXHRsZXQgcHJldmlvdXNNaXNzZXMgPSBbXTtcblx0bGV0IHByZXZpb3VzU2hvdHMgPSBbXTtcblxuXHQvL3B1YmxpYyBnZXR0ZXIgbWV0aG9kcyAoYXJlIGluY2x1ZGVkIGluIHJldHVybmVkIG9iamVjdClcblx0Y29uc3QgZ2V0QWxsQm9hdHMgPSAoKSA9PiBib2F0cztcblx0Y29uc3QgZ2V0UHJldkhpdHMgPSAoKSA9PiBwcmV2aW91c0hpdHM7XG5cdGNvbnN0IGdldFByZXZNaXNzZXMgPSAoKSA9PiBwcmV2aW91c01pc3Nlcztcblx0Y29uc3QgZ2V0UHJldlNob3RzID0gKCkgPT4gcHJldmlvdXNTaG90cztcblx0Y29uc3QgZ2V0Qm9hdEJ5TmFtZSA9IChuYW1lKSA9PiBib2F0cy5maW5kKChib2F0KSA9PiBib2F0Lm5hbWUgPT0gbmFtZSk7XG5cblx0Ly9vdGhlciBwdWJsaWMgbWV0aG9kcyAoYXJlIGluY2x1ZGVkIGluIHJldHVybmVkIG9iamVjdClcblx0Y29uc3QgYWRkUHJldkhpdCA9IGZ1bmN0aW9uIChzaG90KSB7XG5cdFx0cHJldmlvdXNIaXRzLnB1c2goc2hvdCk7XG5cdFx0cHJldmlvdXNTaG90cy5wdXNoKHNob3QpO1xuXHR9O1xuXG5cdGNvbnN0IGFkZFByZXZNaXNzID0gZnVuY3Rpb24gKHNob3QpIHtcblx0XHRwcmV2aW91c01pc3Nlcy5wdXNoKHNob3QpO1xuXHRcdHByZXZpb3VzU2hvdHMucHVzaChzaG90KTtcblx0fTtcblxuXHRjb25zdCBwbGFjZVNpbmdsZUJvYXQgPSAoYm9hdE5hbWUsIHBvc2l0aW9uU2V0KSA9PiB7XG5cdFx0bGV0IGJvYXQgPSBnZXRCb2F0QnlOYW1lKGJvYXROYW1lKTtcblx0XHRib2F0LnBvc2l0aW9ucyA9IHBvc2l0aW9uU2V0O1xuXHR9O1xuXG5cdGNvbnN0IHBsYWNlQWxsQm9hdHNSYW5kb21seSA9ICgpID0+IHtcblx0XHRsZXQgYm9hdHMgPSBnZXRBbGxCb2F0cygpO1xuXHRcdGJvYXRzLmZvckVhY2goKGJvYXQpID0+IHtcblx0XHRcdGJvYXQucG9zaXRpb25zID0gcmFuZG9tQm9hdFBsYWNlbWVudChib2F0cywgYm9hdC5sZW5ndGgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlZ2lzdGVySGl0ID0gZnVuY3Rpb24gKGJvYXROYW1lKSB7XG5cdFx0bGV0IGJvYXQgPSBnZXRCb2F0QnlOYW1lKGJvYXROYW1lKTtcblx0XHRib2F0LmhpdHMrKztcblx0fTtcblxuXHRjb25zdCBzaW5rQm9hdCA9IGZ1bmN0aW9uIChib2F0TmFtZSkge1xuXHRcdGxldCBib2F0ID0gZ2V0Qm9hdEJ5TmFtZShib2F0TmFtZSk7XG5cdFx0Ym9hdC5zdW5rID0gdHJ1ZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldEFsbEJvYXRzLFxuXHRcdGdldEJvYXRCeU5hbWUsXG5cdFx0Z2V0UHJldkhpdHMsXG5cdFx0Z2V0UHJldk1pc3Nlcyxcblx0XHRnZXRQcmV2U2hvdHMsXG5cdFx0YWRkUHJldkhpdCxcblx0XHRhZGRQcmV2TWlzcyxcblx0XHRwbGFjZVNpbmdsZUJvYXQsXG5cdFx0cGxhY2VBbGxCb2F0c1JhbmRvbWx5LFxuXHRcdHJlZ2lzdGVySGl0LFxuXHRcdHNpbmtCb2F0LFxuXHR9O1xufTtcblxuY29uc3QgY29tcHV0ZXJGYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgY29tcHV0ZXIgPSBwbGF5ZXJGYWN0b3J5KCk7XG5cblx0Ly9hZGRpdGlvbmFsIHByaXZhdGUgcHJvcGVydGllcyBmb3IgY29tcHV0ZXIgb2JqZWN0XG5cdC8vKG5vdCBpbmhlcml0ZWQsIG5vdCBpbmNsdWRlZCBpbiByZXR1cm4gb2JqZWN0KVxuXHRsZXQgaW52ZXN0aWdhdGluZyA9IGZhbHNlO1xuXHRsZXQgc3VzcGVuZGVkID0gZmFsc2U7XG5cdGNvbnN0IGludmVzdGlnYXRpb25TdGVwcyA9IFtcblx0XHRbMCwgMV0sXG5cdFx0WzAsIC0xXSxcblx0XHRbMSwgMF0sXG5cdFx0Wy0xLCAwXSxcblx0XTtcblx0bGV0IG9yaWdpbiA9IFtdO1xuXHRsZXQgY3VycmVudFNob3QgPSBbXTtcblx0bGV0IGN1cnJlbnRTdGVwID0gW107XG5cdGxldCBjdXJyZW50SW52SGl0cyA9IFtdO1xuXHRsZXQgZnV0dXJlSW52ZXN0aWdhdGlvbiA9IFtdO1xuXG5cdC8vcHVibGljIG1ldGhvZHMgKGFyZSBpbmNsdWRlZCBpbiByZXR1cm5lZCBvYmplY3QpXG5cdGNvbnN0IGlzSW52ZXN0aWdhdGluZyA9ICgpID0+IGludmVzdGlnYXRpbmc7XG5cblx0Y29uc3Qgc3RhcnROZXdJbnZlc3RpZ2F0aW9uID0gZnVuY3Rpb24gKG5ld0hpdCkge1xuXHRcdGludmVzdGlnYXRpbmcgPSB0cnVlO1xuXHRcdG9yaWdpbiA9IG5ld0hpdDtcblx0XHRjdXJyZW50SW52SGl0cy5wdXNoKG5ld0hpdCk7XG5cdFx0Y3VycmVudFN0ZXAgPSBpbnZlc3RpZ2F0aW9uU3RlcHNbMF07XG5cdH07XG5cblx0Y29uc3QgZGV0ZXJtaW5lRnV0dXJlSW52ID0gZnVuY3Rpb24gKHN1bmtCb2F0TGVuZ3RoKSB7XG5cdFx0Ly9nZXQgYWxsIHN1bmtCb2F0IGhpdHNcblx0XHRsZXQgaW52ZXJ0ZWRTdGVwID0gW2N1cnJlbnRTdGVwWzBdICogLTEsIGN1cnJlbnRTdGVwWzFdICogLTFdO1xuXHRcdGxldCBzdW5rQm9hdFBvc2l0aW9ucyA9IFtjdXJyZW50U2hvdF07XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdW5rQm9hdExlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0bGV0IG5leHRQb3MgPSBpbmNyZW1lbnQoc3Vua0JvYXRQb3NpdGlvbnNbaV0sIGludmVydGVkU3RlcCk7XG5cdFx0XHRzdW5rQm9hdFBvc2l0aW9ucy5wdXNoKG5leHRQb3MpO1xuXHRcdH1cblxuXHRcdC8vZmlsdGVyIHN1bmtCb2F0IGhpdHMgZnJvbSBpbnZIaXRzLCBhc3NpZ24gdG8gZnV0dXJlXG5cdFx0bGV0IGZvbGxvd1VwcyA9IGN1cnJlbnRJbnZIaXRzLmZpbHRlcihcblx0XHRcdChzaG90KSA9PiAhc2V0Q29udGFpbnNNYXRjaChzaG90LCBzdW5rQm9hdFBvc2l0aW9ucylcblx0XHQpO1xuXG5cdFx0Zm9sbG93VXBzLmZvckVhY2goKHNob3QpID0+IGZ1dHVyZUludmVzdGlnYXRpb24ucHVzaChzaG90KSk7XG5cblx0XHRyZXR1cm4gZnV0dXJlSW52ZXN0aWdhdGlvbjtcblx0fTtcblxuXHRjb25zdCBzdXNwZW5kSW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRzdXNwZW5kZWQgPSB0cnVlO1xuXHRcdG9yaWdpbiA9IFtdO1xuXHRcdGN1cnJlbnRTaG90ID0gW107XG5cdFx0Y3VycmVudEludkhpdHMgPSBbXTtcblx0fTtcblxuXHRjb25zdCByZXN1bWVJbnZlc3RpZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdHN1c3BlbmRlZCA9IGZhbHNlO1xuXHRcdGxldCByZXN1bWVTdGFydGluZ1BvaW50ID0gZnV0dXJlSW52ZXN0aWdhdGlvbi5zaGlmdCgpO1xuXHRcdG9yaWdpbiA9IHJlc3VtZVN0YXJ0aW5nUG9pbnQ7XG5cdFx0Y3VycmVudEludkhpdHMucHVzaChyZXN1bWVTdGFydGluZ1BvaW50KTtcblx0fTtcblxuXHRjb25zdCBlbmRJbnZlc3RpZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdGludmVzdGlnYXRpbmcgPSBmYWxzZTtcblx0XHRzdXNwZW5kZWQgPSBmYWxzZTtcblx0XHRvcmlnaW4gPSBbXTtcblx0XHRjdXJyZW50U2hvdCA9IFtdO1xuXHRcdGN1cnJlbnRTdGVwID0gW107XG5cdFx0Y3VycmVudEludkhpdHMgPSBbXTtcblx0XHRmdXR1cmVJbnZlc3RpZ2F0aW9uID0gW107XG5cdH07XG5cblx0Y29uc3QgYWRkSW52ZXN0aWdhdGlvbkhpdCA9IGZ1bmN0aW9uIChzaG90KSB7XG5cdFx0Y3VycmVudEludkhpdHMucHVzaChzaG90KTtcblx0fTtcblxuXHRjb25zdCBnZXROZXh0SW52ZXN0aWdhdGlvblNob3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGN1cnJlbnRTaG90Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRjdXJyZW50U2hvdCA9IG9yaWdpbjtcblx0XHR9XG5cdFx0Y3VycmVudFNob3QgPSBpbmNyZW1lbnQoY3VycmVudFNob3QsIGN1cnJlbnRTdGVwKTtcblx0XHRyZXR1cm4gY3VycmVudFNob3Q7XG5cdH07XG5cblx0Y29uc3Qgb25MYXN0SW52ZXN0aWdhdGlvblBhdGggPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnRTdGVwID09IGludmVzdGlnYXRpb25TdGVwc1szXSA/IHRydWUgOiBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBzd2l0Y2hJbnZlc3RpZ2F0aW9uRGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdGN1cnJlbnRTaG90ID0gb3JpZ2luO1xuXHRcdGxldCBpbmRleCA9IGludmVzdGlnYXRpb25TdGVwcy5maW5kSW5kZXgoKHN0ZXApID0+IHN0ZXAgPT0gY3VycmVudFN0ZXApO1xuXHRcdGluZGV4Kys7XG5cdFx0aWYgKGluZGV4ID4gaW52ZXN0aWdhdGlvblN0ZXBzLmxlbmd0aCAtIDEpIHtcblx0XHRcdGluZGV4ID0gMDtcblx0XHR9XG5cdFx0Y3VycmVudFN0ZXAgPSBpbnZlc3RpZ2F0aW9uU3RlcHNbaW5kZXhdO1xuXHR9O1xuXG5cdGNvbnN0IGdldEludkluZm8gPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGludmVzdGlnYXRpbmc6IGludmVzdGlnYXRpbmcsXG5cdFx0XHRzdXNwZW5kZWQ6IHN1c3BlbmRlZCxcblx0XHRcdG9yaWdpbjogb3JpZ2luLFxuXHRcdFx0Y3VycmVudFNob3Q6IGN1cnJlbnRTaG90LFxuXHRcdFx0Y3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwLFxuXHRcdFx0Y3VycmVudEludkhpdHM6IGN1cnJlbnRJbnZIaXRzLFxuXHRcdFx0ZnV0dXJlSW52ZXN0aWdhdGlvbjogZnV0dXJlSW52ZXN0aWdhdGlvbixcblx0XHR9O1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Li4uY29tcHV0ZXIsXG5cdFx0aXNJbnZlc3RpZ2F0aW5nLFxuXHRcdHN0YXJ0TmV3SW52ZXN0aWdhdGlvbixcblx0XHRkZXRlcm1pbmVGdXR1cmVJbnYsXG5cdFx0c3VzcGVuZEludmVzdGlnYXRpb24sXG5cdFx0cmVzdW1lSW52ZXN0aWdhdGlvbixcblx0XHRlbmRJbnZlc3RpZ2F0aW9uLFxuXHRcdGFkZEludmVzdGlnYXRpb25IaXQsXG5cdFx0Z2V0TmV4dEludmVzdGlnYXRpb25TaG90LFxuXHRcdG9uTGFzdEludmVzdGlnYXRpb25QYXRoLFxuXHRcdHN3aXRjaEludmVzdGlnYXRpb25EaXJlY3Rpb24sXG5cdFx0Z2V0SW52SW5mbyxcblx0fTtcbn07XG5cbmV4cG9ydCB7IGJvYXRGYWN0b3J5LCBwbGF5ZXJGYWN0b3J5LCBjb21wdXRlckZhY3RvcnkgfTtcbiIsImltcG9ydCB7IGN1cnJ5IH0gZnJvbSBcIi4vY3VycnkuanNcIjtcblxuY29uc3QgYXJlRXF1YWxBcnJheXMgPSBjdXJyeSgoYXJyYXkxLCBhcnJheTIpID0+IHtcblx0aWYgKGFycmF5MS5sZW5ndGggIT0gYXJyYXkyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gYXJyYXkxLmV2ZXJ5KChpdGVtLCBpbmRleCkgPT4gaXRlbSA9PT0gYXJyYXkyW2luZGV4XSk7XG59KTtcblxuY29uc3Qgc2V0Q29udGFpbnNNYXRjaCA9IGZ1bmN0aW9uIChzaG90LCBwb3NpdGlvbnMpIHtcblx0cmV0dXJuIHBvc2l0aW9ucy5zb21lKGFyZUVxdWFsQXJyYXlzKHNob3QpKTtcbn07XG5cbmNvbnN0IGlzSGl0ID0gZnVuY3Rpb24gKHNob3QsIGJvYXRzKSB7XG5cdHJldHVybiBib2F0cy5zb21lKChib2F0KSA9PiBzZXRDb250YWluc01hdGNoKHNob3QsIGJvYXQucG9zaXRpb25zKSk7XG59O1xuXG5jb25zdCBnZXRCb2F0TmFtZUlmSGl0ID0gZnVuY3Rpb24gKHNob3QsIGJvYXRzKSB7XG5cdGxldCByZXN1bHQgPSBib2F0cy5maW5kKChib2F0KSA9PiBzZXRDb250YWluc01hdGNoKHNob3QsIGJvYXQucG9zaXRpb25zKSk7XG5cdHJldHVybiByZXN1bHQgPyByZXN1bHQubmFtZSA6IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IGdldFJhbmRvbU9yaWdpbiA9IGZ1bmN0aW9uIChib2F0cykge1xuXHRsZXQgb3JpZ2luID0gW107XG5cdGRvIHtcblx0XHRvcmlnaW5bMF0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdFx0b3JpZ2luWzFdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHR9IHdoaWxlIChnZXRCb2F0TmFtZUlmSGl0KG9yaWdpbiwgYm9hdHMpKTtcblxuXHRyZXR1cm4gb3JpZ2luO1xufTtcblxuY29uc3QgaW5jcmVtZW50ID0gZnVuY3Rpb24gKGN1cnJlbnQsIHN0ZXApIHtcblx0cmV0dXJuIFtjdXJyZW50WzBdICsgc3RlcFswXSwgY3VycmVudFsxXSArIHN0ZXBbMV1dO1xufTtcblxuY29uc3QgZ2V0UG9zaXRpb25TZXQgPSBmdW5jdGlvbiAoc3RlcCwgb3JpZ2luLCBib2F0TGVuZ3RoKSB7XG5cdGxldCBjb29yZGluYXRlID0gb3JpZ2luO1xuXHRsZXQgYXJyYXkgPSBbY29vcmRpbmF0ZV07XG5cdHdoaWxlIChhcnJheS5sZW5ndGggPCBib2F0TGVuZ3RoKSB7XG5cdFx0Y29vcmRpbmF0ZSA9IGluY3JlbWVudChjb29yZGluYXRlLCBzdGVwKTtcblx0XHRhcnJheS5wdXNoKGNvb3JkaW5hdGUpO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn07XG5cbmNvbnN0IGdldEFsbFBvc2l0aW9uU2V0cyA9IGN1cnJ5KChib2F0TGVuZ3RoLCBvcmlnaW4pID0+IHtcblx0bGV0IHNldHMgPSBbXTtcblx0c2V0cy5wdXNoKGdldFBvc2l0aW9uU2V0KFswLCAxXSwgb3JpZ2luLCBib2F0TGVuZ3RoKSk7XG5cdHNldHMucHVzaChnZXRQb3NpdGlvblNldChbMCwgLTFdLCBvcmlnaW4sIGJvYXRMZW5ndGgpKTtcblx0c2V0cy5wdXNoKGdldFBvc2l0aW9uU2V0KFsxLCAwXSwgb3JpZ2luLCBib2F0TGVuZ3RoKSk7XG5cdHNldHMucHVzaChnZXRQb3NpdGlvblNldChbLTEsIDBdLCBvcmlnaW4sIGJvYXRMZW5ndGgpKTtcblxuXHRyZXR1cm4gc2V0cztcbn0pO1xuXG5jb25zdCBmaWx0ZXJJbnZhbGlkU2V0cyA9IGZ1bmN0aW9uIChzZXRzLCBib2F0cykge1xuXHRsZXQgdmFsaWRTZXRzID0gc2V0cy5maWx0ZXIoKHNldCkgPT4gIXBvc2l0aW9uU2V0SW52YWxpZChzZXQsIGJvYXRzKSk7XG5cdHJldHVybiB2YWxpZFNldHMubGVuZ3RoID09IDAgPyB1bmRlZmluZWQgOiB2YWxpZFNldHM7XG59O1xuXG5jb25zdCBvdXRPZkJvdW5kcyA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHRyZXR1cm4gYXJyYXlbMF0gPCAwIHx8IGFycmF5WzFdIDwgMCB8fCBhcnJheVswXSA+IDkgfHwgYXJyYXlbMV0gPiA5O1xufTtcblxuY29uc3QgcG9zaXRpb25TZXRJbnZhbGlkID0gZnVuY3Rpb24gKHBvc2l0aW9ucywgYm9hdHMpIHtcblx0cmV0dXJuIHBvc2l0aW9ucy5zb21lKChwb3MpID0+IHtcblx0XHRyZXR1cm4gZ2V0Qm9hdE5hbWVJZkhpdChwb3MsIGJvYXRzKSB8fCBvdXRPZkJvdW5kcyhwb3MpIHx8IGZhbHNlO1xuXHR9KTtcbn07XG5cbmNvbnN0IHBpY2tSYW5kb21Qb3NpdGlvblNldCA9IGZ1bmN0aW9uIChwb3NpdGlvblNldHMpIHtcblx0bGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zaXRpb25TZXRzLmxlbmd0aCk7XG5cdHJldHVybiBwb3NpdGlvblNldHNbcmFuZG9tSW5kZXhdO1xufTtcblxuY29uc3QgcmFuZG9tQm9hdFBsYWNlbWVudCA9IGZ1bmN0aW9uIChib2F0cywgYm9hdExlbmd0aCkge1xuXHRsZXQgdmFsaWRTZXRzO1xuXHRkbyB7XG5cdFx0bGV0IG9yaWdpbiA9IGdldFJhbmRvbU9yaWdpbihib2F0cyk7XG5cdFx0bGV0IHBvc2l0aW9uU2V0cyA9IGdldEFsbFBvc2l0aW9uU2V0cyhib2F0TGVuZ3RoLCBvcmlnaW4pO1xuXHRcdHZhbGlkU2V0cyA9IGZpbHRlckludmFsaWRTZXRzKHBvc2l0aW9uU2V0cywgYm9hdHMpO1xuXHR9IHdoaWxlICh2YWxpZFNldHMgPT0gdW5kZWZpbmVkKTtcblxuXHRsZXQgY2hvc2VuUG9zaXRpb25TZXQgPSBwaWNrUmFuZG9tUG9zaXRpb25TZXQodmFsaWRTZXRzKTtcblx0cmV0dXJuIGNob3NlblBvc2l0aW9uU2V0O1xufTtcblxuY29uc3QgbWFrZVJhbmRvbVNob3QgPSBmdW5jdGlvbiAocHJldlNob3RzKSB7XG5cdGxldCBzaG90ID0gW107XG5cdGRvIHtcblx0XHRzaG90WzBdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdHNob3RbMV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdH0gd2hpbGUgKHNldENvbnRhaW5zTWF0Y2goc2hvdCwgcHJldlNob3RzKSk7XG5cblx0cmV0dXJuIHNob3Q7XG59O1xuXG5jb25zdCBib2F0U3VuayA9IGZ1bmN0aW9uIChib2F0TmFtZSwgYm9hdHMpIHtcblx0bGV0IGJvYXQgPSBib2F0cy5maW5kKChib2F0KSA9PiBib2F0Lm5hbWUgPT09IGJvYXROYW1lKTtcblx0cmV0dXJuIGJvYXQuaGl0cyA+PSBib2F0Lmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmNvbnN0IGdhbWVPdmVyID0gZnVuY3Rpb24gKGJvYXRzKSB7XG5cdHJldHVybiBib2F0cy5ldmVyeSgoYm9hdCkgPT4gYm9hdC5zdW5rID09PSB0cnVlKTtcbn07XG5cbmV4cG9ydCB7XG5cdGN1cnJ5LFxuXHRhcmVFcXVhbEFycmF5cyxcblx0c2V0Q29udGFpbnNNYXRjaCxcblx0aW5jcmVtZW50LFxuXHRpc0hpdCxcblx0Z2V0Qm9hdE5hbWVJZkhpdCxcblx0Z2V0UG9zaXRpb25TZXQsXG5cdGdldEFsbFBvc2l0aW9uU2V0cyxcblx0ZmlsdGVySW52YWxpZFNldHMsXG5cdGdldFJhbmRvbU9yaWdpbixcblx0b3V0T2ZCb3VuZHMsXG5cdHBvc2l0aW9uU2V0SW52YWxpZCxcblx0cGlja1JhbmRvbVBvc2l0aW9uU2V0LFxuXHRyYW5kb21Cb2F0UGxhY2VtZW50LFxuXHRtYWtlUmFuZG9tU2hvdCxcblx0Ym9hdFN1bmssXG5cdGdhbWVPdmVyLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBwbGF5ZXJGYWN0b3J5LCBjb21wdXRlckZhY3RvcnkgfSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQge1xuXHRtYWtlUmFuZG9tU2hvdCxcblx0Z2V0Qm9hdE5hbWVJZkhpdCxcblx0Ym9hdFN1bmssXG5cdGlzSGl0LFxuXHRvdXRPZkJvdW5kcyxcblx0c2V0Q29udGFpbnNNYXRjaCxcbn0gZnJvbSBcIi4vbG9naWMuanNcIjtcblxuY29uc3QgZ2FtZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgcGxheWVyID0gcGxheWVyRmFjdG9yeSgpO1xuXHRjb25zdCBjb21wdXRlciA9IGNvbXB1dGVyRmFjdG9yeSgpO1xuXHRsZXQgdHVybkNvdW50ID0gMDtcblxuXHRjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHBsYXllci5wbGFjZUFsbEJvYXRzUmFuZG9tbHkoKTtcblx0XHRjb21wdXRlci5wbGFjZUFsbEJvYXRzUmFuZG9tbHkoKTtcblx0fTtcblxuXHRjb25zdCBwbGF5ZXJUdXJuID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyO1xuXHRcdGxldCBlbmVteVBsYXllciA9IGNvbXB1dGVyO1xuXHRcdGxldCBwcmV2U2hvdHMgPSBjdXJyZW50UGxheWVyLmdldFByZXZTaG90cygpO1xuXG5cdFx0Ly8gXCJkZXRlcm1pbmUgc2hvdFwiIC0gd2lsbCBldmVudHVhbGx5IHVzZSBwbGF5ZXIgaW5wdXRcblx0XHRsZXQgc2hvdCA9IG1ha2VSYW5kb21TaG90KHByZXZTaG90cyk7XG5cblx0XHR1cGRhdGVEYXRhKGN1cnJlbnRQbGF5ZXIsIGVuZW15UGxheWVyLCBzaG90KTtcblx0fTtcblxuXHRjb25zdCBjb21wdXRlclR1cm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGN1cnJlbnRQbGF5ZXIgPSBjb21wdXRlcjtcblx0XHRsZXQgZW5lbXlQbGF5ZXIgPSBwbGF5ZXI7XG5cblx0XHRpZiAoY3VycmVudFBsYXllci5pc0ludmVzdGlnYXRpbmcoKSkge1xuXHRcdFx0aW52ZXN0aWdhdGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHByZXZTaG90cyA9IGN1cnJlbnRQbGF5ZXIuZ2V0UHJldlNob3RzKCk7XG5cdFx0XHRsZXQgc2hvdCA9IG1ha2VSYW5kb21TaG90KHByZXZTaG90cyk7XG5cdFx0XHR1cGRhdGVEYXRhKGN1cnJlbnRQbGF5ZXIsIGVuZW15UGxheWVyLCBzaG90KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW52ZXN0aWdhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGN1cnJlbnRQbGF5ZXIgPSBjb21wdXRlcjtcblx0XHRsZXQgZW5lbXlQbGF5ZXIgPSBwbGF5ZXI7XG5cblx0XHRpZiAoY3VycmVudFBsYXllci5nZXRJbnZJbmZvKCkuc3VzcGVuZGVkID09IHRydWUpIHtcblx0XHRcdGN1cnJlbnRQbGF5ZXIucmVzdW1lSW52ZXN0aWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGxldCBwcmV2U2hvdHMgPSBjdXJyZW50UGxheWVyLmdldFByZXZTaG90cygpO1xuXHRcdGxldCBzaG90ID0gY3VycmVudFBsYXllci5nZXROZXh0SW52ZXN0aWdhdGlvblNob3QoKTtcblx0XHR3aGlsZSAob3V0T2ZCb3VuZHMoc2hvdCkgfHwgc2V0Q29udGFpbnNNYXRjaChzaG90LCBwcmV2U2hvdHMpKSB7XG5cdFx0XHRjdXJyZW50UGxheWVyLnN3aXRjaEludmVzdGlnYXRpb25EaXJlY3Rpb24oKTtcblx0XHRcdHNob3QgPSBjdXJyZW50UGxheWVyLmdldE5leHRJbnZlc3RpZ2F0aW9uU2hvdCgpO1xuXHRcdH1cblx0XHR1cGRhdGVEYXRhKGN1cnJlbnRQbGF5ZXIsIGVuZW15UGxheWVyLCBzaG90KTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVEYXRhID0gZnVuY3Rpb24gKGN1cnJlbnRQbGF5ZXIsIGVuZW15UGxheWVyLCBzaG90KSB7XG5cdFx0bGV0IGVuZW15Qm9hdHMgPSBlbmVteVBsYXllci5nZXRBbGxCb2F0cygpO1xuXHRcdGxldCBoaXQgPSBpc0hpdChzaG90LCBlbmVteUJvYXRzKTtcblx0XHRsZXQgaGl0Qm9hdE5hbWU7XG5cdFx0bGV0IHNpbms7XG5cdFx0aWYgKGhpdCkge1xuXHRcdFx0Y3VycmVudFBsYXllci5hZGRQcmV2SGl0KHNob3QpO1xuXHRcdFx0aGl0Qm9hdE5hbWUgPSBnZXRCb2F0TmFtZUlmSGl0KHNob3QsIGVuZW15Qm9hdHMpO1xuXHRcdFx0ZW5lbXlQbGF5ZXIucmVnaXN0ZXJIaXQoaGl0Qm9hdE5hbWUpO1xuXHRcdFx0c2luayA9IGJvYXRTdW5rKGhpdEJvYXROYW1lLCBlbmVteUJvYXRzKTtcblx0XHRcdGlmIChzaW5rKSB7XG5cdFx0XHRcdGVuZW15UGxheWVyLnNpbmtCb2F0KGhpdEJvYXROYW1lKTtcblx0XHRcdH1cblx0XHRcdGlmIChjdXJyZW50UGxheWVyID09IGNvbXB1dGVyICYmICFjdXJyZW50UGxheWVyLmlzSW52ZXN0aWdhdGluZygpKSB7XG5cdFx0XHRcdGN1cnJlbnRQbGF5ZXIuc3RhcnROZXdJbnZlc3RpZ2F0aW9uKHNob3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRQbGF5ZXIuYWRkUHJldk1pc3Moc2hvdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGN1cnJlbnRQbGF5ZXIgPT0gY29tcHV0ZXIgJiYgY3VycmVudFBsYXllci5pc0ludmVzdGlnYXRpbmcoKSkge1xuXHRcdFx0dXBkYXRlSW52ZXN0aWdhdGlvbihjdXJyZW50UGxheWVyLCBzaG90LCBoaXQsIHNpbmssIGhpdEJvYXROYW1lKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlSW52ZXN0aWdhdGlvbiA9IGZ1bmN0aW9uIChcblx0XHRjdXJyZW50UGxheWVyLFxuXHRcdHNob3QsXG5cdFx0aGl0LFxuXHRcdHNpbmssXG5cdFx0aGl0Qm9hdE5hbWVcblx0KSB7XG5cdFx0aWYgKCFoaXQpIHtcblx0XHRcdGN1cnJlbnRQbGF5ZXIuc3dpdGNoSW52ZXN0aWdhdGlvbkRpcmVjdGlvbigpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChoaXQpIHtcblx0XHRcdGN1cnJlbnRQbGF5ZXIuYWRkSW52ZXN0aWdhdGlvbkhpdChzaG90KTtcblx0XHR9XG5cblx0XHRpZiAoc2luaykge1xuXHRcdFx0bGV0IHN1bmtCb2F0ID0gY3VycmVudFBsYXllci5nZXRCb2F0QnlOYW1lKGhpdEJvYXROYW1lKTtcblx0XHRcdGxldCBmdXR1cmVJbnYgPSBjdXJyZW50UGxheWVyLmRldGVybWluZUZ1dHVyZUludihzdW5rQm9hdC5sZW5ndGgpO1xuXHRcdFx0aWYgKGZ1dHVyZUludi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGN1cnJlbnRQbGF5ZXIuc3VzcGVuZEludmVzdGlnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQbGF5ZXIuZW5kSW52ZXN0aWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCB0YWtlVHVybiA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHVybkNvdW50ICUgMiA9PSAwKSB7XG5cdFx0XHRjb21wdXRlclR1cm4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGxheWVyVHVybigpO1xuXHRcdH1cblxuXHRcdHR1cm5Db3VudCsrO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0cGxheWVyLFxuXHRcdGNvbXB1dGVyLFxuXHRcdGluaXQsXG5cdFx0dGFrZVR1cm4sXG5cdFx0cGxheWVyVHVybixcblx0XHRjb21wdXRlclR1cm4sXG5cdFx0aW52ZXN0aWdhdGUsXG5cdFx0dXBkYXRlRGF0YSxcblx0XHR1cGRhdGVJbnZlc3RpZ2F0aW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHsgZ2FtZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9