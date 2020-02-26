import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ClientModal = ({ person }) => {
	return (
		<div
			className="modal fade"
			id="fullData"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="fullDataLabel"
			aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Datos
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Nombre: {person.name}</li>
							<li className="list-group-item">Apellido: {person.lastName}</li>
							<li className="list-group-item">Empresa: {person.company}</li>
							<li className="list-group-item">Posición/Cargo: {person.position}</li>
							<li className="list-group-item">Email: {person.email}</li>
							<li className="list-group-item">Teléfono: {person.phone}</li>
							<li className="list-group-item">Teléfono adicional: {person.extraPhone}</li>
							<li className="list-group-item">Sector/Rubro: {person.sector}</li>
							<li className="list-group-item">Ciudad: {person.city}</li>
							<li className="list-group-item">País: {person.country}</li>
							<li className="list-group-item">Linkedin: {person.linkedin}</li>
							<li className="list-group-item">Fuente: {person.source}</li>
							<li className="list-group-item">Observaciones: {person.obervations}</li>
						</ul>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Cerrar
						</button>
						<button type="button" className="btn btn-primary">
							Guardar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ClientModal.propTypes = {
	person: PropTypes.object
};
