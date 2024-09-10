import React from "react";
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import CountryList from "../components/CountryList";
const Home = () => {
    return (
        <div className="home">
            <Navigation/> 
            <Logo/> 
            <CountryList/> 
        </div>
    )

}
export default Home