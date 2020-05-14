$(document).ready(function(){

  setDataGrid ();
  
  $(window).resize(function(){
    setDataGrid ();
  });

  
  function setDataGrid  () {
    if ( $('#grid-viewport').length !== 0 ) $('#grid-viewport').html(getViewport());

    $('#majadc-grid-example-1>div').each(function(){
      $(this).find('.majadc-js-output').html(getStyle($(this), 'flex-shrink', 'flex-grow', 'flex-basis', 'width', 'max-width'));
    });
    $('#majadc-grid-example-2 .col-sm').each(function(){
      $(this).find('.majadc-js-output').html(getStyle($(this), 'flex-shrink', 'flex-grow', 'flex-basis', 'width', 'max-width'));
    });
    $('#majadc-grid-example-3>div').each(function(){
      $(this).find('.majadc-js-output').html(`class="${getColClass($($(this)))}"`);
    });

    $('#majadc-grid-example-4>div').each(function(){
      $(this).find('.majadc-js-output').html(`class="${getColClass($($(this)))}"`);
    });
    
     
  }//setDataGrid 

 

  //get classes from div col - for examples where are present all breakpoints classes
  function getColClass (col) {
    let step = 100/12;
    let viewportName = getViewport();
    let flexBasis = (col.css('flex-basis') !== 'auto' ) ? Math.trunc(col.css('flex-basis').match(/\d+/)) : 'auto';
    if ( flexBasis === 0) {
      return `col-${viewportName}`;
    } else if ( flexBasis === 'auto' ) {
     return `Present classes: ${col.attr('class')}. <br/> flex-basis: auto;<br/>width: 100%;`;
    } else {
      for ( let i = 1; i <= 12; i ++ ) {
        if ( flexBasis === Math.trunc(step*i) ) return `col-${viewportName}-${i}`;
      }
    }
    

  }

  

  
});
