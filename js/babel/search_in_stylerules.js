"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var searchCssRuleset = {};
(function () {
  var cssRuleset = [];
  var formSearchStylerulesInfo = document.getElementById("formSearchStylerulesInfo");
  var formSearchStylerulesInput = document.getElementById("formSearchStylerulesInput");
  var formSearchStylerulesOutputJs = document.getElementById("formSearchStylerulesOutputJs");

  this.cssRulesetSearch = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      var arg = _args[_i];
      var rule = arg.split('}');
      cssRuleset = cssRuleset.concat(rule);
    }

    cssRuleset = cssRuleset.filter(function (rule) {
      return rule !== "\n";
    });

    for (var i = 0; i < cssRuleset.length; i++) {
      cssRuleset[i] = "".concat(cssRuleset[i], "}\n");
    }
  };

  document.getElementById("formSearchStylerulesSubmit").addEventListener("click", function (e) {
    searchRuleset();
    e.preventDefault();
  });

  function searchRuleset() {
    resetFormSearchStylerules();
    var formSearchStylerulesInputValue = formSearchStylerulesInput.value;

    if (validationFormSearchStylerulesRequired(formSearchStylerulesInputValue)) {
      var bsRules = getCssRuleset(formSearchStylerulesInputValue);

      if (validationFormSearchStylerulesNoResult(bsRules)) {
        formSearchStylerulesOutputJs.innerHTML = colorCssRuleset(formSearchStylerulesInputValue);
      }
    }
  }

  function getCssRuleset(string) {
    var result = [];

    var _iterator = _createForOfIteratorHelper(cssRuleset),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rulset = _step.value;

        if (rulset.indexOf(string) > 0) {
          result.push(rulset);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result.join(' ');
  }

  function colorCssRuleset(string) {
    var arrayRulesSetResult = getCssRuleset(string).split('\n');
    var i = 0;

    var _iterator2 = _createForOfIteratorHelper(arrayRulesSetResult),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;

        if (item.indexOf(string) > 0) {
          arrayRulesSetResult[i] = "<span class=\"mdc-stylerules-property\">".concat(item, "</span>");
        }

        i++;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return arrayRulesSetResult.join('\n');
  }

  function resetFormSearchStylerules() {
    formSearchStylerulesInput.classList.remove("invalid");
    formSearchStylerulesOutputJs.innerHTML = "";
    formSearchStylerulesInfo.innerHTML = "";
    formSearchStylerulesInfo.classList.remove("show");
    formSearchStylerulesInfo.setAttribute("aria-hidden", "true");
  }

  function validationFormSearchStylerulesRequired(string) {
    if (string === '') {
      formSearchStylerulesInput.classList.add("invalid");
      formSearchStylerulesInfo.innerHTML = "Fill the field.";
      formSearchStylerulesInfo.classList.add("show");
      formSearchStylerulesInfo.setAttribute("aria-hidden", "false");
      return false;
    } else return true;
  }

  function validationFormSearchStylerulesNoResult(result) {
    if (result === '') {
      formSearchStylerulesInfo.innerHTML = "Nothing found.";
      formSearchStylerulesInfo.classList.add("show");
      formSearchStylerulesInfo.setAttribute("aria-hidden", "false");
      return false;
    } else return true;
  }
}).apply(searchCssRuleset);