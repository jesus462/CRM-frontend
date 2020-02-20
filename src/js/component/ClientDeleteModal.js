import React, { Component } from "react";

export const ClientDeleteModal = () => (
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
);
