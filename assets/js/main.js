const navbarEmail = document.querySelector(".navbar-email");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const navbarBurguerMain = document.querySelector(".burguer-main");
const mainDesktop = document.querySelector(".desktop-main");
const mainMobile = document.querySelector(".mobile-main");
const shoppingCart = document.querySelector(".shopping-cart");
const productContainer = document.querySelector(".product-container");

const inactive = "inactive";
const isMainMobileClosed = mainMobile.classList.contains(inactive);
const isMainDesktopClosed = mainDesktop.classList.contains(inactive);
const isShoppingCartClosed = shoppingCart.classList.contains(inactive);

navbarBurguerMain.addEventListener("click",toggleMainMobile);
navbarEmail.addEventListener("click",toggleMainDesktop);
navbarShoppingCart.addEventListener("click",toggleShoppingCart);

function toggleMainMobile(){
    if (isShoppingCartClosed){
        shoppingCart.classList.add(inactive);
    };
    mainMobile.classList.toggle(inactive);
};

function toggleMainDesktop(){
    if (isShoppingCartClosed){
        shoppingCart.classList.add(inactive);
    };
    mainDesktop.classList.toggle(inactive);
};

function toggleShoppingCart(){
    if (isMainMobileClosed){
        mainMobile.classList.add(inactive);
    };
    if (isMainDesktopClosed){
        mainDesktop.classList.add(inactive);
    };
    shoppingCart.classList.toggle(inactive);
};

function renderProduct(){
    const productList = [];

    // Template o base de un objeto
    function product(name, price, img){
        this.name = name,
        this.price = price,
        this.img = img
    };

    const productDB = [
        ["Boh",120.00,"/assets/images/boh.jpeg"],
        ["Cubone",120.00,"/assets/images/cubone.png"],
        ["Dragonite",120.00,"/assets/images/dragonite.jpg"],
        ["Nezuko",120.00,"/assets/images/nezuko.png"],
        ["Pikachu",120.00,"/assets/images/pikachu.png"],
        ["Totoro",120.00,"/assets/images/totoro.jpeg"],
        ["Boh",120.00,"/assets/images/boh.jpeg"],
        ["Cubone",120.00,"/assets/images/cubone.png"],
        ["Dragonite",120.00,"/assets/images/dragonite.jpg"],
        ["Nezuko",120.00,"/assets/images/nezuko.png"],
        ["Pikachu",120.00,"/assets/images/pikachu.png"],
        ["Totoro",120.00,"/assets/images/totoro.jpeg"]
    ];

    // Recorro el array productDB y convierto cada elemento del array en un objeto, luego guardo el objeto en otro array
    for(let i=0; i<productDB.length;i++){ 
        productList.push(new product(productDB[i][0],productDB[i][1],productDB[i][2]));
    };

    // Maqueto el código HTML desde JavaScript
    for(prod of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productCardImg = document.createElement("img");
        productCardImg.setAttribute("src",prod.img);
        productCardImg.setAttribute("alt",prod.name);

        const productCardInfo = document.createElement("div");
        productCardInfo.classList.add("product-info");

        const productCardInfoDiv = document.createElement("div");
        const productCardInfoPrice = document.createElement("p");
        productCardInfoPrice.innerText = "$" + prod.price;
        const productCardInfoName = document.createElement("p");
        productCardInfoName.innerText = prod.name;

        const productCardInfoFigure = document.createElement("figure");
        const productCardInfoFigureImg = document.createElement("img");
        productCardInfoFigureImg.setAttribute("src","/assets/icons/bt_add_to_cart.svg");
        productCardInfoFigureImg.setAttribute("alt","bt_add_to_cart");

        productCard.appendChild(productCardImg);
        productCard.appendChild(productCardInfo);
        productCardInfo.appendChild(productCardInfoDiv);
        productCardInfoDiv.appendChild(productCardInfoPrice);
        productCardInfoDiv.appendChild(productCardInfoName);
        productCardInfo.appendChild(productCardInfoFigure);
        productCardInfoFigure.appendChild(productCardInfoFigureImg);
        productContainer.appendChild(productCard);
    };
};
renderProduct();