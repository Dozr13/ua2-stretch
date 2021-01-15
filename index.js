let formBtn = document.getElementById('close-form')
let form = document.querySelector('.form')

let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let emailList = []

let formContainer = document.querySelector('.form-container')

let cart = document.createElement('div')
let main = document.querySelector('.hero')
let cartItems = 0

const toggler = () => {
  form.classList.toggle('hide')
  formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X'
}

formBtn.addEventListener('click', toggler)


function validateForm() {
  if(!nameInput.value || !emailInput.value){
    if(!nameInput.value){
      nameInput.style.border = '2px solid red'
      alert('You need to input your name')
    }
    if(!emailInput.value){
      emailInput.style.border = '2px solid red'
      alert('You need to input your email address')
    }
  } else {
    emailList.push({name: nameInput.value, email: emailInput.value})
    displayThankYou()
  }
}



form.addEventListener('submit', function(event){
  event.preventDefault()
  validateForm()
})


const displayThankYou = () => {
  formContainer.innerText = 'Thank you for subscribing!'
  removeMessage()
}

const removeMessage = () => {
  setTimeout(function(){
    formContainer.remove()
  }, 3000)
}

nameInput.addEventListener('change', event => {
  nameInput.style.border = 'none'
})

emailInput.addEventListener('change', event => {
  emailInput.style.border = 'none'
})


const addToCart = () => {
  if(cartItems === 0){
    cartItems++
    cart.setAttribute('class', 'cart-display')
    cart.innerText = `Your Cart: 1 item`
  } else {
    cartItems++
    cart.innerText = `Your Cart: ${cartItems} items`
  }
  main.appendChild(cart)
}