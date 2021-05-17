const Plugin = () => {
	return {
		id: 'slideBackground',
		init: reveal => {
      let options = reveal.getConfig().slideBackground || {};

      reveal.on('slidechanged', event => {
        if (!reveal.isPrintingPDF()) {
          let img = event.currentSlide.getAttribute("slides-background-image") || options.img;
          document.querySelector('.reveal .slides').style.backgroundImage = 'url(' + img + ')';
        }
      });

      reveal.on('ready', event => {
        if (reveal.isPrintingPDF()) {
          // copy slides-background-image to data-background-image to process
          // bacground images normally in the case of pdfs
          let slides = reveal.getSlides();

          for (var i = 0; i < slides.length; i++) {
            let img = slides[i].getAttribute("slides-background-image") || options.img;
            slides[i].setAttribute("data-background-image", img);
            slides[i].slideBackgroundContentElement.setAttribute('data-loaded', 'false');
          }
          reveal.sync();
        } else {
          let img = event.currentSlide.getAttribute("slides-background-image") || options.img;
          document.querySelector('.reveal .slides').style.backgroundImage = 'url(' + img + ')';
        }
      });

      reveal.on('pdf-ready', event => {
        // in case this is a pdf update those slides
      });
		},
	}
};

export default Plugin;
