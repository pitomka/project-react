import Router from "./Router.jsx";
import MainPage from "./pages/MainPage.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx";
import DeliveryInfo from "./components/DeliveryInfo/DeliveryInfo.jsx";

function App() {
    const routes = {
        '/': MainPage,
        '/dostavka': DeliveryPage,
        '/dostavka/ovoshchi_frukty_griby_yagody_zelen': DeliveryInfo,
        '*': () => <div>404 Page not found</div>
    }

  return (
    <Router routes = {routes} />
  )
}

export default App
