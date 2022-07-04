let cardBuilder = (id,url, brand, model, price, string, type) => {

        const finalResult =`<img src="${url}">
                <p class="label"><b>${brand.toUpperCase()}<br> ${model}</b></p>
                <div class="price"><b>$ ${price}</b></div>
                <p class="details hoverOn">This ${brand[0].toUpperCase() + brand.slice(1)} guitar has ${string} strings and is ${type} type</p>
                <button class="addToCart hoverOn " id="${id}" type="button"><b>Add to cart</b></button></div> `

        return finalResult;
    
        }

let sidebarBuilder = (url, brand , model , price , x ) => {
        const finalResult =      `<div><img src="${url}"></div>
                                  <div class="boxChild"><p>${brand} ${model}</p>
                                  <b>$ ${price}</b></div><div class="multiplier"><svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="crossClass" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg><div><p>X </p><p class="classMulti">${x}</p></div></div>`
                return finalResult;
        }
