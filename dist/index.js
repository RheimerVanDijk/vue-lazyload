/*!
 * vt-lazyload v1.0.13
 * (c) Rheimer van Dijk
 * Released under the MIT License.
 */
'use strict';

var index = {
  install: function install(Vue, options) {
    var margin = '0px 0px 100px 0px';
    var fadeIn = false;
    var directive = 'lazyLoad';

    if (options) {
      margin = options.margin ? options.margin : '0px 0px 100px 0px';
      fadeIn = options.fadeIn ? options.fadeIn : false;
      directive = options.directive ? options.directive : 'lazyLoad';
    }

    Vue.directive(directive, function (el, binding) {
      if (fadeIn) {
        el.style.opacity = '0';
        el.style.transition = "opacity ".concat(fadeIn, " ease");
      }

      var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            el.src = binding.value;
            fadeIn ? el.style.opacity = '1' : null;
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: margin
      });
      observer.observe(el);
    });
  }
};

module.exports = index;
