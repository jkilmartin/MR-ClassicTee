let classicItemEl = $(".classicData"),
    cartItemEl = $(".cartData");

let classicsData,
    cartData;

function init() {
    $.getJSON('json/classic.json', function(classic) { 
        classicsData = classic;
        displayClassic(classicsData.classic);
    });

    $.getJSON('json/cart.json', function(cart) { 
        cartData = cart;
        displayCart(cartData.cart);
    });
}

function displayClassic(classic) {
    let htmlString = '';
    $.each(classic, function(i, classic) {
        htmlString = htmlString + getclassicItemHTML(classic);  
    });

    classicItemEl.html(htmlString);
    
}

function getclassicItemHTML(classic) {
    return `<div data-id="${classic.id}" class="${classic.class}">
                    <img src="${classic.image}">
                <div class="classic-text">
                    <h5>${classic.title}</h5>
                    <hr>
                    <h6>${classic.price}</h6>
                    <hr>
                    <p>${classic.description}</p>
                </div>
            </div>`;
}

function displayCart(cart) {
    let htmlString = '';
    $.each(cart, function(i, cart) {
        htmlString = htmlString + getcartItemHTML(cart);  
    });

    cartItemEl.html(htmlString);
    
}

function getcartItemHTML(cart) {
    return `<div class="${cart.class}">
                    <h6>${cart.title}</h6>
                <div class="cart-sizes">
                    <p>${cart.small}</p>
                    <p>${cart.medium}</p>
                    <p>${cart.large}</p>
                </div>
                    <h4>${cart.button}</h4>
            </div>`;
}

init();