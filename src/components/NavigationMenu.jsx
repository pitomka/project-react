import NavigationMenuItem from "./NavigationMenuItem.jsx"

const NavigationMenu = (props) => {
    const {
        className = '',
    } = props
  return (
      <>
        <div className="header__menu">
            <ul className={`${className}`}>
                <NavigationMenuItem
                    subMenu = ""
                    className = "menu__link"
                    isSubMenu = {false}
                >
                    О НАС
                </NavigationMenuItem>

                <NavigationMenuItem
                className = "menu__link"
                subMenu = "header__submenu"
                isSubMenu = {true}
                >
                    КАТАЛОГ ПРОДУКТОВ
                </NavigationMenuItem>

                <NavigationMenuItem
                    subMenu = ""
                    className = "menu__link"
                    isSubMenu = {false}
                >
                    ДОСТАВКА И ОПЛАТА
                </NavigationMenuItem>
            </ul>
        </div>
      </>
  )
}

export default NavigationMenu
