const btnOpen = document.querySelector(".block1__button")
const btnClose = document.querySelector(".wrapper__close")
const modalWindow = document.querySelector(".wrapper")

btnOpen.addEventListener("click",showModal)
btnClose.addEventListener("click",hideModal)

function showModal(){
    modalWindow.style="display:flex"  
}
function hideModal(){
    modalWindow.style="display:none"  
}
