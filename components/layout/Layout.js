import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

export default function Layout(props){
    return(
        <>
        <MainNavigation/>
        {props.children}
        <Footer/>
        </>
    )
}