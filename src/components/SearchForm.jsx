import SearchFormButton from "./SearchFormButton.jsx"
import Input from "./Input.jsx"

const SearchForm = () => {
    return (
        <form className="header__search-form">
            <SearchFormButton
                className = "search-form__button"
            />
            <Input
                className = "search-form__input"
                type = "text"
                placeholder = "Поиск в интеренте"
            />
        </form>
    )
}

export default SearchForm