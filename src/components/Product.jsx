import ProductItem from "./ProductItem.jsx";

// сделать генерацию айди

const MenuItem = [
    {id: 1, title: "ОВОЩИ, ФРУКТЫ, ГРИБЫ, ЯГОДЫ, ЗЕЛЕНЬ", link: "/dostavka/ovoshchi_frukty_griby_yagody_zelen", imgUrl: "src/assets/__product/vegetables.png"},
    {id: 2, title: "МЯСНАЯ ПРОДУКЦИЯ", link: "#", imgUrl: "src/assets/__product/meat.png"},
    {id: 3, title: "ЯЙЦА", link: "#", imgUrl: "src/assets/__product/eggs.png"},
    {id: 4, title: "МОРЕПРОДУКТЫ", link: "#", imgUrl: "src/assets/__product/seafood.png"},
    {id: 5, title: "ЗАМОРОЖЕННЫЕ ПОЛУФАБРИКАТЫ", link: "#", imgUrl: "src/assets/__product/semi_frozen_product.png"},
    {id: 6, title: "ЗААМОРОЖЕННЫЕ ЯГОДЫ", link: "#", imgUrl: "src/assets/__product/frozen-product.png"},
    {id: 7, title: "СОЛЕНЬЯ И МАРИНАДЫ", link: "#", imgUrl: "src/assets/__product/picles_marinades.png"},
    {id: 8, title: "Хлеб", link: "#", imgUrl: "src/assets/__product/bread.png"},
]


const Product = () => {
    return (
        <div className="main__product">
            {MenuItem.map((item) => {
                return (
                    <ProductItem
                        className = "product__content"
                        key = {item.id}
                        title = {item.title}
                        link = {item.link}
                        imgUrl = {item.imgUrl}
                    />
                )
            })}
        </div>
    )
}

export default Product