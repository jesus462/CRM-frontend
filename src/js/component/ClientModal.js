import React, { Component } from "react";

export const ClientModal = () => (
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
						<li className="list-group-item">Apellido:</li>
						<li className="list-group-item">Empresa:</li>
						<li className="list-group-item">Posición/Cargo:</li>
						<li className="list-group-item">Email:</li>
						<li className="list-group-item">Teléfono:</li>
						<li className="list-group-item">Teléfono adicional:</li>
						<li className="list-group-item">Sector/Rubro:</li>
						<li className="list-group-item">Ciudad:</li>
						<li className="list-group-item">País:</li>
						<li className="list-group-item">Linkedin:</li>
						<li className="list-group-item">Fuente:</li>
						<li className="list-group-item">Observaciones:</li>
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
