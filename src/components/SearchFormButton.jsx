const SearchFormButton = (props) => {
  const {
    className = '',
    children,
  } = props
  return (
    <button className={`${className}`}><img src="src/assets/__icon/search-icon.svg" alt="search-icon"
        className="header__search-icon"/>{children}</button>
  )
}

export default SearchFormButton
