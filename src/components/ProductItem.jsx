const ProductItem = (props) => {
    const {
        className = '',
        imgUrl = '',
        title,
        link,
    } = props
    return (
        <div className={`${className}`}>
            <a href={link} className="product__title">

                <img src={imgUrl} alt="image" />

                <div className="content__title">
                    <span className="title">
                        {title}
                    </span>
                </div>
            </a>
        </div>
    )
}

export default ProductItem