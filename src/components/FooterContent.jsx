const FooterMenu = () => {
    return (
        <div className="footer__content">
            <div className="content__information">

                <span className="footer__text">Доставка</span>
                <a className="information__number">8 (800) 555 35 35</a>
                <a href="#" className="information__icon-link">
                    <img src="src/assets/__icon/viber-icon.svg"
                         alt="viber-icon"
                         className="information__icon"
                    /></a>
                <a href="#" className="information__icon-link">
                    <img src="src/assets/__icon/whatsapp-icon.svg"
                         alt="whatsapp-icon"
                         className="information__icon icon"
                    /></a>

                <a href="#" className="information__icon-link">
                    <img src="src/assets/__icon/vk-icon.svg"
                         alt="vk-icon"
                         className="information__icon"
                    /></a>
            </div>

            <span className="footer__policy">Политика конфеденциальности</span>
        </div>
    )
}

export default FooterMenu;