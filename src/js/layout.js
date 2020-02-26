import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Clients } from "./views/Clients";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Funnel } from "./views/Funnel";
import injectContext from "./store/appContext";

import { NavbarTop } from "./component/NavbarTop";
import { Footer } from "./component/Footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<NavbarTop />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Clients" component={Clients} />
						<Route exact path="/Funnel" component={Funnel} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
