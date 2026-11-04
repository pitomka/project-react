const Promo = (props) => {
    const {
        title,
        children,
    } = props
    return (
        <div className="information__content">
            <h2 className="content__promo-title">
                {title}
            </h2>

            <p className="content__text">
                {children}
            </p>
        </div>
    )
}

export default Promo