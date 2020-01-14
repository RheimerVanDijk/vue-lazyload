# Lazyload plugin
Really small lazyload plugin for vue (<4kB).

If you have a idea for a new feature or option, add it to the Issues on my github repo. :)
## How to install:
1. Install the package:
    ``` bash
    #install the npm package

    npm i vt-lazyload-plugin
    ```
2.  Import/use plgun:
    ``` javascript
    import Vue from 'vue'
    import lazyLoad from 'vt-lazyload-plugin'

    Vue.use(lazyLoad)
    ```

---
## How to use:
Add the v-lazyLoad directive with the src of the image as attribute value.

**Do not add the src Attribute or else that lazyload wont work.**

with link:
```javascript
 <img v-lazyLoad="https://via.placeholder.com/350x150" />
```

with prob/variable:
```javascript
 <img v-lazyLoad="image.src" />
```

## Options:

### how to add a option:
>add a object to the Vue.use(lazyload) 
```javascript
Vue.use(lazyLoad, {margin: '0px 0px 100px 0px'})
```

### Options:
|Option|Type|Default value|Description|
| ---- | -- | ----------- | --------- |
|margin|string|'0px 0px 100px 0px'|Sets the distance between the viewport and the image before it gets loaded|
|fadeIn|string|'false'|If you want the images to fade in when scrolling by, set the value to any amount of seconds you want e.g. '1s'|