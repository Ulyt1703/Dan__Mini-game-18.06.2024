let headerHome = document.querySelector(".header")
let textHeaderMobile = document.querySelector(".text__header-mobile")
let headerLabel = document.querySelector(".header__label")
let mainHome = document.querySelector(".main")
let footerHome = document.querySelector(".footer")
let loading = document.querySelector(".loading")
window.addEventListener("load", function() {
    window.scrollTo(0, 0)
    setTimeout(function(){
        headerHome.style.opacity = '1'
        mainHome.style.opacity = '1'
        footerHome.style.display = 'block'
        textHeaderMobile.style.opacity = '1'
        headerLabel.style.opacity = '1'
    },900)
    loading.classList.add("animation")
    setTimeout(function(){
        loading.classList.remove("animation")
    },900)
})

let items = document.querySelectorAll(".menu li")
items.forEach((item) =>{
    item.addEventListener("click", () => {
        items.forEach((otherItem) => {
            otherItem.classList.remove("active")
        })
        item.classList.add("active")
    }
    )
})


let main = document.querySelector(".main")