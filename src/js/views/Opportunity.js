import React, { useState, useEffect, useContext } from "react";
import { OpportunityCard } from "../component/OpportunityCard";
import { Context } from "../store/appContext";
import { AddOpportunityForm } from "../component/AddOpportunityForm";

import "../../styles/views/Opportunity.scss";

export const Opportunity = () => {
	const { store, actions } = useContext(Context);

	let opportunityCards = store.opportunitys.map(opening => {
		return <OpportunityCard key={opening.id} opening={opening} />;
	});

	return (
		<div className="opportunity-wrapper">
			<AddOpportunityForm />
			{opportunityCards}
		</div>
	);
};
