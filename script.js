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

let information = [
    {
        title: "Danylo Game",
        url: "./img/Nature-1.jpg",
        alt: ""
    },
    {
        title: "Ilya's Game",
        url: "./img/Nature-2.jpg",
        alt: ""
    },
    {
        title: "Misha's Game",
        url: "./img/Nature-3.jpg",
        alt: ""
    },
    {
        title: "Vlad's Game",
        url: "./img/Nature-4.jpg",
        alt: ""
    }
]

let[
    {
        title: title1,
        url: url1,
        alt: alt1
    },
    {
        title: title2,
        url: url2,
        alt: alt2
    },
    {
        title: title3,
        url: url3,
        alt: alt3
    },
    {
        title: title4,
        url: url4,
        alt: alt4
    }
] = information

let main = document.querySelector(".main")
function getInfo(information){
    information.forEach(info => {
        main.innerHTML = `
            <a href="HTML/Danylo.html">
                <div class="box-main-1">
                    <img src="${url1}" alt="" class="img-main-1">
                    <h2 class="title-main-1">${title1}</h2>
                </div>
            </a>
            <div class="box-main-2">
                <img src="${url2}" alt="" class="img-main-2">
                <h2 class="title-main-2">${title2}</h2>
            </div>
            <div class="box-main-3">
                <img src="${url3}" alt="" class="img-main-3">
                <h2 class="title-main-3">${title3}</h2>
            </div>
            <div class="box-main-4">
                <img src="${url4}" alt="" class="img-main-4">
                <h2 class="title-main-4">${title4}</h2>
            </div>
        `
    })
}
getInfo(information)