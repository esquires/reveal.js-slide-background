# reveal.js-slide-background

Setting width and height in the reveal.js config can preserve the aspect ratio
of a presentation (see [here](https://revealjs.com/presentation-size/)).  This
plugin allows you to set a background image that only shows up within the
specified region.

## installation

```bash
git clone https://github.com/esquires/reveal.js-slide-background
cd reveal.js-slide-background
npm install
npm run build  # outputs dist/slide-background.js from js/plugin.js
```

Then in `index.html`,

```html

<script src="plugins/reveal.js-slide-background/dist/slide-background.js"></script>
<script>
  Reveal.initialize({
    width: 1920,
    height: 1080,

    slideBackground: {
      img: 'path/to/default_img.jpg',
    },

    plugins: [RevealSlideBackground]
  });
</script>
```
