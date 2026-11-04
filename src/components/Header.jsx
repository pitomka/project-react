import Navigation from "./Navigation"
import SearchForm from "./SearchForm"
import UserMenu from "./UserMenu"

const Header = () => {
    return (
        <>
        <header>
            <Navigation />

            <div className="header__delivery">
                <div className="search-form__container">
                    <div className="search-form-product__delivery">
                        <a href="/dostavka" className="header__delivery-link">h

                            <img src="src/assets/__icon/delivery-line-icon.svg" alt="delivery-line-icon"
                                className="header__delivery-line-icon"/>
                            <span className="search-form-product__title">ДОСТАВКА <br/> ПРОДУКТОВ</span>
                        </a>
                    </div>

                    <SearchForm
                        className = "header__search-form"
                    />
                </div>
                <UserMenu />
            </div>
        </header>
        </>
    )
}

export default Header