import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Cards from "./cardsData";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<><NavBar />
		<div style={{width:'90%', margin:'auto'}}>
		<Jumbotron /><Cards />
		</div>
		<Footer/></>
	);
};

export default Home;
