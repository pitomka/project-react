import UserMenuEntry from "./UserMenuEntry"
import UserMenuBasket from "./UserMenuBasket"

const UserMenu = () => {
    return (
        <div className="header__user-menu">
            <UserMenuEntry
                className = "user-menu__title"
                children = "ВОЙТИ"
            />

            <UserMenuBasket
                className = "user-menu__price"
            />
        </div>
    )
}

export default UserMenu