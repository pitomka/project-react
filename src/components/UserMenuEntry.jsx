const UserMenuEntry = (props) => {
    const {
        className = '',
        children,
    } = props
    return (
        <div className="user-menu__entry">
            <img src="src/assets/__icon/personal-icon.svg" alt="personal-icon" className="user-menu__personal-icon"/>
            <a href="#" className={`${className}`}>{children}</a>
        </div>
    )
}

export default UserMenuEntry