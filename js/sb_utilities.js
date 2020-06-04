$(document).ready(function(){

  let bootstrapCssFile = 'bootstrap.min.css';

  /*
* Utilities
*/
// text-truncate 
  $('#text-truncate').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, '.text-truncate'));

  // text-wrapping
  $('#text-wrapping-overflow').find('.output-js').html(cssRulesMajadc.getCssStyleRules(bootstrapCssFile, '.text-nowrap'));

  /**
   * Spacing
   */
  
  let spacingClasses =  $('#utilities-spacing>ul').children('.item-us');

  // function sets data-selected on elements
  $.fn.setSelectedData = function() {
    $(this).each(function() {
      $(this).data('data-selected', false);
    })
  }
  spacingClasses.setSelectedData();

  //function sets data-style-rules on elements
  $.fn.setStyleRulesToSpacingClasses = function(){
   $(this).each(function() {
    let id = $(this).attr('id');
    $(this).data('data-style-rules', cssRulesMajadc.getCssStyleRules(bootstrapCssFile,  `.${id.charAt(0) + id.substring(2)}`));
   });
  }
  spacingClasses.setStyleRulesToSpacingClasses();

  //function shows style rules on page
  $.fn.showStyleRulesForSpacingClasses = function () {
    $(this).each(function() {
      $(this).find('.output-js').html($(this).data('data-style-rules')); 
    })
  }
  spacingClasses.showStyleRulesForSpacingClasses();
  
// functions sets data-selected on true according user choice
  $.fn.selectSpacingClasses = function (userChoice) {
   $(this).each(function(){
    let id = $(this).attr('id');
    $(this).data('data-selected', false);

    switch ( userChoice ) {
      case "us-top":
        if ( id.charAt(2) === 't') {
          $(this).data('data-selected', true);
        }
        break;

      case "us-right":
        if ( id.charAt(2) === 'r') {
          $(this).data('data-selected', true);
        }
        break;
      
      case "us-bottom":
      if ( id.charAt(2) === 'b') {
        $(this).data('data-selected', true);
      }
      break;

      case "us-left":
        if ( id.charAt(2) === 'l') {
          $(this).data('data-selected', true);
        }
        break;

      case "us-horizontal":
        if ( id.charAt(2) === 'x') {
          $(this).data('data-selected', true);
        }
        break;

      case "us-vertical":
        if ( id.charAt(2) === 'y') {
          $(this).data('data-selected', true);
        }
        break;
      
      case "us-margin":
        if ( id.charAt(0) === 'm') {
          $(this).data('data-selected', true);
        }
        break;
      
      case "us-padding":
      if ( id.charAt(0) === 'p') {
        $(this).data('data-selected', true);
      }
      break;

      case "us-spacing-0":
        if ( id.charAt(4) === '0') {
          $(this).data('data-selected', true);
        }
        break;

      case "us-spacing-1":
        if ( id.charAt(4) === '1') {
          $(this).data('data-selected', true);
        }
        break;
      
      case "us-spacing-2":
        if ( id.charAt(4) === '2') {
          $(this).data('data-selected', true);
        }
        break;

      case "us-spacing-3":
        if ( id.charAt(4) === '3') {
          $(this).data('data-selected', true);
        }
        break;

      case "us-spacing-4":
        if ( id.charAt(4) === '4') {
          $(this).data('data-selected', true);
        }
        break;

      case "us-spacing-5":
        if ( id.charAt(4) === '5') {
          $(this).data('data-selected', true);
        }
        break;

    }

   });
  }



  $('#utilities-spacing button.us-selected-classes').click(function() {
    
    $('.us-title').hide();
    spacingClasses.selectSpacingClasses($(this).attr('id'));
    showSelectedSpacingClasses();
  });
  $('.utilities-spacing-reset').click(function(e){
    spacingClasses.each(function() {
     // $(this).data('data-selected', false); 
      $(this).show();
    });
    
    $('.us-title').show();

    //animation for scrollspy
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      let topHeading = $(hash).offset().top; //- $(hash).height() - 20;
      
      $('html, body').animate({
        scrollTop: topHeading
      }, 900, function () {
        if ( history.pushState ) {
          history.pushState(null, null, hash);
        } else {
          location.hash = hash;
        }
      
      });
    }
  });



  function showSelectedSpacingClasses () {
    spacingClasses.each(function() {
      $(this).hide();
      if ( $(this).data('data-selected') === true ) {
        $(this).show();
      }
      });
    
    
  }

  function allTopsSpacing () {
    spacingClasses.each(function(){
      
      
    });
  }


});