const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const container = document.querySelector('.main-links')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const input = document.querySelector('input')
const form = document.querySelector('.form')
let messageContainer = document.createElement('div')
let mainUrl = ''

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
// fetch
function fetchApi(url) {
  fetch('https://cleanuri.com/api/v1/shorten', {
    method: 'POST',
    body: new URLSearchParams({
      url: `${url}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      mainUrl = data.result_url
    })

    .catch((error) => console.log(error))
}

// form
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let copyUrl = document.createElement('a')

  let inputVal = input.value
  if (!inputVal) {
    input.classList.add('error')
    setTimeout("alert('No url detected')", 250)
  } else if (!inputVal.includes('https://')) {
    inputVal = 'https://' + inputVal
    fetchApi(inputVal)
    setTimeout(displayLinks, 3000)
  } else {
    fetchApi(inputVal)
    setTimeout(displayLinks, 3000)
  }

  // display links
  // TODO:Work on this next************************************************************
  function displayLinks(data) {
    // initialize vqariables
    let shortLink = mainUrl
    let message = document.createElement('div')
    let initialUrl = document.createElement('a')
    let shortUrl = document.createElement('a')
    // Set values into the variables
    shortUrl.innerHTML = `  ${shortLink}`
    initialUrl.innerHTML = `  ${inputVal}`
    // make the link go to the correct destination
    initialUrl.href = inputVal
    shortUrl.href = shortLink
    // add thir respective classes for style
    message.classList.add('message', 'flex')
    initialUrl.classList.add('btn')
    shortUrl.classList.add('short-url', 'btn')
    messageContainer.classList.add('messageContainer')
    copyUrl.classList.add('copy', 'btn', 'btn-colored')
    copyUrl.innerHTML = `copy`
    message.append(initialUrl, shortUrl, copyUrl)
    messageContainer.appendChild(message)
    container.insertBefore(messageContainer, container.children[0])
  }

  // copy text to clipboard
  function copyLink() {
    copyUrl.innerHTML = 'copied'
    copyUrl.style.backgroundColor = 'hsl(257, 27%, 26%)'
    const link = copyUrl.previousElementSibling.innerHTML
    navigator.clipboard.writeText(link)

    messageArray += messageContainer.outerHTML
    localStorage.setItem('message', messageArray)
  }

  // add link to local storage
  copyUrl.addEventListener('click', copyLink)
  let messageArray = localStorage.getItem('message') ? localStorage.getItem('message') : []
  console.log(localStorage.getItem('message'))
})

document.addEventListener('DOMContentLoaded', () => {
  // local storage
  let storedMessage = localStorage.getItem('message')
  if (localStorage.getItem('message')) {
    console.log('data found')
    document.getElementById('showLinks').innerHTML = storedMessage
  }
})
