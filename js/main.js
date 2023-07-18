const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('.form')

// open menu
openMenu.addEventListener('click', () => {
  document.querySelector('ul').style.display = 'block'
  document.querySelector('ul').classList.add('nav')
  closeMenu.style.display = 'block'
  openMenu.style.display = 'none'
})

// close menu
closeMenu.addEventListener('click', () => {
  document.querySelector('.nav').style.display = 'none'
  document.querySelector('ul').classList.remove('nav')
  openMenu.style.display = 'block'
  closeMenu.style.display = 'none'
})

// form
form.addEventListener('submit', (e) => {
  e.preventDefault()

  let inputVal = input.value
  if (!inputVal) {
    input.classList.add('error')
    console.log('No input')
  } else {
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputVal}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`Your short code is: ${data.result.full_short_link}`)
      })
      .catch((err) => {
        console.log(err)
      })
    input.value = ''
  }
})

// animate on scroll
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach((el) => {
    addObserver(el, options)
  })
}
function addObserver(el, options) {
  // Check if `IntersectionObserver` is supported
  if (!('IntersectionObserver' in window)) {
    // Simple fallback
    // The animation/callback will be called immediately so
    // the scroll animation doesn't happen on unsupported browsers
    if (options.cb) {
      options.cb(el)
    } else {
      entry.target.classList.add('animate__animated')
    }
    // We don't need to execute the rest of the code
    return
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el)
        } else {
          entry.target.classList.add('animate__animated')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(el)
}
// Example usages:
scrollTrigger('.animate__fadeInUp', {
  rootMargin: '-300px',
})
scrollTrigger('.animate__bounceInLeft', {
  rootMargin: '-200px',
})
// scrollTrigger('.loader', {
//   rootMargin: '-200px',
//   cb: function(el){
//     el.innerText = 'Loading...'
//     setTimeout(() => {
//       el.innerText = 'Task Complete!'
//     }, 1000)
//   }
// })
