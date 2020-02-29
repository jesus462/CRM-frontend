import React, { Component, useContext, useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "../store/appContext";
import { OpportunityClientModal } from "./OpportunityClientModal";
import PropTypes from "prop-types";

import "../../styles/component/OpportunityCard.scss";

export const OpportunityCard = ({ opening }) => {
	const [show, setShow] = useState(false);

	const { store, actions } = useContext(Context);

	const handleClick = e => {
		e.preventDefault();
		e.stopPropagation();
		actions.fetchDeleteOpportunity(opening.id);
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="outer-opp-card">
			<Card className="opp-card-style">
				<Card.Header className="btn-head-style-opp" />
				<Card.Body>
					<Card.Title>{opening.project}</Card.Title>
					<Card.Text>{opening.projectDescription}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Costo: {opening.cost}</ListGroupItem>
					<ListGroupItem>Tiempo: {opening.time}</ListGroupItem>
					<ListGroupItem>Alcance: {opening.reach}</ListGroupItem>
				</ListGroup>
				<Card.Body>
					<Button className="btn-head-style-opp" onClick={handleShow}>
						<i className="fas fa-male logo-color" />
					</Button>
					<Button className="btn-head-style-opp" onClick={handleClick}>
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

OpportunityCard.propTypes = {
	opening: PropTypes.object
};
