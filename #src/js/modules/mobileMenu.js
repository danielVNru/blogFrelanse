

export function openMenu(){
    $('.mobile').animate({left: 0}, 200)
    $('body').css({overflow: 'hidden'})
}

export function closeMenu() {
    $('.mobile').animate({left: '100%'}, 200)
    $('body').css({overflow: 'auto'})
}