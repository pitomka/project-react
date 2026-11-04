import NavigationSubMenu from "./NavigationSubMenu.jsx";

const NavigationMenuItem = (props) => {
    const {
        className = '',
        isSubMenu,
        children,
        subMenu,
    } = props
  return (
    <>
        <li className={`menu__item ${subMenu}`}>
            <a className={`${className}`}>{children}</a>

            {isSubMenu ? <NavigationSubMenu /> : null}
        </li>
    </>
  )
}

export default NavigationMenuItem
