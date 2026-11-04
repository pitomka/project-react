import Header from "../components/Header.jsx";
import MainContent from "../components/MainContent.jsx";
import Footer from "../components/Footer.jsx";

const DeliveryPage = () => {
    return (
        <>
            <Header />
            <p className="textPath">Главная &#8250; Доставка</p>
            <MainContent
                isPromo = {false}
            />
            <Footer />
        </>
    )
}

export default DeliveryPage