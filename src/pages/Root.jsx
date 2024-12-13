import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className=" w-[100%] mx-auto max-w-[1400px] mt-10">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;