import React, { Component } from "react";

export const AddClients = () => (
	<div>
		<div className="card mb-3" style={{ "max-width": 18 + "rem" }}>
			<div className="card-header text-white bg-secondary" />
			<div className="card">
				<button
					type="button"
					className="btn btn-light addClient-btn"
					data-toggle="modal"
					data-target="#addClient">
					<i className="fas fa-plus-circle" />
				</button>
			</div>
			<div
				className="modal fade"
				id="addClient"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="addClientLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addClientLabel">
								Datos
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Nombre:</li>
								<li className="list-group-item">Empresa:</li>
								<li className="list-group-item">Cargo:</li>
								<li className="list-group-item">...</li>
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
		</div>
	</div>
);
