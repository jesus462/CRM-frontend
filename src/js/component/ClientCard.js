import React, { Component, useContext } from "react";
import { ClientModal } from "./ClientModal";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ClientCard = ({ person }) => {
	const { store, actions } = useContext(Context);

	const handleClick = e => {
		e.preventDefault();
		e.stopPropagation();
		actions.fetchDeleteClient(person.id);
	};

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
							<button
								type="button"
								className="btn btn-head-style"
								data-toggle="modal"
								data-target="#fullData">
								<i className="fas fa-search" />
							</button>
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

			<ClientModal key={person.id} person={person} />
		</div>
	);
};

ClientCard.propTypes = {
	person: PropTypes.object
};
