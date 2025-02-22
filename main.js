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