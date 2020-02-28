import React, { Component, useState, useContext } from "react";
import { Form, Button, Col, Modal } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/component/AddClientForm.scss";

export const AddOpportunityForm = () => {
	const [opportunity, setOpportunity] = useState({
		project: "",
		projectDescription: "",
		cost: "",
		time: "",
		reach: ""
	});

	const { store, actions } = useContext(Context);

	const handleChange = e => {
		setOpportunity({
			...opportunity /*esto hace una copia del estado y va agregando y guardando, agregando ...*/,
			[e.target.name]: e.target.value
		});
		console.log(opportunity);
	};

	const handleSubmit = e => {
		e.preventDefault();
		e.stopPropagation();
		actions.fetchCreateOpportunity(opportunity);
		setOpportunity({
			project: "",
			projectDescription: "",
			cost: "",
			time: "",
			reach: ""
		});
	};

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="add-client-card">
			<div className="card mb-3">
				<div className="card">
					<Button className="btn btn-light addClient-btn" variant="primary" onClick={handleShow}>
						<i className="fas fa-plus-circle" />
					</Button>
				</div>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Datos</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={handleSubmit}>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridProject">
									<Form.Label>Proyecto</Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese nombre del proyecto"
										value={opportunity.project}
										onChange={handleChange}
										name="project"
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridCost">
									<Form.Label>Costo</Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese costo"
										value={opportunity.cost}
										onChange={handleChange}
										name="cost"
									/>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} controlId="formGridTime">
									<Form.Label>Tiempo</Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese tiempo estimado del proyecto"
										value={opportunity.time}
										onChange={handleChange}
										name="time"
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridReach">
									<Form.Label>Alcance</Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese el alcance"
										value={opportunity.reach}
										onChange={handleChange}
										name="reach"
									/>
								</Form.Group>
							</Form.Row>

							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Descripción</Form.Label>
								<Form.Control
									as="textarea"
									rows="3"
									value={opportunity.projectDescription}
									onChange={handleChange}
									name="projectDescription"
								/>
							</Form.Group>

							<Button variant="primary" type="submit" onClick={handleClose}>
								Submit
							</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
};
