import React, { Component, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { ClientModal } from "./ClientModal";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/component/ClientCard.scss";

export const ClientCard = ({ person }) => {
	const { store, actions } = useContext(Context);

	const handleClick = e => {
		e.preventDefault();
		e.stopPropagation();
		actions.fetchDeleteClient(person.id);
	};

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="clientcard-design">
			<div className="card mb-3 card-style">
				<div className="card-header text-white btn-head-style" />
				<div className="card">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Nombre: {person.name}</li>
						<li className="list-group-item">Empresa: {person.company}</li>
						<li className="list-group-item">Cargo: {person.position}</li>
						<li className="list-group-item">
							<Button className="btn btn-head-style" onClick={handleShow}>
								<i className="fas fa-search logo-color-search" />
							</Button>
							<button onClick={handleClick} type="button" className="btn btn-head-style trash-button">
								<i className="fas fa-trash" />
							</button>
							<button type="button" className="btn btn-head-style next-button">
								<i className="fas fa-arrow-right" />
							</button>
						</li>
					</ul>
				</div>
			</div>

			<ClientModal key={person.id} person={person} show={show} handleClose={handleClose} />
		</div>
	);
};

ClientCard.propTypes = {
	person: PropTypes.object
};
