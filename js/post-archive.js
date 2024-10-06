var slidingMenu = document.getElementById('sliding-menu');
var headerContainer = document.getElementById('header-container');
var headerBottomRow = document.getElementsByClassName("header-bottom-row")[0];
var topHeaderAds = document.getElementById("top-header-ads");
var headerTopRow = document.getElementsByClassName("header-top-row")[0];
var blackBackground = document.getElementById('black-background');
var productsCategoryDiv=document.querySelector("div#header-container div.header-bottom-row>div");
var mainProductsMenu=document.getElementById("main-products-menu");
var productCategoryLis=document.querySelectorAll("div#main-products-menu>nav>ul>li");
var productCategoryUls=document.querySelectorAll("div#main-products-menu>nav>ul>li>ul");
var mainContainer = document.getElementById('main-container');
var mainProductsMenuHeight= document.querySelectorAll("div#main-products-menu>nav>ul")[0];
var body=document.getElementsByTagName('body')[0];
function setScrollOptions(){
    var lastScrollTop = 0;

    window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        if(!(headerBottomRow.classList.contains=="hide-bottom-row")){
            headerBottomRow.classList.add("hide-bottom-row");
            headerContainer.style.height="1px";
        } 
    } else if (st < lastScrollTop) {
        headerBottomRow.classList.remove("hide-bottom-row");
        headerContainer.style.height="fit-content";
        lastScrollTop=st;
    }
    lastScrollTop = st <= 0 ? 0 : st;
    }, false);

}
function windowBiggerThan1200(){
    if (window.innerWidth > 1200) {
        mainContainer.style.marginTop= -mainProductsMenuHeight.clientHeight+headerTopRow.clientHeight+headerBottomRow.clientHeight+topHeaderAds.clientHeight+"px";
        mainProductsMenu.style.top=window.scrollY+headerTopRow.clientHeight+headerBottomRow.clientHeight+topHeaderAds.clientHeight-1+"px";
        window.onscroll=function () {
            mainProductsMenu.style.top=window.scrollY+headerTopRow.clientHeight+headerBottomRow.clientHeight+topHeaderAds.clientHeight-1+"px";
        } 
        setScrollOptions();
        changeOffer();
    }else{
        mainContainer.style.marginTop= headerTopRow.clientHeight+headerBottomRow.clientHeight+topHeaderAds.clientHeight+10+"px";
        mobChangeOffer()
    }    
}
windowBiggerThan1200();
function checkMediaQuery() {
    var b;
    for(b=0;b<=amazingOwlCarouselItem.length-1;b++){
        var owl=amazingOwlCarouselItem[b];
        owl.style.height="auto";
    }
    owlCarouselItemHeight();
    windowBiggerThan1200();
}

window.addEventListener('resize', checkMediaQuery);
function openSlidingMenu(){
    body.style.overflowY="hidden";
    slidingMenu.style.right=0;
    slidingMenu.style.top=window.scrollY+"px";
    showBlack();
}
function closeSlidingMenu(){
    body.style.overflowY="scroll";
    slidingMenu.style.top=window.scrollY+"px";
    slidingMenu.style.right="-100%";
    closeBlack();
}
function showBlack(){
    blackBackground.style.visibility="visible";
    blackBackground.style.opacity=1;
    blackBackground.style.top=window.scrollY+"px";
}
function closeBlack(){
    blackBackground.style.visibility="hidden";
    blackBackground.style.opacity=0;

}
productsCategoryDiv.addEventListener("mouseenter",openMainProductsMenu);
productsCategoryDiv.addEventListener("mouseleave",closeMainProductsMenu);
mainProductsMenu.addEventListener("mouseenter",openMainProductsMenu);
mainProductsMenu.addEventListener("mouseleave",closeMainProductsMenu);

