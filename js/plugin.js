const Plugin = () => {
  function updateBackground(slide, default_img) {
    let img = slide.getAttribute("slides-background-image") || default_img;
    slide.style.backgroundImage = 'url(' + img + ')';
  }

	return {
		id: 'slideBackground',
		init: reveal => {
      let options = reveal.getConfig().slideBackground || {};

      reveal.on('slidechanged', event => {
        // updateBackground(event.currentSlide, options.img);
        let img = event.currentSlide.getAttribute("slides-background-image") || options.img;
        document.querySelector('.reveal .slides').style.backgroundImage = 'url(' + img + ')';
      });

      reveal.on('ready', event => {
        // updateBackground(event.currentSlide, options.img);
        let img = event.currentSlide.getAttribute("slides-background-image") || options.img;
        document.querySelector('.reveal .slides').style.backgroundImage = 'url(' + img + ')';

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
        }
      });

      reveal.on('pdf-ready', event => {
        // in case this is a pdf update those slides
      });
		},
	}
};

export default Plugin;
