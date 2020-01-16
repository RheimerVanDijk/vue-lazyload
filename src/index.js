function urlCheck(url, errorImage, el) {
  // checks if url exists and puts url in src
  if (errorImage) {
    fetch(url).then(response => {
      if (response.status == 200) {
        el.src = url;
      } else if (response.status == 404) {
        el.src = errorImage;
      }
    });
  } else {
    el.src = url;
  }
}

export default {
  install(Vue, options) {
    let margin = "0px 0px 100px 0px";
    let fadeIn = false;
    let directive = "lazyLoad";
    let errorLoadImage = false;
    if (options) {
      margin = options.margin ? options.margin : "0px 0px 100px 0px";
      fadeIn = options.fadeIn ? options.fadeIn : false;
      directive = options.directive ? options.directive : "lazyLoad";
      errorLoadImage = options.errorImg ? options.errorImg : false;
      if (options.cssAnimate) {
        const animateCss = document.createElement("link");
        animateCss.rel = "text/css";
        animateCss.href =
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
        document.head.appendChild(animateCss);

        fadeIn = false;
      }
    }
    Vue.directive(directive, {
      bind(el, binding) {
        if (fadeIn) {
          el.style.opacity = "0";
          el.style.transition = fadeIn;
        }
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                if (binding.value.animation) {
                  urlCheck(binding.value.url, errorLoadImage, el);
                  if (options.cssAnimate) {
                    el.classList.add("animated", ...binding.value.animation);
                  }
                } else {
                  urlCheck(binding.value, errorLoadImage, el);
                }
                fadeIn ? (el.style.opacity = "1") : null;
                observer.unobserve(entry.target);
              }
            });
          },
          { rootMargin: margin }
        );
        observer.observe(el);
      }
    });
  }
};
