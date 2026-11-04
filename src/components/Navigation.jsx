import NavigationMenu from "./NavigationMenu.jsx"

const Navigation = () => {
    return (
        <>
            <nav>
              <div className="header__nav-container">
                    <div className="header__content-block">
                        <a href="#" className="menu__link-logo"><img
                            src="src/assets/__icon/logo-main.svg" alt="logo-main"
                            className="header__main-logo"/></a>

                        <NavigationMenu
                            className = "menu__list"
                            isSubMenu = {true}
                        />

                        <div className="header__information">
                          <span className="information__phone-number">8 (800) 555 35 35</span>
                          <a href="#" className="header__link-logo_max"><img src="src/assets/__icon/icon-max.svg"
                            alt="logo-max"
                            className="header__max-logo"/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation