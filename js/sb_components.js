$(document).ready(function(){

  /*
* Tooltips
*/
  var bootstrapCss = 'bootstrap.min.css';
  
  $('[data-toggle="tooltip"]').tooltip();

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
    
      
    
  });//tooltips positions


  // card



  let bsCardSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card');
  let bsCardBodySelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-body');
  let bsCardHeaderSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header');
  let bsCardHeaderSelector1 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header:first-child');

  let bsCardTitleSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-title');

  let bsCardSubtitleSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-subtitle');
  let bsCardTextSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-text:last-child');
  let bsCardLinkSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-link + .card-link');
  let bsCardLinkHoverSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-link:hover');
  let bsCardFooterSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-footer');
  let bsCardFooterSelector1 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-footer:last-child');
  let bsCardListGroupSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card > .list-group');
  let bsCardListGroupSelector1 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card > .list-group:last-child');
  let bsCardListGroupSelector2 = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card > .list-group:first-child');
  let bsCardHeaderTabsSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header-tabs');
  let bsCardHeaderPillsSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-header-pills');
  let bsCardImgSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img');
  let bsCardImgTopSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img-top');
  let bsCardImgBottomSelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img-bottom');
  let bsCardImgOverlaySelector = cssRulesMajadc.getCssStyleRules(bootstrapCss, '.card-img-overlay');


  searchCssRuleset.cssRulesetSearch(
    bsCardSelector,
    bsCardBodySelector,
    bsCardHeaderSelector,
    bsCardHeaderSelector1,
    bsCardTitleSelector,
    bsCardSubtitleSelector,
    bsCardTextSelector,
    bsCardLinkSelector,
    bsCardLinkHoverSelector,
    bsCardFooterSelector,
    bsCardFooterSelector1,
    bsCardListGroupSelector,
    bsCardListGroupSelector1,
    bsCardListGroupSelector2,
    bsCardHeaderTabsSelector,
    bsCardHeaderPillsSelector,
    bsCardImgSelector,
    bsCardImgTopSelector,
    bsCardImgBottomSelector,
    bsCardImgOverlaySelector
  );

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




  



 
  
  
});//document ready