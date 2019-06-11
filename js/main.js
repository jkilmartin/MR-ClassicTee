// Global Var For Embed HTML
let classicItemEl = $(".classicData"),
    cartItemEl = $(".cartData"),
    miniCartItemEl = $(".miniCart");

// Global Var For Data
let classicsData,
    cartData,
    miniCart;

// Global Var Misc
let sizeSelect,
    popup;

// initilize func

function init() {
    // gathers my two json documents to dynamically generate most of the code
    $.getJSON('json/classic.json', function(classic) {
        classicsData = classic;
        displayClassic(classicsData.classic);
    });

    $.getJSON('json/cart.json', function(cart) {
        cartData = cart;
        displayCart(cartData.cart);
    });

    // this displays the small mini cart on the top right
    displayMiniCart()
}

function displayClassic(classic) {
    let htmlString = '';
    $.each(classic, function(i, classic) {
        htmlString = htmlString + getclassicItemHTML(classic);
    });

    classicItemEl.html(htmlString);

}

function getclassicItemHTML(classic) {
    return `<div data-id="${classic.id}" class="classic-text">
                    <h5>${classic.title}</h5>
                    <hr>
                    <h6>${classic.price}</h6>
                    <hr>
                    <p>${classic.description}</p>
            </div>`;
}

function displayCart(cart) {
    let htmlString = '';
    $.each(cart, function(i, cart) {
        htmlString = htmlString + getcartItemHTML(cart);
    });

    cartItemEl.html(htmlString);

    hoverCartClass();
    addToCart();
}

function getcartItemHTML(cart) {
    return `<div class="${cart.class}">
                    <p>${cart.size}</p>
            </div>`;
}

function hoverCartClass() {
    sizeSelect = $('.cartstyles');
    sizeSelect.on('click', function() {
        // give the small black border around the shirt selection
        if (sizeSelect.hasClass('selectedSize')) {
            sizeSelect.removeClass('selectedSize');
        }

        $(this).addClass('selectedSize')
    })
}

function addToCart() {
    let cartButton = $('.btn');
    cartButton.on('click', function() {
        if (sizeSelect.hasClass('selectedSize')) {

        } else {
            window.alert("Please Select A Shirt Size!");
        }
    })
}

function displayMiniCart() {
    popup = $('.parentpopup');
    miniCartItemEl.on('click', function() {
        if (popup.hasClass('selectpopup')) {
            popup.removeClass('selectpopup');
        } else(
            $('.parentpopup').addClass('selectpopup')
        )

    })
}

// initilize function to run JS
init();