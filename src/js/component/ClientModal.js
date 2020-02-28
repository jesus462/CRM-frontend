import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

export const ClientModal = ({ person, handleClose, show }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Datos</Modal.Title>
			</Modal.Header>
			<Modal.Body>Nombre: {person.name}</Modal.Body>
			<Modal.Body>Apellido: {person.lastName}</Modal.Body>
			<Modal.Body>Empresa: {person.company}</Modal.Body>
			<Modal.Body>Posición/Cargo: {person.position}</Modal.Body>
			<Modal.Body>Email: {person.email}</Modal.Body>
			<Modal.Body>Teléfono: {person.phone}</Modal.Body>
			<Modal.Body>Teléfono adicional: {person.extraPhone}</Modal.Body>
			<Modal.Body>Sector/Rubro: {person.sector}</Modal.Body>
			<Modal.Body>Ciudad: {person.city}</Modal.Body>
			<Modal.Body>País: {person.country}</Modal.Body>
			<Modal.Body>Linkedin: {person.linkedin}</Modal.Body>
			<Modal.Body>Fuente: {person.source}</Modal.Body>
			<Modal.Body>Observaciones: {person.obervations}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

ClientModal.propTypes = {
	person: PropTypes.object,
	handleClose: PropTypes.func,
	show: PropTypes.boolean
};
