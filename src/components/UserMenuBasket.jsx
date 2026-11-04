const UserMenuBasket = (props) => {
    const {
        className = '',
    } = props
    return (
        <div className="user-menu__basket">
            <img src="src/assets/__icon/shopping-bag.svg"
                 alt="shopping-bag"
                 className="user-menu__shopping-bag-icon"/>
            <a href="#" className={`${className}`}>0 ₽</a>
        </div>
    )
}

export default UserMenuBasket