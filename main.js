// menu for phone
const menu = document.getElementById("menu");
const listNav = document.getElementById("list-nav") ;
let open = false ;

menu.addEventListener("click" , function () {
    if (!open) {
        listNav.style.left = "0px" ;
        open = true ;
    }else{
        listNav.style.left = "-1000px" ;
        open = false ;
    }
})

// count number or buy

const plus = document.getElementById("plus") ;
const mines = document.getElementById("mines") ;
const number = document.getElementById("number") ;

plus.addEventListener("click" , function () {
    let num = Number(number.innerHTML) ;
    number.innerHTML = num + 1 ; 
})

mines.addEventListener("click" , function () {
    let num = Number(number.innerHTML) ;
    if(num > 0 ){ 
        number.innerHTML = num - 1 ;
    } 
})

// modal box
const modalMain = document.getElementById("modal-main") ;
const addBtn = document.getElementsByClassName("btn") ;
const modalBasket = document.getElementById("modal-basket") ;
const card = document.getElementById("modal") ;
let modalBox = false ;

modalBasket.addEventListener("click" , function() {
    if (!modalBox) {
        card.style.display = "block" ;
        modalBox = true ;
    }else{
        card.style.display = "none" ;
        modalBox = false ;
    }
})

//add to modal
let modalObj = ["Fall Limited Edition Sneakers"] ;
let exist ;

addBtn[0].addEventListener("click" , function() {
    const nameTag = document.getElementsByTagName("h1")[0] ;
    for(let x of modalObj){
        if(x == nameTag.innerHTML){
            exist = x ;
            break ;
        }
    }
    console.log(exist)
})