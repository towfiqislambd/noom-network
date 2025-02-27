import AosProvider from "@/components/Aos/AosProvider";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
    return (
        <AosProvider>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
        </AosProvider>
    );
};

export default Layout;