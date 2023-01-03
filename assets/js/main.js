//Las funciones declarativas, condicionales y ciclos en JavaScript no terminan con ";"

const navEmail = document.querySelector(".navbar-email");
const navShoppingCart = document.querySelector(".navbar-shopping-cart");
const navBurguerMain = document.querySelector(".burguer-main");
const mainDesktop = document.querySelector(".desktop-main");
const mainMobile = document.querySelector(".mobile-main");
const shoppingCart = document.querySelector(".shopping-cart");
const productCardContainer = document.querySelector(".product-card-container");
const productDetails = document.querySelector(".product-details");

const inactive = "inactive";

navBurguerMain.addEventListener("click",toggleMainMobile);
navEmail.addEventListener("click",toggleMainDesktop);
navShoppingCart.addEventListener("click",toggleShoppingCart);

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

function renderProduct(){
    // Array de productos
    const productDB = [
        ["203401","Boh","120,00","./assets/images/boh.jpeg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203402","Cubone","120,00","./assets/images/cubone.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203403","Dragonite","120,00","./assets/images/dragonite.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203404","Nezuko","120,00","./assets/images/nezuko.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203405","Pikachu","120,00","./assets/images/pikachu.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203406","Totoro","120,00","./assets/images/totoro.jpeg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203407","Boh","120,00","./assets/images/boh.jpeg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203408","Cubone","120,00","./assets/images/cubone.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203409","Dragonite","120,00","./assets/images/dragonite.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203410","Nezuko","120,00","./assets/images/nezuko.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203411","Pikachu","120,00","./assets/images/pikachu.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203412","Totoro","120,00","./assets/images/totoro.jpeg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203413","Boh","120,00","./assets/images/boh.jpeg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203414","Cubone","120,00","./assets/images/cubone.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203415","Dragonite","120,00","./assets/images/dragonite.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203416","Nezuko","120,00","./assets/images/nezuko.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203417","Pikachu","120,00","./assets/images/pikachu.png","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"],
        ["203418","Totoro","120,00","./assets/images/totoro.jpeg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"]
    ];

    // Template o base de un objeto
    function product(id, name, price, img, descript){
       this.id = id, 
        this.name = name,
        this.price = price,
        this.img = img,
        this.descript = descript
    }

    const productList = [];

    // Recorro el array productDB y convierto cada elemento del array en un objeto, luego guardo el objeto en otro array
    for(let i=0; i<productDB.length;i++){ 
        productList.push(new product(productDB[i][0],productDB[i][1],productDB[i][2],productDB[i][3],productDB[i][4]));
    }

    // Maquetación del código HTML del Product Card
    for(prod of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("id",prod.id);
        productCard.addEventListener("click",(e) => {
            openProductDetails(productCard.id);
        });

        const productCardImg = document.createElement("img");
        productCardImg.setAttribute("src",prod.img);
        productCardImg.setAttribute("alt",prod.name);

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

    // Detalle del producto
    // Cerrar el detalle del producto
    function closeProductDetails(){
        productDetails.classList.add(inactive);
    }
    // Abrir el detalle del producto
    function openProductDetails(id_product_card){
        mainMobile.classList.add(inactive);
        mainDesktop.classList.add(inactive);
        shoppingCart.classList.add(inactive);
        productDetails.classList.remove(inactive);

        productDetails.innerHTML = " ";

        for(prod of productList){
            if(id_product_card == prod.id){
                createProductDetails(prod.img, prod.price, prod.name, prod.descript);
            }
        }
    }
    // Maquetación del código HTML de la descripción detallada del producto
    function createProductDetails(pd_img, pd_price, pd_name, pd_descript){
        const productDetailsClose = document.createElement("img");
        productDetailsClose.setAttribute("src","./assets/icons/icon_close.png");
        productDetailsClose.setAttribute("alt","close");
        productDetailsClose.setAttribute("class","product-details-close");
        productDetailsClose.addEventListener("click",closeProductDetails);

        const productDetailsImg = document.createElement("img");
        productDetailsImg.setAttribute("src",pd_img);
        productDetailsImg.setAttribute("alt",pd_name);

        const productDetailsPoints = document.createElement("div");
        productDetailsPoints.setAttribute("class","points");
        const productDetailsPointsLi_1 = document.createElement("li");
        productDetailsPointsLi_1.setAttribute("class","active");
        const productDetailsPointsLi_2 = document.createElement("li");
        const productDetailsPointsLi_3 = document.createElement("li");

        const productDetailsInfo = document.createElement("div");
        productDetailsInfo.setAttribute("class","product-details-info");
        const productDetailsInfoPrice = document.createElement("p");
        productDetailsInfoPrice.innerText = "$" + pd_price;
        const productDetailsInfoName = document.createElement("p");
        productDetailsInfoName.innerText = pd_name;
        const productDetailsInfoDescrip = document.createElement("p");
        productDetailsInfoDescrip.innerText = pd_descript;
        const productDetailsInfoButton = document.createElement("button");
        productDetailsInfoButton.setAttribute("class","primary-button add-to-cart-button");
        productDetailsInfoButton.innerText = "Add to cart";
        const productDetailsInfoButtonImg = document.createElement("img");
        productDetailsInfoButtonImg.setAttribute("src","./assets/icons/bt_add_to_cart.svg");
        productDetailsInfoButtonImg.setAttribute("alt","add to cart");

        productDetails.appendChild(productDetailsClose);
        productDetails.appendChild(productDetailsImg);
        productDetails.appendChild(productDetailsPoints);
        productDetailsPoints.appendChild(productDetailsPointsLi_1);
        productDetailsPoints.appendChild(productDetailsPointsLi_2);
        productDetailsPoints.appendChild(productDetailsPointsLi_3);
        productDetails.appendChild(productDetailsInfo);
        productDetailsInfo.appendChild(productDetailsInfoPrice);
        productDetailsInfo.appendChild(productDetailsInfoName);
        productDetailsInfo.appendChild(productDetailsInfoDescrip);
        productDetailsInfo.appendChild(productDetailsInfoButton);
        productDetailsInfoButton.appendChild(productDetailsInfoButtonImg);
    }
}
renderProduct();