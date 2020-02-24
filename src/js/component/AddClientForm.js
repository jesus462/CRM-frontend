import React, { Component, useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Context } from "../store/appContext";

export const AddClientForm = () => {
	const [client, setClient] = useState({
		name: "",
		lastName: "",
		company: "",
		position: "",
		email: "",
		phone: "",
		extraPhone: "",
		sector: "",
		city: "",
		country: "",
		linkedin: "",
		source: "",
		observations: ""
	});

	const { store, actions } = useContext(Context);

	const handleChange = e => {
		setClient({
			...client /*esto hace una copia del estado y va agregando y guardando, agregando ...*/,
			[e.target.name]: e.target.value
		});
		console.log(client);
	};

	const handleSubmit = e => {
		e.preventDefault();
		e.stopPropagation();
		actions.fetchCreateClient(client);
	};

	return (
		<div>
			<div className="card mb-3">
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
								<Form onSubmit={handleSubmit}>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridName">
											<Form.Label>Nombre</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese nombre"
												value={client.name}
												onChange={handleChange}
												name="name"
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridLastName">
											<Form.Label>Apellido</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese apellido"
												value={client.lastName}
												onChange={handleChange}
												name="lastName"
											/>
										</Form.Group>
									</Form.Row>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridCompany">
											<Form.Label>Empresa</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese empresa"
												value={client.company}
												onChange={handleChange}
												name="company"
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridPosition">
											<Form.Label>Posición / Cargo</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese la posición o cargo en la empresa"
												value={client.position}
												onChange={handleChange}
												name="position"
											/>
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="formGridEmail">
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="email"
											placeholder="Ingrese email"
											value={client.email}
											onChange={handleChange}
											name="email"
										/>
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Teléfono</Form.Label>
											<Form.Control
												type="number"
												placeholder="Ingrese número de teléfono"
												value={client.phone}
												onChange={handleChange}
												name="phone"
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridExtraPhone">
											<Form.Label>Teléfono adicional</Form.Label>
											<Form.Control
												type="number"
												placeholder="Ingrese número de teléfono adicional"
												value={client.extraPhone}
												onChange={handleChange}
												name="extraPhone"
											/>
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="formGridSector">
										<Form.Label>Sector / Rubro</Form.Label>
										<Form.Control
											type="text"
											placeholder="Ingrese el rubro"
											value={client.sector}
											onChange={handleChange}
											name="sector"
										/>
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridCity">
											<Form.Label>Ciudad</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese la ciudad"
												value={client.city}
												onChange={handleChange}
												name="city"
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridCountry">
											<Form.Label>País</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese el país"
												value={client.country}
												onChange={handleChange}
												name="country"
											/>
										</Form.Group>
									</Form.Row>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridLinkedin">
											<Form.Label>Linkedin</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese el url"
												value={client.linkedin}
												onChange={handleChange}
												name="linkedin"
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridSource">
											<Form.Label>Fuente</Form.Label>
											<Form.Control
												type="text"
												placeholder="Ingrese la fuente"
												value={client.source}
												onChange={handleChange}
												name="source"
											/>
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="exampleForm.ControlTextarea1">
										<Form.Label>Observaciones</Form.Label>
										<Form.Control
											as="textarea"
											rows="3"
											value={client.observations}
											onChange={handleChange}
											name="observations"
										/>
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
};
