const NavigationSubMenuItem = (props) => {
  const {
    className = '',
    children,
  } = props
  return (
    <li className={`${className}`}><a href="#" className="submenu-link">{children}</a></li>
  )
}

export default NavigationSubMenuItem
