import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/component/NavbarTop.scss";

export const NavbarTop = () => {
	return (
		<Navbar className="full-nav" expand="lg">
			<Navbar.Brand className="brand-nav">
				<i className="fas fa-address-book" />
				Orgnízate
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Link to="/" className="buttons-left">
						Inicio
					</Link>
					<Link to="/Clients" className="buttons-left">
						Clientes
					</Link>
					<Link to="/Funnel" className="buttons-left">
						Oportunidades
					</Link>
					<Link to="/calendario" className="buttons-left">
						Calendario
					</Link>
					<Link to="/informes" className="buttons-left">
						Informes
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
