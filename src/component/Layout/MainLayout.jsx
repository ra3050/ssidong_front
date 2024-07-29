import styled, { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../list/Header";
import Footer from "../list/Footer";
import theme from "../../style/Theme";

const MainLayout = () => {

    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Outlet/>
            <Footer/>
        </ThemeProvider>
    )
}

export default MainLayout