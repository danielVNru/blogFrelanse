import { closeMenu, openMenu } from "./modules/mobileMenu.js";
import { scrollTop } from "./modules/scroll.js";

$('.up').click(scrollTop)

$('.burger').click(openMenu)
$('.mobile__close').click(closeMenu)