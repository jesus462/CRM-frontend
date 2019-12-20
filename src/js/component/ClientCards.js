import React, { Component } from "react";

export const ClientCards = () => (
	<div>
		<div className="card mb-3" style={{ "max-width": 18 + "rem" }}>
			<div className="card-header text-white bg-success" />
			<div className="card">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Nombre:</li>
					<li className="list-group-item">Empresa:</li>
					<li className="list-group-item">Cargo:</li>
					<li className="list-group-item">
						<button type="button" className="btn btn-success" data-toggle="modal" data-target="#fullData">
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
		<div
			className="modal fade"
			id="deleteModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="deleteModalLabel"
			aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Borrar
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<textarea
							name="comentarios"
							placeholder="Escribe aquí por qué no se concreto la venta"
							rows="10"
							cols="64"
						/>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Cerrar
						</button>
						<button type="button" className="btn btn-primary">
							Borrar
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);
