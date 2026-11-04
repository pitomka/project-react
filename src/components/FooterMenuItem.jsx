const FooterMenu = (props) => {
    const {
        className = '',
        children,
    } = props
    return (
        <li className={`${className}`}><a href="#" className="footer__link">{children}</a></li>
    )
}

export default FooterMenu;