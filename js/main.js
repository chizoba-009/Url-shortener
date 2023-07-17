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
