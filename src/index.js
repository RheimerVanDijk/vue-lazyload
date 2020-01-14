export default {
  install(Vue, options) {

    let margin = '0px 0px 100px 0px'
    let fadeIn = false
    let directive = 'lazyLoad'
    if(options) {
      margin = options.margin ?  options.margin : '0px 0px 100px 0px'
      fadeIn = options.fadeIn ? options.fadeIn : false
      directive = options.directive ? options.directive : 'lazyLoad'
      if (options.cssAnimate) {
        const animateCss = document.createElement('link')
        animateCss.rel = 'text/css'
        animateCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
        document.head.appendChild(animateCss)

        fadeIn = false
      }
    }
    Vue.directive(directive, {bind(el, binding) {
      if(fadeIn) {
        el.style.opacity= '0'
        el.style.transition= `opacity ${fadeIn} ease`
      }
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (binding.value.animation) {
                el.src = binding.value.url
                if(options.cssAnimate) {      
                  el.classList.add('animated')
                  binding.value.animation.forEach(className => {
                    el.classList.add(className)
                  });
                }
              } else {
                el.src = binding.value
              }

              fadeIn ? el.style.opacity= '1' : null
   
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: margin }
      )
      observer.observe(el)
    }})
  }
}

