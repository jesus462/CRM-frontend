import React, { useState, useEffect, useContext } from "react";
import { ClientCard } from "../component/ClientCard";
import { Context } from "../store/appContext";
import { AddClientForm } from "../component/AddClientForm";

import "../../styles/views/Clients.scss";

export const Clients = () => {
	const { store, actions } = useContext(Context);

	let clientCards = store.clients.map(person => {
		return <ClientCard key={person.id} person={person} />;
	});

	return (
		<div className="client-wrapper">
			<AddClientForm />
			{clientCards}
		</div>
	);
};
