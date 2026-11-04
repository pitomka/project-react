import Header from "../components/Header.jsx";
import MainContent from "../components/MainContent.jsx";
import Footer from "../components/Footer.jsx";

const MainPage = () => {
    return (
        <>
            <Header />
            <MainContent
                isPromo = {true}
            />
            <Footer />
        </>
    )
}

export default MainPage