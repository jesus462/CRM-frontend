import React, { Component, useContext, useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "../store/appContext";
import { OpportunityClientModal } from "./OpportunityClientModal";
import PropTypes from "prop-types";

import "../../styles/component/OpportunityCard.scss";

export const OpportunityCard = () => {
	const [show, setShow] = useState(false);

	const { store, actions } = useContext(Context);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="outer-opp-card">
			<Card className="opp-card-style">
				<Card.Header className="btn-head-style-opp" />
				<Card.Body>
					<Card.Title>Proyecto</Card.Title>
					<Card.Text>Descripcion del proyecto.</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Costo:</ListGroupItem>
					<ListGroupItem>Tiempo:</ListGroupItem>
					<ListGroupItem>Alcance:</ListGroupItem>
				</ListGroup>
				<Card.Body>
					<Button className="btn-head-style-opp" onClick={handleShow}>
						<i className="fas fa-male logo-color" />
					</Button>
					<Button className="btn-head-style-opp">
						<i className="fas fa-trash logo-color" />
					</Button>
					<Button className="btn-head-style-opp-arrow">
						<i className="fas fa-arrow-right logo-color" />
					</Button>
				</Card.Body>
			</Card>

			<OpportunityClientModal show={show} handleClose={handleClose} />
		</div>
	);
};
