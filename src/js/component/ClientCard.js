import React, { Component, useContext } from "react";
import { ClientModal } from "./ClientModal";
import { ClientDeleteModal } from "./ClientDeleteModal";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ClientCard = ({ person }) => {
	// const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card mb-3">
				<div className="card-header text-white bg-success" />
				<div className="card">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Nombre: {person.name}</li>
						<li className="list-group-item">Empresa: {person.company}</li>
						<li className="list-group-item">Cargo: {person.position}</li>
						<li className="list-group-item">
							<button
								type="button"
								className="btn btn-success"
								data-toggle="modal"
								data-target="#fullData">
								<i className="fas fa-search" />
							</button>
							<button
								type="button"
								className="btn btn-success trash-button"
								data-toggle="modal"
								data-target="#deleteModal">
								<i className="fas fa-trash" />
							</button>
							<button type="button" className="btn btn-success next-button">
								<i className="fas fa-arrow-right" />
							</button>
						</li>
					</ul>
				</div>
			</div>

			<ClientModal />

			<ClientDeleteModal />
		</div>
	);
};

ClientCard.propTypes = {
	person: PropTypes.object
};
