function menuOnClick(){
    let menu_mobile = document.querySelector('#nav');
    if(menu_mobile.classList.contains('open')){
        menu_mobile.classList.remove('open');
    }else{
        menu_mobile.classList.add('open')
    }
}