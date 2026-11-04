import FooterMenuItem from "./FooterMenuItem.jsx";

const FooterMenu = () => {
    return (
        <ul className="footer__menu">
            <FooterMenuItem className = "footer__menu-item">О нас</FooterMenuItem>
            <FooterMenuItem className = "footer__menu-item">Каталог продуктов</FooterMenuItem>
            <FooterMenuItem className = "footer__menu-item">Доставка и оплата</FooterMenuItem>
        </ul>
    )
}

export default FooterMenu