
  $('body').scrollspy({ target: '#nav-main'});
  // // Add smooth scrolling
  $('#nav-main a').on('click', function (e) {
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


  function getViewport () {
    let breakpoints = [ 576, 768, 992, 1200];
    if ( $(window).width() < breakpoints[0] ) {
      return 'xs'
    } else if ( $(window).width() > breakpoints[3] ) 
    {
      return 'xl';
    } else {
      for ( let i = 0; i < breakpoints.length; i++ ) {
        if ( ($(window).width() > breakpoints[i]) && $(window).width() < breakpoints[i+1] ) {
          if ( i == 0 ) return 'sm';
          if ( i == 1 ) return 'md';
          if ( i == 2 ) return 'lg';
        } 
      }
    }
  }

//get style from style computed
function getStyle ( element, ...styleProperty) {
  let result = '';
  for (let i = 1; i < arguments.length; i++) {
    result = result +  `${arguments[i]} : ${element.css(arguments[i])}; </br>` ;
  }
  return result;
}




