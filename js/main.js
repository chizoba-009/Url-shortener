const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const container = document.querySelector('.main-links')
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
let messageContainer = document.createElement('div')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let copyUrl = document.createElement('a')

  let inputVal = input.value
  if (!inputVal) {
    input.classList.add('error')
    setTimeout("alert('No url detected')", 250)
  } else {
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputVal}`)
      .then((res) => res.json())
      .then((data) => {
        displayLinks(data)
      })
      .catch((err) => {
        console.log(err)
      })
    input.value = ''
    input.classList.remove('error')
  }

  // display links
  function displayLinks(data) {
    let shortLink = data.result.full_short_link
    let message = document.createElement('div')
    let initialUrl = document.createElement('a')
    let shortUrl = document.createElement('a')
    initialUrl.href = inputVal
    shortUrl.href = shortLink
    shortUrl.classList.add('short-url', 'btn')
    initialUrl.classList.add('btn')
    messageContainer.classList.add('messageContainer')
    message.classList.add('message', 'flex')
    copyUrl.classList.add('copy', 'btn', 'btn-colored')
    shortUrl.innerHTML = `  ${shortLink}`
    initialUrl.innerHTML = `  ${inputVal}`
    copyUrl.innerHTML = `copy`
    message.append(initialUrl, shortUrl, copyUrl)
    messageContainer.appendChild(message)
    container.insertBefore(messageContainer, container.children[0])
  }
  copyUrl.addEventListener('click', copyLink)
  let messageArray = localStorage.getItem('message') ? localStorage.getItem('message') : []
  console.log(localStorage.getItem('message'))
  // copy text to clipboard
  function copyLink() {
    copyUrl.innerHTML = 'copied'
    copyUrl.style.backgroundColor = 'hsl(257, 27%, 26%)'
    const link = copyUrl.previousElementSibling.innerHTML
    navigator.clipboard.writeText(link)

    messageArray += messageContainer.outerHTML
    localStorage.setItem('message', messageArray)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  // local storage
  let storedMessage = localStorage.getItem('message')
  if (localStorage.getItem('message')) {
    console.log('local storage found')
    document.getElementById('showLinks').innerHTML = storedMessage
  }
})
