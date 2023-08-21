const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const menuBtn= document.querySelector('menu-btn')
menuBtn.addEventListener('click',function(){
    document.body.classList.toggle('mobile-menu-active')
})