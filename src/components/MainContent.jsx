import Product from "./Product"
import Promo from "./Promo.jsx";

const MainContent = (props) => {
    const { isPromo } = props;

    return (
        <main>
            <section className="product">
              <div className="main__title-container">
                  <span className="main__title">
                      Доставка продуктов
                  </span> <br/>
                  <span className="main__subtitle">
                      от главного продовольственного центра страны
                  </span>
              </div>
              <Product />
            </section>

            {isPromo ? (
                <section className="promo">
                    <Promo
                        isMainPage = {true}
                    />
                </section>
            ) : null}


      </main>
    )
}

export default MainContent