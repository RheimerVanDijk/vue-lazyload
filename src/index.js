export default {
  install(Vue, options) {
    let margin = '0px 0px 100px 0px'
    let fadeIn = false
    if(options) {
      margin = options.margin ?  options.margin : '0px 0px 100px 0px'
      fadeIn = options.fadeIn ? options.fadeIn : false
    }
    Vue.directive('lazyLoad', (el, binding) => {
      if(fadeIn) {
        el.style.opacity= '0'
        el.style.transition= `opacity ${fadeIn} ease`
      }
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.src = binding.value
              fadeIn ? el.style.opacity= '1' : null
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: margin }
      )
      observer.observe(el)
    })
  }
}