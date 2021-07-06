(function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
      typeof define === 'function' && define.amd ? define(factory) :
      (global = global || self, global.RevealSlideBackground = factory());
}(this, (function () { 'use strict';

      var Plugin = function Plugin() {
        return {
          id: 'slideBackground',
          init: function init(reveal) {
            var options = reveal.getConfig().slideBackground || {};
            reveal.on('slidechanged', function (event) {
              if (!reveal.isPrintingPDF()) {
                var img = event.currentSlide.getAttribute("slides-background-image") || options.img;
                document.querySelector('.reveal .slides').style.backgroundImage = 'url(' + img + ')';
              }
            });
            reveal.on('ready', function (event) {
              if (reveal.isPrintingPDF()) {
                // copy slides-background-image to data-background-image to process
                // bacground images normally in the case of pdfs
                var slides = reveal.getSlides();

                for (var i = 0; i < slides.length; i++) {
                  var img = slides[i].getAttribute("slides-background-image") || options.img;
                  slides[i].setAttribute("data-background-image", img);
                  slides[i].slideBackgroundContentElement.setAttribute('data-loaded', 'false');
                }

                reveal.sync();
              } else {
                var _img = event.currentSlide.getAttribute("slides-background-image") || options.img;

                document.querySelector('.reveal .slides').style.backgroundImage = 'url(' + _img + ')';
              }
            });
            reveal.on('pdf-ready', function (event) {// in case this is a pdf update those slides
            });
          }
        };
      };

      return Plugin;

})));
