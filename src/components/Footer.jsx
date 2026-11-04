import FooterMenu from "./FooterMenu.jsx";
import FooterContent from "./FooterContent.jsx";

const Footer = () => {
    return (
        <footer>
            <img src="src/assets/__icon/logo-main-full.svg"
                 className="footer__main-logo"
                 alt="logo" />

            <FooterMenu />
            <FooterContent />
        </footer>
    )
}

export default Footer