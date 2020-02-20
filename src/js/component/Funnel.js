import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { ClientCard } from "./ClientCard";
import { AddClientForm } from "./AddClientForm";

export const Funnel = () => {
	const { store, actions } = useContext(Context);

	let clientCards = store.clients.map(person => {
		return <ClientCard key={person.id} person={person} />;
	});

	return (
		<div className="funnel-flex">
			<div className="funnel-flex-column border">
				<div className="card-header funnel-header">Paso 1</div>
				<AddClientForm />
				{clientCards}
			</div>
			<div className="funnel-flex-column border">
				<div className="card-header funnel-header">Paso 2</div>
				<AddClientForm />
			</div>
			<div className="funnel-flex-column border">
				<div className="card-header funnel-header">Paso 3</div>
				<AddClientForm />
			</div>
			<div className="funnel-flex-column border">
				<div className="card-header funnel-header">Paso 4</div>
				<AddClientForm />
			</div>
			<div className="funnel-flex-column border">
				<div className="card-header funnel-header">Paso 5</div>
				<AddClientForm />
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
