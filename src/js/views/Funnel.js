import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { ClientCard } from "../component/ClientCard";
import { AddClientForm } from "../component/AddClientForm";

export const Funnel = () => {
	const { store, actions } = useContext(Context);

	let clientCards = store.clients.map(person => {
		return <ClientCard key={person.id} person={person} />;
	});

	return (
		<div className="funnel-flex">
			<div className="funnel-flex-column border">
				<div className="card-header funnel-header">Paso 1</div>
				{clientCards}
			</div>
			<div className="funnel-flex-column border">
				<div className="card-header funnel-header">Paso 2</div>
			</div>
			<div>
				<button
					type="button"
					className="btn stitched"
					data-toggle="button"
					aria-pressed="false"
					autoComplete="off">
					Add Column
				</button>
			</div>
		</div>
	);
};
