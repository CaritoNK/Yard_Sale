//Las funciones declarativas, condicionales y ciclos en JavaScript no terminan con ";"

const navEmail = document.querySelector(".navbar-email");
const navShoppingCart = document.querySelector(".navbar-shopping-cart");
const navBurguerMain = document.querySelector(".burguer-main");
const mainDesktop = document.querySelector(".desktop-main");
const mainMobile = document.querySelector(".mobile-main");
const shoppingCart = document.querySelector(".shopping-cart");
const productCardContainer = document.querySelector(".product-card-container");
const productDetails = document.querySelector(".product-details");
const productDetailsClose = document.querySelector(".product-details-close");

const inactive = "inactive";

navBurguerMain.addEventListener("click",toggleMainMobile);
navEmail.addEventListener("click",toggleMainDesktop);
navShoppingCart.addEventListener("click",toggleShoppingCart);
productDetailsClose.addEventListener("click",closeProductDetails);

function toggleMainDesktop(){
    shoppingCart.classList.add(inactive);
    mainDesktop.classList.toggle(inactive);
}

function toggleMainMobile(){
    shoppingCart.classList.add(inactive);
    mainMobile.classList.toggle(inactive);
}

function toggleShoppingCart(){
    mainMobile.classList.add(inactive);
    mainDesktop.classList.add(inactive);
    productDetails.classList.add(inactive);
    shoppingCart.classList.toggle(inactive);
}

function closeProductDetails(){
    productDetails.classList.add(inactive);
}

function openProductDetails(){
    mainMobile.classList.add(inactive);
    mainDesktop.classList.add(inactive);
    shoppingCart.classList.add(inactive);
    productDetails.classList.remove(inactive);
}

function renderProduct(){
    // Array de productos
    const productDB = [
        ["Boh","120,00","./assets/images/boh.jpeg"],
        ["Cubone","120,00","./assets/images/cubone.png"],
        ["Dragonite","120,00","./assets/images/dragonite.jpg"],
        ["Nezuko","120,00","./assets/images/nezuko.png"],
        ["Pikachu","120,00","./assets/images/pikachu.png"],
        ["Totoro","120,00","./assets/images/totoro.jpeg"],
        ["Boh","120,00","./assets/images/boh.jpeg"],
        ["Cubone","120,00","./assets/images/cubone.png"],
        ["Dragonite","120,00","./assets/images/dragonite.jpg"],
        ["Nezuko","120,00","./assets/images/nezuko.png"],
        ["Pikachu","120,00","./assets/images/pikachu.png"],
        ["Totoro","120,00","./assets/images/totoro.jpeg"]
    ];

    // Template o base de un objeto
    function product(name, price, img){
        this.name = name,
        this.price = price,
        this.img = img
    }

    const productList = [];

    // Recorro el array productDB y convierto cada elemento del array en un objeto, luego guardo el objeto en otro array
    for(let i=0; i<productDB.length;i++){ 
        productList.push(new product(productDB[i][0],productDB[i][1],productDB[i][2]));
    }

    // Maqueto el código HTML desde JavaScript
    for(prod of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productCardImg = document.createElement("img");
        productCardImg.setAttribute("src",prod.img);
        productCardImg.setAttribute("alt",prod.name);
        productCardImg.addEventListener("click",openProductDetails);

        const productCardInfo = document.createElement("div");
        productCardInfo.classList.add("product-card-info");

        const productCardInfoDiv = document.createElement("div");
        const productCardInfoPrice = document.createElement("p");
        productCardInfoPrice.innerText = "$" + prod.price;
        const productCardInfoName = document.createElement("p");
        productCardInfoName.innerText = prod.name;

        const productCardInfoFigure = document.createElement("figure");
        const productCardInfoFigureImg = document.createElement("img");
        productCardInfoFigureImg.setAttribute("src","./assets/icons/bt_add_to_cart.svg");
        productCardInfoFigureImg.setAttribute("alt","bt_add_to_cart");

        productCard.appendChild(productCardImg);
        productCard.appendChild(productCardInfo);
        productCardInfo.appendChild(productCardInfoDiv);
        productCardInfoDiv.appendChild(productCardInfoPrice);
        productCardInfoDiv.appendChild(productCardInfoName);
        productCardInfo.appendChild(productCardInfoFigure);
        productCardInfoFigure.appendChild(productCardInfoFigureImg);
        productCardContainer.appendChild(productCard);
    }
}
renderProduct();