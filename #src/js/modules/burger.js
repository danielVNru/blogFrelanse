export function burger_logic(callback) {

    $('.burger').click(()=>{
        $('.burger').toggleClass('--active')
        $('.header__menu').toggleClass('--open')
    })
    
}