var h=0;
var k=0;
var bodyOverflow;
function openMainProductsMenu(){
    bodyOverflow=setTimeout(function(){
        body.style.overflowY="hidden";
    },300);
    mainProductsMenu.classList.add('main-products-menu-fade');
    productsCategoryDiv.style.borderBottom="2px solid #f9152c";
    productCategoryUls[0].style.display="block";
    blackBackground.classList.add("black-background-duration");
    blackBackground.style.top=window.scrollY+headerContainer.clientHeight+"px";
    blackBackground.style.zIndex=6;
}
function closeMainProductsMenu(){
    clearTimeout(bodyOverflow);
    mainProductsMenu.classList.remove('main-products-menu-fade');
    productsCategoryDiv.style.borderBottom="2px solid rgba(0, 0, 0, 0)";
    blackBackground.classList.remove("black-background-duration");
    blackBackground.style.top=0;
    blackBackground.style.zIndex=9;
    bodyOverflow=setTimeout(function(){
        body.style.overflowY="scroll";
    },300);
}
for(var n=1 ; n<=productCategoryLis.length-1 ; n++ ){
    productCategoryLis[n].addEventListener("mouseenter",productCategoryLisIn);
}
productCategoryLis[0].addEventListener("mouseenter",function(){
    productCategoryUls[0].style.display="block";
});
function productCategoryLisIn(){
    productCategoryUls[0].style.display="none";
}
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        rtl:true,
        nav:true,
        responsive : {
            0 : {
                items : 2,
            },
            400 : {
                items : 2,
            },
            500 : {
                items : 3,
            },
            700 : {
                items : 4,
            },
            900 : {
                items : 5,
            },
            1200 : {
                items : 7,
            }
        }
    });
});
var allPara = document.getElementsByClassName("long-name-text");
var paraN;
for(paraN=0;paraN<=allPara.length-1;paraN++){
    var para = allPara[paraN];
    if(para.innerHTML.length > 25){
        var text = para.innerHTML;
        para.innerHTML = "";
        var words = text.split("");
        for (i = 0; i < 25; i++) {
        para.innerHTML += words[i];
        }
        para.innerHTML += "...";
    }
}
var amazingOwlCarouselItem = document.getElementsByClassName("amazing-slider-item");
var highestItem=0;
var itemN;
var itemX;
var itemY;
function owlCarouselItemHeight(){

    for(itemN=0;itemN<=amazingOwlCarouselItem.length-1;itemN++){
        itemX=amazingOwlCarouselItem[itemN];

        if(itemX.clientHeight>highestItem){
            highestItem=itemX.clientHeight;
            if(itemN==amazingOwlCarouselItem.length-1){
                setHighest(highestItem);
            }
        }else{
            highestItem=highestItem;
            if(itemN==amazingOwlCarouselItem.length-1){
                setHighest(highestItem);
            }
        }
    }
}
setTimeout(owlCarouselItemHeight,500);
function setHighest(height){
    var z;
    for(z=0;z<=amazingOwlCarouselItem.length-1;z++){
        var owl=amazingOwlCarouselItem[z];
        owl.style.height=height+"px";
    }

}
function winBacktoTop(){
    window.scrollTo(0,0);
}




            // post archive js

var postChangeInterval;
var mobPostChangeInterval;
function changeOffer(){
    clearInterval(postChangeInterval);
    clearInterval(mobPostChangeInterval);
    var digiOfferPosts = document.querySelectorAll("div#main-container>div:nth-child(2)>aside>div.digi-offer>a");
    var prevdigiOfferPosts;
    var presdigiOfferPosts;
    for(var offerPostsnumb=1;offerPostsnumb<=digiOfferPosts.length-1;offerPostsnumb++){
        var digiOfferPost=digiOfferPosts[offerPostsnumb];
        digiOfferPost.style.display="none";
    }
    var offerPostsnum=0;
    function change(){
        if(offerPostsnum==digiOfferPosts.length){
            prevdigiOfferPosts=digiOfferPosts[offerPostsnum-1];
            prevdigiOfferPosts.style.display="none";
            offerPostsnum=0;
        }
        if(offerPostsnum>=1){
            prevdigiOfferPosts=digiOfferPosts[offerPostsnum-1];
            prevdigiOfferPosts.style.display="none";
        }
        presdigiOfferPosts=digiOfferPosts[offerPostsnum];
        presdigiOfferPosts.style.display="block";
        offerPostsnum=offerPostsnum+1;
    }
    change();
    postChangeInterval=setInterval(change,7000);
}

function mobChangeOffer(){
    clearInterval(postChangeInterval);
    clearInterval(mobPostChangeInterval);
    var digiOfferPosts = document.querySelectorAll("div#main-container>div:nth-child(2)>div.digi-offer>a");
    var prevdigiOfferPosts;
    var presdigiOfferPosts;
    for(var offerPostsnumb=1;offerPostsnumb<=digiOfferPosts.length-1;offerPostsnumb++){
        var digiOfferPost=digiOfferPosts[offerPostsnumb];
        digiOfferPost.style.display="none";
    }
    var offerPostsnum=0;
    function change(){
        if(offerPostsnum==digiOfferPosts.length){
            prevdigiOfferPosts=digiOfferPosts[offerPostsnum-1];
            prevdigiOfferPosts.style.display="none";
            offerPostsnum=0;
        }
        if(offerPostsnum>=1){
            prevdigiOfferPosts=digiOfferPosts[offerPostsnum-1];
            prevdigiOfferPosts.style.display="none";
        }
        presdigiOfferPosts=digiOfferPosts[offerPostsnum];
        presdigiOfferPosts.style.display="block";
        offerPostsnum=offerPostsnum+1;
    }
    change();
    mobPostChangeInterval=setInterval(change,7000);
}

