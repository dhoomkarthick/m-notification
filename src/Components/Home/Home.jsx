import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import appStore from "../../store/appStore";
import { SkeletonTheme } from "react-loading-skeleton";

const Home = () => {
    return (
        <Provider store={appStore}>
            <Outlet />
        </Provider>
    )
}

export default Home;