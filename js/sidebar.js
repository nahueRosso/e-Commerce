const btnToggle = document.querySelector('.toggle-btn');

const glassList = document.querySelector('.glassList')

const sidebar = document.querySelector(".sidebar")

const order = document.getElementById('uno');

const filter = document.getElementById('dos');

const brand = document.getElementById('tres')

const string = document.getElementById('cuatro')

const type = document.getElementById('cinco')

const glassId = document.getElementById('glassId')

const cartId = document.getElementById("cartId")

btnToggle.addEventListener('click', function () {
    console.log('clik')
    sidebar.classList.toggle('active');
    console.log(document.getElementById('sidebar'))
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
  sidebar.classList.toggle("glassActive")
})