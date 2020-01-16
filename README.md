# Lazyload plugin

Really small lazyload plugin for vue (<6kB).

If you have a idea for a new feature or option, add it to the Issues on my github repo. :)

## How to install:

1. Install the package:

   ```bash
   #install the npm package

   npm i vt-lazyload
   ```

2. Import/use plgun:

   ```javascript
   import Vue from "vue";
   import lazyLoad from "vt-lazyload";

   Vue.use(lazyLoad);
   ```

---

## How to use:

Add the v-lazyLoad directive with the src of the image as attribute value.

**Do not add the src Attribute or else that lazyload wont work.**

With url:

```javascript
<img v-lazyLoad="'https://via.placeholder.com/350x150'" />
```

With prob/variable:

```javascript
<img v-lazyLoad="image.src" />
```

## Options:

### How to add a option:

> Add a object to the Vue.use(lazyload)

```javascript
Vue.use(lazyLoad, { margin: "0px 0px 100px 0px" });
```

### How to use the cssAnimate option:

1. Find the animation you want on [animate.css](https://daneden.github.io/animate.css/)

2. Add the animation in the animation array and add some options if you want. (The order of the array doesnt matter)

```javascript
<img v-lazyLoad="{ url: backgroundImage, animation: ['zoomInLeft', 'slower'] }" />
```

### Options:

| Option     | Type    | Default value       | Description                                                                                                         |
| ---------- | ------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| margin     | string  | '0px 0px 100px 0px' | Sets the distance between the viewport and the image before it gets loaded                                          |
| fadeIn     | boolean | false               | If you want the images to fade in when scrolling by, set the value to a css transition e.g. 'opacity 0.3s ease'     |
| directive  | string  | 'lazyLoad'          | Use this option to change the directive name, if you change it to 'lazy' the directive name becomes v-lazy          |
| cssAnimate | boolean | false               | Use Animate.css on your lazyload image                                                                              |
| errorImg   | string  | false               | Sets a placeholder image when image couldn't load, to use this function passtrough the url of the placeholder image |
