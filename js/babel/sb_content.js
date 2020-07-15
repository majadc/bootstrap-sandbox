"use strict";

$(document).ready(function () {
  var bootstrapCssFile = 'bootstrap.min.css';
  var codeOutput = cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'code');
  var indexEnd = codeOutput.indexOf('}');
  var codeCssRules = codeOutput.substring(0, indexEnd + 1);
  $('#code-output-js').html(codeCssRules);
  $('#inline-code').find('.output-js').html(codeOutput.substring(indexEnd + 1));
  $('#block-code').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'pre').substring(indexEnd + 1)).append(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'pre code'));
  $('#variables').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'var'));
  $('#user-input').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'kbd').substring(indexEnd + 1));

  if ($('#bsReboot').length > 0) {
    var _bootstrapCssFile = 'bootstrap.min.css';
    $('#universalSelector').find('.output-js').html(cssRulesMajadc.getCssStyleRules(_bootstrapCssFile, '*'));
    $('#html').find('.output-js').html(cssRulesMajadc.getCssStyleRules(_bootstrapCssFile, 'html'));
    $('#body').find('.output-js').html(cssRulesMajadc.getCssStyleRules(_bootstrapCssFile, 'body'));
  }
}); //document ready