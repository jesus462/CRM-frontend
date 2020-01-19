import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

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
						<div className="form-style">
							<Form>
								<Form.Row>
									<Form.Group as={Col} controlId="formGridName">
										<Form.Label>Nombre</Form.Label>
										<Form.Control type="text" placeholder="Ingrese nombre" />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridLastName">
										<Form.Label>Apellido</Form.Label>
										<Form.Control type="text" placeholder="Ingrese apellido" />
									</Form.Group>
								</Form.Row>

								<Form.Row>
									<Form.Group as={Col} controlId="formGridEmpresa">
										<Form.Label>Empresa</Form.Label>
										<Form.Control type="text" placeholder="Ingrese empresa" />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridPosicion">
										<Form.Label>Posición / Cargo</Form.Label>
										<Form.Control
											type="text"
											placeholder="Ingrese la posición o cargo en la empresa"
										/>
									</Form.Group>
								</Form.Row>

								<Form.Group controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" placeholder="Ingrese email" />
								</Form.Group>

								<Form.Row>
									<Form.Group as={Col} controlId="formGridPhone">
										<Form.Label>Teléfono</Form.Label>
										<Form.Control type="number" placeholder="Ingrese número de teléfono" />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridExtraPhone">
										<Form.Label>Teléfono adicional</Form.Label>
										<Form.Control
											type="number"
											placeholder="Ingrese número de teléfono adicional"
										/>
									</Form.Group>
								</Form.Row>

								<Form.Group controlId="formGridSector">
									<Form.Label>Sector / Rubro</Form.Label>
									<Form.Control type="text" placeholder="Ingrese el rubro" />
								</Form.Group>

								<Form.Row>
									<Form.Group as={Col} controlId="formGridCiudad">
										<Form.Label>Ciudad</Form.Label>
										<Form.Control type="text" placeholder="Ingrese la ciudad" />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridPais">
										<Form.Label>País</Form.Label>
										<Form.Control type="text" placeholder="Ingrese el país" />
									</Form.Group>
								</Form.Row>

								<Form.Row>
									<Form.Group as={Col} controlId="formGridLink">
										<Form.Label>Linkedin</Form.Label>
										<Form.Control type="text" placeholder="Ingrese el url" />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridFuente">
										<Form.Label>Fuente</Form.Label>
										<Form.Control type="text" placeholder="Ingrese la fuente" />
									</Form.Group>
								</Form.Row>

								<Form.Group controlId="formGridSector">
									<Form.Label>Sector / Rubro</Form.Label>
									<Form.Control type="textarea" placeholder="Ingrese el rubro" />
								</Form.Group>

								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Observaciones</Form.Label>
									<Form.Control as="textarea" rows="3" />
								</Form.Group>

								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
