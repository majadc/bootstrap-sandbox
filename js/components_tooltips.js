$(document).ready(function(){

  /*
* Tooltips
*/
  var bootstrapCss = 'bootstrap.min.css';

  $('#tooltips-classes').find('button').click(function(){
    $('#tooltips-output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCss, $(this).text()));
  });
  $('#tooltips-output-js').html(cssRulesMajadc.getCssStyleRules('bootstrap.min.css', '.tooltip'));

  $('#tooltips-positions').find('button').click(function(){
    let tooltip = cssRulesMajadc.getCssStyleRules(bootstrapCss, `.bs-tooltip-${$(this).attr('data-placement')}`);
    let tooltipArrow = cssRulesMajadc.getCssStyleRules(bootstrapCss, `.bs-tooltip-${$(this).attr('data-placement')} .arrow`);
    let tooltipArrowBefore = cssRulesMajadc.getCssStyleRules(bootstrapCss, `.bs-tooltip-${$(this).attr('data-placement')} .arrow::before`);
    
    $('#tooltips-positions-output-js').html(`${tooltip}${tooltipArrow}${tooltipArrowBefore}`);

    let btnClass = $(this).attr('class');
    
    let btnClassesSuffix = ['primary', 'secondary', 'success', 'danger'];
    for ( let suffix of btnClassesSuffix ) {
      if ( btnClass.indexOf(`btn-outline-${suffix}`) !== -1 ) {
        
        for ( let s of btnClassesSuffix ) {
           $(this).siblings('button').each(function(){
             if ( $(this).attr('class').indexOf(`btn-${s}`) !== -1 ) {
              $(this).removeClass(`btn-${s}`);
              $(this).addClass(`btn-outline-${s}`);
             }
           });
          }

          $(this).removeClass(`btn-outline-${suffix}`);
          $(this).addClass(`btn-${suffix}`);
        
        return true;
       }
      }
    
      $('[data-toggle="tooltip"]').tooltip();
    
  });//tooltips positons


  
});//document ready