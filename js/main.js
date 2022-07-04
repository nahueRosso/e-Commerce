import { getProducts } from "./fireBase.js";
getProducts();

import { getProduct } from "./fireBase.js";
getProduct();

const cartSidebar = document.getElementById("cartSidebar")

const imageContainer = document.getElementById("imageContainer")

const header = document.querySelector("header")

const svgList = document.getElementById("svgList")

const onBackground = document.getElementById("onBackground")

const btnToggle = document.getElementById('toggleBtn');

const glassList = document.querySelector('.glassList')

const sidebar = document.querySelector(".sidebar")

const order = document.getElementById('uno');

const filter = document.getElementById('dos');

const brand = document.getElementById('tres')

const string = document.getElementById('cuatro')

const type = document.getElementById('cinco')

const glassId = document.getElementById('glassId')

const cartId = document.getElementById("cartId")

window.addEventListener("scroll",()=>{
    sidebar.classList.toggle("sidebarActive",window.scrollY > 650);
})


window.addEventListener("scroll",() =>{
    imageContainer.style.opacity = 1 - +window.pageYOffset/700+'';

})

window.addEventListener("scroll", () =>{

    header.classList.toggle("sticky",window.scrollY > 0)

    onBackground.classList.toggle("sticky",window.scrollY > 0)

})

svgList.addEventListener("click",() => {
    header.classList.toggle("navBar")
})

btnToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
});

cartSidebar.addEventListener("click",function(){
    sidebar.classList.toggle('active');
});

order.addEventListener('click',()=>{
    glassList.classList.toggle('one')
});

filter.addEventListener('click',()=>{
    glassList.classList.toggle('two')
});

brand.addEventListener('click',()=>{
    glassList.classList.toggle('three')
});

string.addEventListener('click',()=>{
    glassList.classList.toggle('four')
});

type.addEventListener('click',()=>{
    glassList.classList.toggle('five')
});

cartId.addEventListener('click',()=>{
  sidebar.classList.toggle("cartActive")
})

glassId.addEventListener("click",()=>{

    sidebar.classList.toggle("cartActive")
    
})
