const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close-button')

//loads modal 2 seconds after page load
window.addEventListener('load',() =>{
    setTimeout(()=>{
        modal.style.display = "block"
    },2000)
})


//Closes modal when you click on the X button
closeButton.addEventListener('click', ()=>{
  modal.style.display = 'none'
})

