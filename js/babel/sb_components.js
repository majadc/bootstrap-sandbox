"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(document).ready(function () {
  /*
  * Tooltips
  */
  var bootstrapCss = 'bootstrap.min.css';
  $('[data-toggle="tooltip"]').tooltip();
  $('#tooltips-classes').find('button').click(function () {
    $('#tooltips-output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCss, $(this).text()));
  });
  $('#tooltips-output-js').html(cssRulesMajadc.getCssStyleRules('bootstrap.min.css', '.tooltip'));
  $('#tooltips-positions').find('button').click(function () {
    var _this = this;

    var tooltip = cssRulesMajadc.getCssStyleRules(bootstrapCss, ".bs-tooltip-".concat($(this).attr('data-placement')));
    var tooltipArrow = cssRulesMajadc.getCssStyleRules(bootstrapCss, ".bs-tooltip-".concat($(this).attr('data-placement'), " .arrow"));
    var tooltipArrowBefore = cssRulesMajadc.getCssStyleRules(bootstrapCss, ".bs-tooltip-".concat($(this).attr('data-placement'), " .arrow::before"));
    $('#tooltips-positions-output-js').html("".concat(tooltip).concat(tooltipArrow).concat(tooltipArrowBefore));
    var btnClass = $(this).attr('class');
    var btnClassesSuffix = ['primary', 'secondary', 'success', 'danger'];

    for (var _i = 0, _btnClassesSuffix = btnClassesSuffix; _i < _btnClassesSuffix.length; _i++) {
      var suffix = _btnClassesSuffix[_i];

      if (btnClass.indexOf("btn-outline-".concat(suffix)) !== -1) {
        var _iterator = _createForOfIteratorHelper(btnClassesSuffix),
            _step;

        try {
          var _loop = function _loop() {
            var s = _step.value;
            $(_this).siblings('button').each(function () {
              if ($(this).attr('class').indexOf("btn-".concat(s)) !== -1) {
                $(this).removeClass("btn-".concat(s));
                $(this).addClass("btn-outline-".concat(s));
              }
            });
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        $(this).removeClass("btn-outline-".concat(suffix));
        $(this).addClass("btn-".concat(suffix));
        return true;
      }
    }
  }); //tooltips positions
  // card

  var bsCardSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card');
  var bsCardBodySelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-body');
  var bsCardHeaderSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header');
  var bsCardHeaderSelector1 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header:first-child');
  var bsCardTitleSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-title');
  var bsCardSubtitleSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-subtitle');
  var bsCardTextSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-text:last-child');
  var bsCardLinkSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-link + .card-link');
  var bsCardLinkHoverSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-link:hover');
  var bsCardFooterSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-footer');
  var bsCardFooterSelector1 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-footer:last-child');
  var bsCardListGroupSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card > .list-group');
  var bsCardListGroupSelector1 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card > .list-group:last-child');
  var bsCardListGroupSelector2 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card > .list-group:first-child');
  var bsCardHeaderTabsSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header-tabs');
  var bsCardHeaderPillsSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header-pills');
  var bsCardImgSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img');
  var bsCardImgTopSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img-top');
  var bsCardImgBottomSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img-bottom');
  var bsCardImgOverlaySelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img-overlay');
  searchCssRuleset.cssRulesetSearch(bsCardSelector, bsCardBodySelector, bsCardHeaderSelector, bsCardHeaderSelector1, bsCardTitleSelector, bsCardSubtitleSelector, bsCardTextSelector, bsCardLinkSelector, bsCardLinkHoverSelector, bsCardFooterSelector, bsCardFooterSelector1, bsCardListGroupSelector, bsCardListGroupSelector1, bsCardListGroupSelector2, bsCardHeaderTabsSelector, bsCardHeaderPillsSelector, bsCardImgSelector, bsCardImgTopSelector, bsCardImgBottomSelector, bsCardImgOverlaySelector);
  $('#bs-card').find(".output-js").html(bsCardSelector);
  $('#bs-card-body').find(".output-js").html(bsCardBodySelector);
  $('#bs-card-title').find(".output-js").html(bsCardTitleSelector);
  $('#bs-card-subtitle').find(".output-js").html(bsCardSubtitleSelector);
  $('#bs-card-text').find(".output-js").html(bsCardSubtitleSelector);
  $('#bs-card-link').find(".output-js").html(bsCardLinkSelector);
  $('#bs-card-link').find(".output-js-1").html(bsCardLinkHoverSelector);
  $('#bs-card-header').find(".output-js").html(bsCardHeaderSelector);
  $('#bs-card-header').find(".output-js-1").html(bsCardHeaderSelector1);
  $('#bs-card-footer').find(".output-js").html(bsCardFooterSelector);
  $('#bs-card-footer').find(".output-js-1").html(bsCardFooterSelector1);
  $('#bs-card-list-group').find(".output-js").html(bsCardListGroupSelector);
  $('#bs-card-list-group').find(".output-js-1").html(bsCardListGroupSelector1);
  $('#bs-card-list-group').find(".output-js-2").html(bsCardListGroupSelector2);
  $('#bs-card-header-tabs').find(".output-js").html(bsCardHeaderTabsSelector);
  $('#bs-card-header-pills').find(".output-js").html(bsCardHeaderTabsSelector);
  $('#bs-card-img').find(".output-js").html(bsCardImgSelector);
  $('#bs-card-img-top').find(".output-js").html(bsCardImgTopSelector);
  $('#bs-card-img-bottom').find(".output-js").html(bsCardImgBottomSelector);
  $('#bs-card-img-overlay').find(".output-js").html(bsCardImgOverlaySelector);
}); //document ready