$(document).ready(function(){

 
  let bootstrapCssFile = 'bootstrap.min.css';
  let codeOutput = cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'code');
  
  let indexEnd = codeOutput.indexOf('}');
  let codeCssRules = codeOutput.substring(0, indexEnd+1);
  $('#code-output-js').html(codeCssRules);

  $('#inline-code').find('.output-js').html(codeOutput.substring(indexEnd+1));

  $('#block-code').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'pre').substring(indexEnd+1)).append(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'pre code'));


  $('#variables').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'var'));

  $('#user-input').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, 'kbd').substring(indexEnd+1));
  


});//document ready