"use strict";

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  setDataGrid();
  $('#grid-container-output-js').html(cssRulesMajadc.getCssStyleRules('bootstrap.min.css', '.container'));
  $('#grid-container-fluid-output-js').html(cssRulesMajadc.getCssStyleRules('bootstrap.min.css', '.container-fluid'));
  $('#grid-row-output-js').html(cssRulesMajadc.getCssStyleRules('bootstrap.min.css', '.row'));
  $('#grid-col-output-js').html(cssRulesMajadc.getCssStyleRules('bootstrap.min.css', '.col'));
  $(window).resize(function () {
    setDataGrid();
  });

  function setDataGrid() {
    if ($('#grid-viewport').length !== 0) $('#grid-viewport').html(getViewport());
    $('#majadc-grid-example-1>div').each(function () {
      $(this).find('.majadc-js-output').html(getStyle($(this), 'flex-shrink', 'flex-grow', 'flex-basis', 'width', 'max-width'));
    });
    $('#majadc-grid-example-2 .col-sm').each(function () {
      $(this).find('.majadc-js-output').html(getStyle($(this), 'flex-shrink', 'flex-grow', 'flex-basis', 'width', 'max-width'));
    });
    $('#majadc-grid-example-3>div').each(function () {
      $(this).find('.majadc-js-output').html(getColClass($($(this))));
    });
    $('#majadc-grid-example-4>div').each(function () {
      $(this).find('.majadc-js-output').html(getColClass($($(this))));
    });
  } //setDataGrid 
  //get classes from div col - for examples where are present all breakpoints classes


  function getColClass(col) {
    var step = 100 / 12;
    var viewportName = getViewport();
    var flexBasis = col.css('flex-basis') !== 'auto' ? Math.trunc(col.css('flex-basis').match(/\d+/)) : 'auto';

    if (flexBasis === 0) {
      return "class= \"col-".concat(viewportName, "\"");
    } else if (flexBasis === 'auto') {
      return "Present classes: ".concat(col.attr('class'), ". <br/>width: 100%;<br/>flext-basis is not set. The initial value of a flex-basis: auto;");
    } else {
      for (var i = 1; i <= 12; i++) {
        if (flexBasis === Math.trunc(step * i)) return "col-".concat(viewportName, "-").concat(i);
      }
    }
  }
});