import React, { Component, useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const OpportunityClientModal = ({ handleClose, show }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

OpportunityClientModal.propTypes = {
	handleClose: PropTypes.func,
	show: PropTypes.boolean
};
