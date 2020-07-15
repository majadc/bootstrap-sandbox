"use strict";

$('body').scrollspy({
  target: '#nav-main'
}); // // Add smooth scrolling

$('#nav-main a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    var hash = this.hash;
    var topHeading = $(hash).offset().top; //- $(hash).height() - 20;

    $('html, body').animate({
      scrollTop: topHeading
    }, 900, function () {
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    });
  }
});

function getViewport() {
  var breakpoints = [576, 768, 992, 1200];

  if ($(window).width() < breakpoints[0]) {
    return 'xs';
  } else if ($(window).width() > breakpoints[3]) {
    return 'xl';
  } else {
    for (var i = 0; i < breakpoints.length; i++) {
      if ($(window).width() > breakpoints[i] && $(window).width() < breakpoints[i + 1]) {
        if (i == 0) return 'sm';
        if (i == 1) return 'md';
        if (i == 2) return 'lg';
      }
    }
  }
} //get style from style computed


function getStyle(element) {
  for (var _len = arguments.length, styleProperty = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styleProperty[_key - 1] = arguments[_key];
  }

  var result = '';

  for (var i = 1; i < arguments.length; i++) {
    result = result + "".concat(arguments[i], " : ").concat(element.css(arguments[i]), "; </br>");
  }

  return result;
}